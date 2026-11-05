"""Layout-aware helpers for re-extracting UEA questions from the source PDFs.
Produces flowing prose (not one-paragraph-per-PDF-line), preserves poems/lists,
reconstructs stacked fractions as KaTeX, and locates figure regions.
"""
import pymupdf as fitz
import re

UNI = re.compile(r'[\u2000-\u200b\u202f\u205f\u3000\u00a0]')
QMARK = re.compile(r'Quest[ãa]o\s*(\d+)', re.IGNORECASE)
ALT = re.compile(r'^\(([A-E])\)\s*(.*)$')

def clean(s):
    s = UNI.sub(' ', s).replace('\u00ad', '')
    return s

def is_noise(t):
    t = t.strip()
    if not t: return True
    if 'Confidencial' in t or 'UEAM' in t: return True
    if 'RASCUNHO' in t or 'NÃO ASSINE' in t: return True
    if re.fullmatch(r'\d+', t): return True
    return False

def page_lines(page):
    """Text lines with layout, sorted column-major then y."""
    out = []; mid = page.rect.width / 2
    for b in page.get_text('dict')['blocks']:
        if b['type'] != 0: continue
        for l in b['lines']:
            sp = l['spans']
            if not sp: continue
            t = ''.join(s['text'] for s in sp)
            if not t.strip(): continue
            x0, y0, x1, y1 = l['bbox']
            if y0 > 805 or y1 < 18: continue
            out.append(dict(x=x0, y=y0, x1=x1, y1=y1, text=clean(t),
                size=max(s['size'] for s in sp),
                italic=any('Italic' in s['font'] or 'Oblique' in s['font'] for s in sp),
                col=0 if x0 < mid - 5 else 1))
    out.sort(key=lambda r: (r['col'], r['y'], r['x']))
    return out

def fraction_bars(page):
    bars = []
    for d in page.get_drawings():
        r = d['rect']
        if d['type'] == 's' and r.height < 1.5 and 2 < r.width < 45:
            bars.append(r)
    return bars

def image_regions(page):
    """Raster image rects + clustered vector-drawing rects (figures)."""
    regions = []
    for img in page.get_images(full=True):
        for r in page.get_image_rects(img[0]):
            if r.width > 20 and r.height > 20:
                regions.append(('raster', r, img[0]))
    return regions
