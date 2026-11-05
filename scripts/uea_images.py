#!/usr/bin/env python3
"""Re-extract UEA question figures: tight-cropped native raster + SVG for vector art.
Matches figures to questions by layout position. Writes to public/images/uea/...
Usage: python3 scripts/uea_images.py [--report|--write]
"""
import sys, os, json, re, collections
sys.path.insert(0, os.path.dirname(__file__))
import pymupdf as fitz
import uea_reextract as U

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ALL = json.load(open('/tmp/uea_all.json'))

def num_of(q):
    m = re.search(r'(\d+)', str(q['number']))
    return int(m.group(1)) if m else None

def is_rule(d):
    r = d['rect']
    # thin horizontal/vertical rules, column divider, header lines
    if r.width < 3 or r.height < 3: return True
    if r.height > 600 and r.width < 4: return True  # column divider
    return False

def vector_clusters(page, region):
    """Cluster non-rule drawings inside region into figure bboxes."""
    drs = [d for d in page.get_drawings() if not is_rule(d)]
    x0, y0, x1, y1 = region
    inside = []
    for d in drs:
        r = d['rect']
        cx, cy = (r.x0 + r.x1) / 2, (r.y0 + r.y1) / 2
        if x0 - 4 <= cx <= x1 + 4 and y0 - 2 <= cy <= y1 + 2:
            inside.append(d)
    if not inside: return []
    # cluster by proximity (union-find on bbox overlap expanded by 8)
    rects = [d['rect'] for d in inside]
    parent = list(range(len(rects)))
    def find(a):
        while parent[a] != a: parent[a] = parent[parent[a]]; a = parent[a]
        return a
    def union(a, b):
        ra, rb = find(a), find(b)
        if ra != rb: parent[ra] = rb
    for i in range(len(rects)):
        for j in range(i + 1, len(rects)):
            a, b = rects[i], rects[j]
            if not (a.x0 - 10 > b.x1 or b.x0 - 10 > a.x1 or a.y0 - 10 > b.y1 or b.y0 - 10 > a.y1):
                union(i, j)
    groups = collections.defaultdict(list)
    for i in range(len(rects)): groups[find(i)].append(rects[i])
    out = []
    for g in groups.values():
        bx0 = min(r.x0 for r in g); by0 = min(r.y0 for r in g)
        bx1 = max(r.x1 for r in g); by1 = max(r.y1 for r in g)
        if (bx1 - bx0) > 15 and (by1 - by0) > 15:
            out.append(fitz.Rect(bx0, by0, bx1, by1))
    return out

def raster_rects(page, region):
    x0, y0, x1, y1 = region
    out = []
    for img in page.get_images(full=True):
        xref = img[0]
        for r in page.get_image_rects(xref):
            cx, cy = (r.x0 + r.x1) / 2, (r.y0 + r.y1) / 2
            if x0 - 4 <= cx <= x1 + 4 and y0 - 2 <= cy <= y1 + 2:
                out.append((xref, r))
    return out

def col_region(col):
    return (30, 305) if col == 0 else (300, 565)

def extract_raster(doc, xref, outpath, page=None, rect=None):
    try:
        pix = fitz.Pixmap(doc, xref)
        if pix.colorspace is None:
            raise ValueError('null colorspace')
        if pix.colorspace.n > 3:
            pix = fitz.Pixmap(fitz.csRGB, pix)
        if pix.alpha:
            pix = fitz.Pixmap(pix, 0)
        pix.save(outpath)
        return pix.width, pix.height
    except Exception:
        if page is not None and rect is not None:
            pix = page.get_pixmap(matrix=fitz.Matrix(3, 3), clip=rect, alpha=False)
            pix.save(outpath)
            return pix.width, pix.height
        raise

def _svg_path(items):
    seg = []; cur = None
    def move(p):
        return cur is None or abs(p.x - cur.x) > 0.05 or abs(p.y - cur.y) > 0.05
    for it in items:
        k = it[0]
        if k == 'l':
            p1, p2 = it[1], it[2]
            if move(p1): seg.append(f'M{p1.x:.2f} {p1.y:.2f}')
            seg.append(f'L{p2.x:.2f} {p2.y:.2f}'); cur = p2
        elif k == 'c':
            p1, p2, p3, p4 = it[1], it[2], it[3], it[4]
            if move(p1): seg.append(f'M{p1.x:.2f} {p1.y:.2f}')
            seg.append(f'C{p2.x:.2f} {p2.y:.2f} {p3.x:.2f} {p3.y:.2f} {p4.x:.2f} {p4.y:.2f}'); cur = p4
        elif k == 're':
            r = it[1]
            seg.append(f'M{r.x0:.2f} {r.y0:.2f}h{r.width:.2f}v{r.height:.2f}h{-r.width:.2f}Z'); cur = None
        elif k == 'qu':
            q = it[1]
            seg.append(f'M{q.ul.x:.2f} {q.ul.y:.2f}L{q.ur.x:.2f} {q.ur.y:.2f}L{q.lr.x:.2f} {q.lr.y:.2f}L{q.ll.x:.2f} {q.ll.y:.2f}Z'); cur = None
    return ''.join(seg)

