#!/usr/bin/env python3
"""Reconstruct UEA statement tables from PDF grid geometry + word coordinates.

The original ingestion read table cells in PDF reading order, which scrambled
columns and left empty cells. Here we detect the table's horizontal rules (rows)
and column split x-positions, then assign each word to its (row, col) cell.
Writes corrected table blocks into uea_text_overrides.json (full statement).
Run before uea_commit_text.py.
"""
import sys, os, json, collections
sys.path.insert(0, os.path.dirname(__file__))
import pymupdf as fitz
import uea_reextract as U
import uea_images as I
import uea_apply as A

ROOT = I.ROOT
STATE = os.path.join(ROOT, 'scripts', 'uea_state')
ALL = json.load(open(os.path.join(STATE, 'uea_all.json')))
# Tables corrected by hand (formula drawings / spanning headers / misparsed alts)
MANUAL = {'uea-sis-2023-a1-q58','uea-sis-2024-a3-q54','uea-vestibular-2024-cg-q73',
          'uea-vestibular-2024-cg-q79','uea-sis-2025-a1-q38','uea-sis-2026-a2-q27',
          'uea-vestibular-2026-g1-q12'}
REX = json.load(open(os.path.join(STATE, 'uea_reextracted.json')))


def merge_vals(vals, tol=3.0):
    vals = sorted(vals)
    out = []
    for v in vals:
        if out and v - out[-1][-1] <= tol:
            out[-1].append(v)
        else:
            out.append([v])
    return [sum(g) / len(g) for g in out]


def grid_table(page, colx, ytop, ybot):
    segs = []
    for d in page.get_drawings():
        r = d['rect']
        if r.height < 3 and r.width > 30 and r.x0 >= colx[0] - 2 and r.x1 <= colx[1] + 2 \
           and r.y0 > ytop and r.y1 < ybot:
            segs.append(r)
    if len(segs) < 3:
        return None
    ys = merge_vals([r.y0 for r in segs], 1.5)
    if len(ys) < 3:
        return None
    # keep the largest contiguous cluster of row rules (gap <= 25pt)
    clusters = [[ys[0]]]
    for y in ys[1:]:
        if y - clusters[-1][-1] <= 25:
            clusters[-1].append(y)
        else:
            clusters.append([y])
    ys = max(clusters, key=len)
    if len(ys) < 3:
        return None
    # Only rules belonging to the chosen row cluster define columns (avoids the
    # question title underline or neighbouring tables leaking extra boundaries).
    segs = [r for r in segs if ys[0] - 1 <= r.y0 <= ys[-1] + 1]
    xs = merge_vals([r.x0 for r in segs] + [r.x1 for r in segs], 3.0)
    if len(xs) < 2:
        return None
    words = [w for w in page.get_text('words')
             if colx[0] - 2 <= (w[0] + w[2]) / 2 <= colx[1] + 2 and ys[0] - 1 <= (w[1] + w[3]) / 2 <= ys[-1] + 1]
    rows = []
    for i in range(len(ys) - 1):
        cells = []
        for j in range(len(xs) - 1):
            cw = [w for w in words if ys[i] - 0.5 <= (w[1] + w[3]) / 2 < ys[i + 1] + 0.5
                  and xs[j] - 0.5 <= (w[0] + w[2]) / 2 < xs[j + 1] + 0.5]
            cw.sort(key=lambda w: (round(w[1], 1), w[0]))
            cells.append(' '.join(w[4] for w in cw).strip())
        rows.append(cells)
    # drop fully-empty columns and rows (border artefacts)
    if rows:
        keep = [j for j in range(len(rows[0])) if any(r[j] for r in rows)]
        rows = [[r[j] for j in keep] for r in rows]
        rows = [r for r in rows if any(c for c in r)]
    return rows or None


def main():
    bypdf = collections.defaultdict(list)
    for q in ALL:
        bt = REX[q['id']]['blockTypes']
        if 'table' in bt:
            bypdf[q['sourcePdf']].append(q)
    overrides = json.load(open(os.path.join(ROOT, 'scripts', 'uea_text_overrides.json')))
    fixed = 0
    for pdf, qs in sorted(bypdf.items()):
        doc = fitz.open(os.path.join(ROOT, pdf))
        parsed = U.parse_questions(U.ordered_lines(doc, range(len(doc))))
        pby = collections.defaultdict(list)
        for p in parsed:
            pby[(p['number'], p['page'])].append(p)
        for q in qs:
            if q['id'] in MANUAL: continue
            n = I.num_of(q); pg = q['sourcePage'] - 1
            cands = pby.get((n, pg), []) or [p for p in parsed if p['number'] == n and abs(p['page'] - pg) <= 1]
            if len(cands) > 1 and q.get('languageOption'):
                cands = [c for c in cands if A.detect_lang(c) == q['languageOption']]
            if not cands:
                continue
            p = cands[0]; page = doc[p['page']]
            colx = I.col_region(p['col'])
            rows = grid_table(page, colx, p['marker_y'] + 8, (p['alt_y'] or 800))
            if not rows:
                print('NO GRID', q['id']); continue
            tsv = '\n'.join('\t'.join(c) for c in rows)
            rex = REX[q['id']]
            blocks = rex['statement'].split('\n\n')
            bt = list(rex['blockTypes'])
            ti = bt.index('table')
            if ti >= len(blocks):
                continue
            # Preserve any caption lines that the old ingestion glued to the top
            # of the table block (they carry no tab) by folding into prior prose.
            orig_lines = blocks[ti].split('\n')
            caption = []
            for ln in orig_lines:
                if '\t' in ln:
                    break
                if ln.strip():
                    caption.append(ln.strip())
            if caption and ti > 0:
                blocks[ti - 1] = blocks[ti - 1].rstrip() + ' ' + ' '.join(caption)
            blocks[ti] = tsv
            newstmt = '\n\n'.join(blocks)
            overrides[q['id']] = {'statement': newstmt, 'blockTypes': bt}
            fixed += 1
            print('FIX', q['id'], 'rows', len(rows), 'cols', len(rows[0]))
        doc.close()
    json.dump(overrides, open(os.path.join(ROOT, 'scripts', 'uea_text_overrides.json'), 'w'), ensure_ascii=False, indent=2)
    print('tables fixed:', fixed, 'overrides total:', len(overrides))


if __name__ == '__main__':
    main()
