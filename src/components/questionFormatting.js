import { renderMixedMathHtml } from './MathText.jsx';

export function statementToHtml(questionOrStatement, section = 'main') {
  const question = typeof questionOrStatement === 'object' ? questionOrStatement : null;
  const statement = question ? (section === 'after' ? question.statementAfter : section === 'tail' ? question.statementTail : question.statement) : questionOrStatement;
  const blockTypes = question ? (section === 'after' ? (question.afterBlockTypes || []) : section === 'tail' ? (question.tailBlockTypes || []) : (question.blockTypes || [])) : [];
  if (!statement) return '';
  const works = question?.works || [];
  const escape = (text) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const inline = (text) => {
    let html = escape(text);
    works.forEach((work) => {
      const title = escape(work);
      html = html.split(title).join(`<em>${title}</em>`);
    });
    return renderMixedMathHtml(html);
  };
  const withLineBreaks = (text) => text.split('\n').map((line) => inline(line)).join('<br />');
  const verses = (text, className) => text.split('\n').map((line) => `<span class="${className}">${inline(line) || '&nbsp;'}</span>`).join('');
  const paragraphs = statement.split('\n\n');
  let html = '';
  let index = 0;
  while (index < paragraphs.length) {
    const type = blockTypes[index] || 'prose';
    const text = paragraphs[index];
    if (type === 'list') {
      const items = [];
      while (index < paragraphs.length && (blockTypes[index] || 'prose') === 'list') {
        paragraphs[index].split('\n').filter(Boolean).forEach((item) => items.push(`<li>${inline(item)}</li>`));
        index += 1;
      }
      html += `<ul class="statement-list">${items.join('')}</ul>`;
      continue;
    }
    if (type === 'quote') {
      const group = [];
      while (index < paragraphs.length && (blockTypes[index] || 'prose') === 'quote') {
        group.push(`<p>${withLineBreaks(paragraphs[index])}</p>`);
        index += 1;
      }
      html += `<blockquote class="passage-quote">${group.join('')}</blockquote>`;
      continue;
    }
    if (type === 'dictionary') {
      const entries = [];
      while (index < paragraphs.length && (blockTypes[index] || 'prose') === 'dictionary') {
        const [term, ...definition] = paragraphs[index].split('\n');
        entries.push(`<div class="dictionary-entry"><strong>${inline(term)}</strong><p>${withLineBreaks(definition.join('\n'))}</p></div>`);
        index += 1;
      }
      html += `<div class="dictionary-box">${entries.join('')}</div>`;
      continue;
    }
    if (type === 'label') html += `<div class="statement-label">${withLineBreaks(text)}</div>`;
    else if (type === 'subheading') html += `<h4 class="statement-subheading">${withLineBreaks(text)}</h4>`;
    else if (type === 'poem-title') html += `<h4 class="poem-title">${withLineBreaks(text)}</h4>`;
    else if (type === 'poem') html += `<div class="poem-stanza">${verses(text, 'poem-verse')}</div>`;
    else if (type === 'source') html += `<div class="passage-source">${withLineBreaks(text)}</div>`;
    else if (type === 'command') html += `<p class="statement-command">${withLineBreaks(text)}</p>`;
    else if (type === 'note') html += `<p class="statement-note">${withLineBreaks(text)}</p>`;
    else if (type === 'headline') html += `<div class="news-headline">${withLineBreaks(text)}</div>`;
    else if (type === 'note-box') html += `<div class="note-box">${withLineBreaks(text)}</div>`;
    else html += `<p class="statement-prose">${withLineBreaks(text)}</p>`;
    index += 1;
  }
  return html;
}