def _color(c):
    if c is None: return 'none'
    return '#%02x%02x%02x' % tuple(int(round(v * 255)) for v in c[:3])

def svg_faithful(page, rect, svgpath):
    """Compare SVG render to original page region pixel-by-pixel."""
    try:
        r = fitz.Rect(rect.x0 - 3, rect.y0 - 3, rect.x1 + 3, rect.y1 + 3)
        svgdoc = fitz.open(svgpath)
        svgpix = svgdoc[0].get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
        origpix = page.get_pixmap(matrix=fitz.Matrix(2, 2), clip=r, alpha=False)
        w = min(svgpix.width, origpix.width); h = min(svgpix.height, origpix.height)
        if w < 10 or h < 10: return False
        if (svgpix.width, svgpix.height) != (origpix.width, origpix.height):
            return False
        s = svgpix.samples; o = origpix.samples
        n = svgpix.n
        big = 0; tot = 0; ssum = 0
        for i in range(0, len(s), n):
            d = max(abs(s[i]-o[i]), abs(s[i+1]-o[i+1]), abs(s[i+2]-o[i+2]))
            tot += 1; ssum += d
            if d > 60: big += 1
        return (ssum / tot) < 6 and (big / tot) < 0.01
    except Exception:
        return False

def extract_vector(page, rect, outpath):
    """Vectorize by copying the clipped region into a temp page and exporting SVG."""
    r = fitz.Rect(rect.x0 - 3, rect.y0 - 3, rect.x1 + 3, rect.y1 + 3)
    tmp = fitz.open()
    np = tmp.new_page(width=r.width, height=r.height)
    np.show_pdf_page(np.rect, page.parent, page.number, clip=r)
    svg = np.get_svg_image(text_as_path=True)
    with open(outpath, 'w') as f:
        f.write(svg)
    tmp.close()
    return 1

def has_text_overlay(page, rect):
    r = fitz.Rect(rect)
    for b in page.get_text('dict')['blocks']:
        if b['type'] != 0: continue
        for l in b['lines']:
            lr = fitz.Rect(l['bbox'])
            inter = lr & r
            if not inter.is_empty and inter.get_area() > 0.5 * lr.get_area():
                txt = ''.join(s['text'] for s in l['spans']).strip()
                if txt: return True
    return False

def img_dir(q):
    parts = q['id'].split('-')
    return f"{parts[1]}-{parts[2]}-{parts[3]}"

