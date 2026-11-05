#!/usr/bin/env python3
"""Second figure pass: questions that mention a figure/graph/scheme but had no
image reference in the original ingestion. Detects raster/vector art in the
question's layout region and cuts it in vector mode (SVG), upright.

Run after uea_images.py + uea_images_special.py; then uea_commit_text.py.
Use --from-plan to re-extract the saved plan (e.g. after tweaking label rules).
"""
import sys, os, json, re, collections
sys.path.insert(0, os.path.dirname(__file__))
import pymupdf as fitz
import uea_reextract as U
import uea_images as I
import uea_apply as A

ROOT = I.ROOT
STATE = os.path.join(ROOT, 'scripts', 'uea_state')
ALL = json.load(open(os.path.join(STATE, 'uea_all.json')))

FIGWORD = re.compile(
    r'\b(figura|gr[áa]fico|esquema|imagem|mapa|desenho|charge|tirinha|foto|fotografia|diagrama|infogr[áa]fico|ilustra[çc][ãa]o)\b',
    re.I)


def expand_labels(page, rect):
    """Conservatively include short axis/legend labels; never prose sentences,
    question markers or alternative markers."""
    rr = fitz.Rect(rect)
    for b in page.get_text('dict')['blocks']:
        if b['type'] != 0:
            continue
        for l in b['lines']:
            txt = ''.join(sp['text'] for sp in l['spans']).strip()
            if not txt or len(txt) > 30:
                continue
            if txt[-1] in '.;?!':
                continue
            if U.QMARK.match(txt) or U.ALT.match(txt):
                continue
            lr = fitz.Rect(l['bbox'])
            if abs(lr.y0 - rr.y0) < 18 or abs(lr.y1 - rr.y1) < 18:
                if lr.x0 > rr.x0 - 12 and lr.x1 < rr.x1 + 12:
                    rr |= lr
    return rr


def detect_figs(page, region):
    rasters = I.raster_rects(page, region)
    vectors = I.vector_clusters(page, region)
    vectors = [r for r in vectors if not any(
        not (r.x0 > rr[1].x1 or rr[1].x0 > r.x1 or r.y0 > rr[1].y1 or rr[1].y0 > r.y1)
        for rr in rasters)]
    figs = [{'kind': 'raster', 'xref': x, 'rect': tuple(r)} for x, r in rasters]
    figs += [{'kind': 'vector', 'rect': tuple(r)} for r in vectors]
    figs.sort(key=lambda f: (f['rect'][1], f['rect'][0]))
    if len(figs) > 1:
        ux0 = min(f['rect'][0] for f in figs); uy0 = min(f['rect'][1] for f in figs)
        ux1 = max(f['rect'][2] for f in figs); uy1 = max(f['rect'][3] for f in figs)
        if (ux1 - ux0) < 280 and (uy1 - uy0) < 760:
            figs = [{'kind': 'composite', 'rect': (ux0, uy0, ux1, uy1)}]
    return figs


def detect_plan():
    refs = json.load(open(os.path.join(STATE, 'uea_imgrefs.json')))
    altimg = json.load(open(os.path.join(STATE, 'uea_altimg.json')))
    hasimg = {q['id'] for q in ALL if q.get('images')} | set(refs) | set(altimg)
    targets = [q for q in ALL if q['id'] not in hasimg and FIGWORD.search(q.get('statement', ''))]
    bypdf = collections.defaultdict(list)
    for q in targets:
        bypdf[q['sourcePdf']].append(q)
    plan = {}
    stats = collections.Counter()
    for pdf, qs in sorted(bypdf.items()):
        doc = fitz.open(os.path.join(ROOT, pdf))
        parsed = U.parse_questions(U.ordered_lines(doc, range(len(doc))))
        pby = collections.defaultdict(list)
        for p in parsed:
            pby[(p['number'], p['page'])].append(p)
        for q in qs:
            n = I.num_of(q); pg = q['sourcePage'] - 1
            cands = pby.get((n, pg), []) or [p for p in parsed if p['number'] == n and abs(p['page'] - pg) <= 1]
            if len(cands) > 1 and q.get('languageOption'):
                cands = [c for c in cands if A.detect_lang(c) == q['languageOption']]
            if not cands:
                stats['no-match'] += 1; continue
            p = cands[0]; page = doc[p['page']]
            cx0, cx1 = I.col_region(p['col'])
            ctx_ys = [l['y'] for l in p.get('ctx', [])]
            top = min([p['marker_y']] + ctx_ys) - 6 if ctx_ys else p['marker_y']
            bot = p['alt_y'] if p['alt_y'] else 800
            figs = detect_figs(page, (cx0, top, cx1, bot))
            if not figs:
                ox0, ox1 = I.col_region(1 - p['col'])
                figs = detect_figs(page, (ox0, top, ox1, bot))
                if figs:
                    stats['opposite-column'] += 1
            if figs:
                plan[q['id']] = figs
                stats['detected'] += 1
            else:
                stats['no-fig'] += 1
        doc.close()
    json.dump(plan, open(os.path.join(STATE, 'uea_missing_figplan.json'), 'w'), indent=1)
    print('missing-figure plan:', dict(stats), 'questions:', len(plan))
    return plan


def extract_plan(plan):
    refs = json.load(open(os.path.join(STATE, 'uea_imgrefs.json')))
    allmap = {q['id']: q for q in ALL}
    docs = {}
    seen = {}
    ex = collections.Counter()
    for uid, figs in plan.items():
        q = allmap[uid]
        pdf = q['sourcePdf']
        if pdf not in docs:
            docs[pdf] = fitz.open(os.path.join(ROOT, pdf))
        doc = docs[pdf]
        outdir = os.path.join(ROOT, 'public', 'images', 'uea', I.img_dir(q))
        os.makedirs(outdir, exist_ok=True)
        newrefs = []
        n = I.num_of(q)
        for k, f in enumerate(figs, 1):
            pg = q['sourcePage'] - 1
            page = doc[pg]
            rect = expand_labels(page, f['rect'])
            key = (pdf, pg, tuple(round(v) for v in rect))
            if key in seen:
                src = seen[key]
            else:
                fname = f'q{n:02d}-{k}.svg'
                I.extract_vector(page, rect, os.path.join(outdir, fname))
                src = f'/images/uea/{I.img_dir(q)}/{fname}'
                seen[key] = src
                ex['svg'] += 1
            newrefs.append({'src': src, 'alt': f'Figura de apoio da questão {n:02d}.'})
        if newrefs:
            refs[uid] = newrefs
    json.dump(refs, open(os.path.join(STATE, 'uea_imgrefs.json'), 'w'), ensure_ascii=False, indent=1)
    print('extracted:', dict(ex), 'total refs now:', len(refs))


def main():
    if '--from-plan' in sys.argv:
        plan = json.load(open(os.path.join(STATE, 'uea_missing_figplan.json')))
        print('re-extracting missing figures from plan:', len(plan))
    else:
        plan = detect_plan()
    extract_plan(plan)


if __name__ == '__main__':
    main()
