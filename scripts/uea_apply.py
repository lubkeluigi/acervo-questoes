#!/usr/bin/env python3
"""Re-extract UEA question bodies from source PDFs and match to existing records.
Preserves id/subject/correct/alternatives/metadata; replaces statement/blockTypes/images.
Run: python3 scripts/uea_apply.py [--report|--write]
"""
import sys, os, json, re, collections
sys.path.insert(0, os.path.dirname(__file__))
import pymupdf as fitz
import uea_reextract as U

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ALL = json.load(open(os.path.join(ROOT,'scripts','uea_state','uea_all.json')))
FP = json.load(open(os.path.join(ROOT,'scripts','uea_state','uea_figplan.json'))) if os.path.exists(os.path.join(ROOT,'scripts','uea_state','uea_figplan.json')) else {}

# Figure rects per (pdf, page): text falling inside a figure is a label baked
# into the image and must not be duplicated in the statement. Keyed by pdf too,
# since every PDF has its own page 0..N.
PAGE_RECTS = collections.defaultdict(list)
for _q in ALL:
    for _f in FP.get(_q['id'], []):
        PAGE_RECTS[(_q['sourcePdf'], _q['sourcePage'] - 1)].append(_f['rect'])

def in_figure(ln, pdf):
    x, y = ln['x'], ln['y']
    for r in PAGE_RECTS.get((pdf, ln.get('page')), []):
        if r[0] - 8 <= x <= r[2] + 8 and r[1] - 2 <= y <= r[3] + 2:
            return True
    return False

def num_of(q):
    m = re.search(r'(\d+)', str(q['number']))
    return int(m.group(1)) if m else None

ES_MARKERS = ['los ', 'las ', 'del ', 'mientras', 'todavía', 'frecuencia', ' lean', ' sean',
              'en cuanto', 'en veremos', 'obligatoriedad', 'consagrado', 'acumulación', 'ruina',
              'poseer', 'científicamente', '¿', '¡', 'ñ', 'según', 'diferencia', 'conlleva',
              'párrafo', 'subrayad', 'hábito', 'suponer', 'sabrás', 'habrás']

def detect_lang(p):
    t = (' '.join(p['alternatives']) + ' ' + ' '.join(x for _, x in p['blocks'])).lower()
    score = sum(1 for m in ES_MARKERS if m in t)
    return 'Espanhol' if score >= 1 else 'Inglês'

def blocks_to_statement(blocks):
    """Join typed blocks with blank lines; poem keeps internal newlines."""
    return '\n\n'.join(txt for _, txt in blocks)

def parse_pdf(pdf, pages=None):
    doc = fitz.open(os.path.join(ROOT, pdf))
    rng = range(len(doc)) if pages is None else pages
    def keep(ln):
        # never drop question markers or alternatives, even if a rect overlaps
        if U.QMARK.match(ln['text']) or U.ALT.match(ln['text']):
            return True
        return not in_figure(ln, pdf)
    lines = [ln for ln in U.ordered_lines(doc, rng) if keep(ln)]
    qs = U.parse_questions(lines)
    doc.close()
    return qs

def main():
    mode = sys.argv[1] if len(sys.argv) > 1 else '--report'
    bypdf = collections.defaultdict(list)
    for q in ALL:
        bypdf[q['sourcePdf']].append(q)

    matched = 0; unmatched = []; multi = []
    results = {}  # id -> {statement, blockTypes}
    for pdf, qs in sorted(bypdf.items()):
        # group by caderno to handle combined PDFs
        bycad = collections.defaultdict(list)
        for q in qs:
            bycad[q.get('caderno', '?')].append(q)
        combined = len(bycad) > 1
        for cad, cqs in bycad.items():
            if combined:
                pmin = min(q['sourcePage'] for q in cqs)
                pmax = max(q['sourcePage'] for q in cqs)
                pages = range(pmin - 1, pmax)  # 0-based
                parsed = parse_pdf(pdf, pages)
            else:
                parsed = parse_pdf(pdf)
            pbynum = collections.defaultdict(list)
            for p in parsed:
                pbynum[p['number']].append(p)
            for q in cqs:
                n = num_of(q)
                cands = pbynum.get(n, [])
                if len(cands) > 1 and q.get('languageOption'):
                    cands = [c for c in cands if detect_lang(c) == q['languageOption']]
                if len(cands) == 1:
                    p = cands[0]
                    stmt = blocks_to_statement(p['blocks'])
                    btypes = [t for t, _ in p['blocks']]
                    results[q['id']] = {'statement': stmt, 'blockTypes': btypes,
                                        'parsed_alts': p['alternatives']}
                    matched += 1
                elif len(cands) == 0:
                    unmatched.append((q['id'], n, 'missing'))
                else:
                    multi.append((q['id'], n, len(cands)))
    print(f'matched {matched}/{len(ALL)}')
    print(f'unmatched {len(unmatched)}:')
    for uid, n, why in unmatched[:60]:
        print(f'   {uid}  (q{n}, {why})')
    if multi:
        print(f'ambiguous {len(multi)}:')
        for uid, n, c in multi[:30]:
            print(f'   {uid} q{n} x{c}')
    if mode == '--write':
        json.dump(results, open(os.path.join(ROOT,'scripts','uea_state','uea_reextracted.json'), 'w'), ensure_ascii=False, indent=1)
        print('wrote scripts/uea_state/uea_reextracted.json')

if __name__ == '__main__':
    main()
