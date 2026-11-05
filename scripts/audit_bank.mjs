#!/usr/bin/env node
// Whole-bank quality audit against the real app modules (rolldown bundle).
import { rolldown } from 'rolldown';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const cache = path.join(ROOT, 'node_modules', '.cache');
fs.mkdirSync(cache, { recursive: true });
const entry = path.join(cache, 'acervo-audit-entry.mjs');
const out = path.join(cache, 'acervo-audit.bundle.mjs');
fs.writeFileSync(entry, [
  'export { questions, exams } from ' + JSON.stringify(path.join(ROOT, 'src/data/questions.js')) + ';',
  'export { MATH_PARTS, renderMathHtml } from ' + JSON.stringify(path.join(ROOT, 'src/components/MathText.jsx')) + ';',
  'export { statementToHtml } from ' + JSON.stringify(path.join(ROOT, 'src/components/questionFormatting.js')) + ';',
].join('\n'));
const bundle = await rolldown({
  input: entry,
  platform: 'node',
  external: ['react', 'react/jsx-runtime', 'katex'],
  plugins: [{
    name: 'strip-css',
    resolveId(id) { if (id.endsWith('.css')) return '\0empty-css'; },
    load(id) { if (id === '\0empty-css') return 'export default {};'; },
  }],
  transform: { jsx: 'react' },
});
await bundle.write({ file: out, format: 'esm' });
await bundle.close();
const { questions, MATH_PARTS, renderMathHtml } = await import(pathToFileURL(out).href);

const CTRL = new RegExp('[\\u0000-\\u0008\\u000b\\u000c\\u000e-\\u001f\\u007f]');
const FORBIDDEN = /gabarito oficial|caderno original|fonte:\s*provas|chave oficial/i;
const FIGWORD = /\b(figura|gr[áa]fico|esquema|mapa|imagem|diagrama|infogr[áa]fico|charge|tirinha|foto|fotografia|desenho|ilustra[çc][ãa]o)\b/i;
const NL = String.fromCharCode(10);
const issues = [];
const add = (q, type, detail) => issues.push({ id: q.id, exam: q.exam, type, detail });
const byExam = {};
const imgExt = {};
let mathChecked = 0, mathBad = 0;

function walkStrings(v, cb) {
  if (typeof v === 'string') cb(v);
  else if (Array.isArray(v)) v.forEach((x) => walkStrings(x, cb));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => walkStrings(x, cb));
}
function checkMath(q, text, where) {
  if (typeof text !== 'string') return;
  for (const m of text.matchAll(MATH_PARTS)) {
    const tex = m[0].replace(/^\$+|\$+$/g, '');
    mathChecked++;
    const html = renderMathHtml(tex, m[0].startsWith('$$'));
    if (/katex-error/.test(html)) { mathBad++; add(q, 'math', where + ': ' + tex.slice(0, 80)); }
  }
}
function imagesOf(q) {
  const list = [];
  for (const k of ['images', 'afterImages']) if (Array.isArray(q[k])) list.push(...q[k]);
  if (Array.isArray(q.alternativeImages)) q.alternativeImages.forEach((g) => Array.isArray(g) && list.push(...g));
  return list;
}

for (const q of questions) {
  byExam[q.exam] = (byExam[q.exam] || 0) + 1;
  walkStrings(q, (s) => {
    if (CTRL.test(s)) add(q, 'control', JSON.stringify(s.slice(0, 60)));
    if (FORBIDDEN.test(s)) add(q, 'forbidden', s.slice(0, 80));
  });
  const hasText = (q.statement && q.statement.trim()) || (q.statementAfter && q.statementAfter.trim()) || (q.statementTail && q.statementTail.trim()) || (q.math && q.math.trim()) || (q.parts && q.parts.length);
  if (!hasText) add(q, 'emptyStatement', '');
  const alts = q.alternatives || [];
  if (q.kind !== 'discursive') {
    if (![4, 5].includes(alts.length)) add(q, 'altCount', String(alts.length));
    if (typeof q.correct !== 'number' || q.correct < 0 || q.correct >= alts.length) add(q, 'correctIndex', String(q.correct));
    alts.forEach((a, i) => {
      const t = typeof a === 'string' ? a : (a && a.text) || '';
      if (!t.trim() && !(q.alternativeImages && q.alternativeImages[i])) add(q, 'altEmpty', String(i));
      if (/\bQUEST[ÃA]O\s+\d/i.test(t) || t.length > 600) add(q, 'altBleed', i + ':' + t.length);
    });
  }
  const imgs = imagesOf(q);
  for (const im of imgs) {
    const src = (im.src || '').split('?')[0];
    const ext = (src.split('.').pop() || '').toLowerCase();
    imgExt[ext] = (imgExt[ext] || 0) + 1;
    if (!src.startsWith('/images/')) add(q, 'imagePath', src);
    else if (!fs.existsSync(path.join(ROOT, 'public', src))) add(q, 'imageMissing', src);
  }
  const hasVisual = imgs.length || q.diagram || q.afterDiagram || (q.tables && q.tables.length) || (q.afterTables && q.afterTables.length);
  if (!hasVisual && FIGWORD.test(q.statement || '')) add(q, 'figWordNoImage', (q.statement.match(FIGWORD) || [''])[0]);
  const blocks = (q.statement || '').split(NL + NL);
  const types = q.blockTypes || [];
  blocks.forEach((b, i) => {
    const t = types[i] || 'prose';
    if (['prose', 'command', 'quote', 'source', 'note'].includes(t) && b.includes(NL)) {
      const lines = b.split(NL);
      const mid = lines.some((ln, j) => j < lines.length - 1 && ln.trim() && !/[.;:!?…)\]"”»]$/.test(ln.trim()) && lines[j + 1].trim() && /^[a-zà-ú]/.test(lines[j + 1].trim()));
      if (mid) add(q, 'lineBreak', 'block' + i + '(' + t + '): ' + b.replace(new RegExp(NL, 'g'), ' / ').slice(0, 90));
    }
  });
  if (types.length > blocks.length) add(q, 'blockTypesLen', types.length + ' vs ' + blocks.length);
  checkMath(q, q.statement, 'stmt');
  checkMath(q, q.statementAfter, 'after');
  checkMath(q, q.statementTail, 'tail');
  checkMath(q, q.math, 'math');
  checkMath(q, q.afterMath, 'afterMath');
  alts.forEach((a, i) => checkMath(q, typeof a === 'string' ? a : a && a.text, 'alt' + i));
  (q.resolution || []).forEach((r, i) => checkMath(q, r, 'res' + i));
  (q.analyses || []).forEach((r, i) => checkMath(q, r, 'ana' + i));
  (q.parts || []).forEach((p) => checkMath(q, p.prompt, 'part'));
}

const counts = {};
issues.forEach((i) => { counts[i.type] = (counts[i.type] || 0) + 1; });
const nonUea = issues.filter((i) => !/^UEA/.test(i.exam));
const nonUeaCounts = {};
nonUea.forEach((i) => { nonUeaCounts[i.type] = (nonUeaCounts[i.type] || 0) + 1; });
const report = { total: questions.length, byExam, imgExt, mathChecked, mathBad, counts, nonUeaCounts, issues };
fs.writeFileSync('/tmp/bank_audit.json', JSON.stringify(report, null, 1));
console.log(JSON.stringify({ total: questions.length, imgExt, mathChecked, mathBad, counts, nonUeaCounts }, null, 1));
console.log('--- non-UEA issues (first 60) ---');
nonUea.slice(0, 60).forEach((i) => console.log(i.type, i.id, i.detail));