def main():
    mode = sys.argv[1] if len(sys.argv) > 1 else '--report'
    # group questions by pdf
    bypdf = collections.defaultdict(list)
    for q in ALL:
        if q.get('images'): bypdf[q['sourcePdf']].append(q)
    stats = collections.Counter()
    plan = {}  # id -> list of figure specs
    for pdf, qs in sorted(bypdf.items()):
        doc = fitz.open(os.path.join(ROOT, pdf))
        parsed = U.parse_questions(U.ordered_lines(doc, range(len(doc))))
        # for combined PDFs, parsed numbers may collide; match by page too
        for q in qs:
            n = num_of(q)
            pg = q['sourcePage'] - 1
            cands = [p for p in parsed if p['number'] == n and p['page'] == pg]
            if not cands:
                cands = [p for p in parsed if p['number'] == n and abs(p['page'] - pg) <= 1]
            if not cands:
                stats['no-match'] += 1; continue
            p = cands[0]
            cx0, cx1 = col_region(p['col'])
            ctx_ys = [l['y'] for l in p.get('ctx', [])]
            top = min([p['marker_y']] + ctx_ys) - 6 if ctx_ys else p['marker_y']
            bot = p['alt_y'] if p['alt_y'] else 800
            region = (cx0, top, cx1, bot)
            page = doc[pg]
            rasters = raster_rects(page, region)
            vectors = vector_clusters(page, region)
            figs = []
            for xref, r in rasters:
                figs.append({'kind': 'raster', 'xref': xref, 'rect': tuple(r)})
            for r in vectors:
                # skip vector cluster that overlaps a raster (it's the raster's frame)
                if any(not (r.x0 > rr[1].x1 or rr[1].x0 > r.x1 or r.y0 > rr[1].y1 or rr[1].y0 > r.y1) for rr in rasters):
                    continue
                figs.append({'kind': 'vector', 'rect': tuple(r)})
            figs.sort(key=lambda f: (f['rect'][1], f['rect'][0]))
            if len(figs) > 1:
                ux0 = min(f['rect'][0] for f in figs); uy0 = min(f['rect'][1] for f in figs)
                ux1 = max(f['rect'][2] for f in figs); uy1 = max(f['rect'][3] for f in figs)
                if (ux1 - ux0) < 280 and (uy1 - uy0) < 760:
                    figs = [{'kind': 'composite', 'rect': (ux0, uy0, ux1, uy1),
                             'has_raster': any(f['kind'] == 'raster' for f in figs)}]
            plan[q['id']] = figs
            stats['matched'] += 1
            stats['raster'] += sum(1 for f in figs if f['kind'] == 'raster')
            stats['vector'] += sum(1 for f in figs if f['kind'] == 'vector')
            if not figs: stats['empty'] += 1
        doc.close()
    print('stats:', dict(stats))
    print('questions with figures:', len(plan))
    if mode == '--write':
        json.dump(plan, open('/tmp/uea_figplan.json', 'w'), indent=1)
        print('wrote /tmp/uea_figplan.json')
    if mode != '--extract':
        for uid in list(plan)[:5]:
            print(uid, [(f['kind'], tuple(round(v) for v in f['rect'])) for f in plan[uid]])
        return

    # ---- extraction pass ----
    allmap = {q['id']: q for q in ALL}
    docs = {}
    seen = {}          # (pdf,page,rounded rect) -> src
    refs = {}          # id -> [ {src,alt} ]
    ex = collections.Counter()
    for uid, figs in plan.items():
        q = allmap[uid]
        pdf = q['sourcePdf']
        if pdf not in docs: docs[pdf] = fitz.open(os.path.join(ROOT, pdf))
        doc = docs[pdf]
        outdir = os.path.join(ROOT, 'public', 'images', 'uea', img_dir(q))
        os.makedirs(outdir, exist_ok=True)
        newrefs = []
        n = num_of(q)
        for k, f in enumerate(figs, 1):
            pg = q['sourcePage'] - 1
            rect = f['rect']
            key = (pdf, pg, tuple(round(v) for v in rect))
            if key in seen:
                src = seen[key]
            else:
                kind = f['kind']
                if kind == 'composite' and not f.get('has_raster'):
                    kind = 'vector'
                if kind == 'vector':
                    # include short label lines (axis/legend text) around the art
                    rr = fitz.Rect(rect)
                    for b in doc[pg].get_text('dict')['blocks']:
                        if b['type'] != 0: continue
                        for l in b['lines']:
                            txt = ''.join(sp['text'] for sp in l['spans']).strip()
                            if not txt or len(txt) > 30: continue
                            lr = fitz.Rect(l['bbox'])
                            if abs(lr.y0 - rr.y0) < 25 or abs(lr.y1 - rr.y1) < 25:
                                if lr.x0 > rr.x0 - 40 and lr.x1 < rr.x1 + 40:
                                    rr |= lr
                    rect = tuple(rr)
                    # build SVG, then verify fidelity against the original render
                    base = os.path.join(outdir, f"q{n:02d}-{k}")
                    tmp = base + '.tmp.svg'
                    extract_vector(doc[pg], fitz.Rect(rect), tmp)
                    if svg_faithful(doc[pg], fitz.Rect(rect), tmp):
                        os.replace(tmp, base + '.svg')
                        ex['vector'] += 1
                        src = f"/images/uea/{img_dir(q)}/q{n:02d}-{k}.svg"
                        seen[key] = src
                        newrefs.append({'src': src, 'alt': q['images'][0]['alt'] if q.get('images') else ''})
                        continue
                    os.remove(tmp)
                    kind = 'vector-shaded'
                fname = f"q{n:02d}-{k}.png"
                outpath = os.path.join(outdir, fname)
                if kind in ('vector-shaded', 'composite'):
                    scale = 4 if kind == 'vector-shaded' else 3
                    pix = doc[pg].get_pixmap(matrix=fitz.Matrix(scale, scale), clip=fitz.Rect(rect), alpha=False)
                    pix.save(outpath)
                    ex[kind] += 1
                elif f['kind'] == 'raster':
                    if has_text_overlay(doc[pg], rect):
                        pix = doc[pg].get_pixmap(matrix=fitz.Matrix(3, 3), clip=fitz.Rect(rect), alpha=False)
                        pix.save(outpath)
                        ex['raster-render'] += 1
                    else:
                        extract_raster(doc, f['xref'], outpath, page=doc[pg], rect=fitz.Rect(rect))
                        ex['raster'] += 1
                else:
                    extract_vector(doc[pg], fitz.Rect(rect), outpath)
                    ex['vector'] += 1
                src = f"/images/uea/{img_dir(q)}/{fname}"
                seen[key] = src
            newrefs.append({'src': src, 'alt': q['images'][0]['alt'] if q.get('images') else ''})
        if newrefs:
            refs[uid] = newrefs
    json.dump(refs, open('/tmp/uea_imgrefs.json', 'w'), ensure_ascii=False, indent=1)
    print('extracted:', dict(ex), 'questions with new refs:', len(refs))

if __name__ == '__main__':
    main()
