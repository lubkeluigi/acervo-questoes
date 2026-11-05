#!/usr/bin/env python3
"""Special-case figures: per-alternative artworks + shared/other-column figures.
All crops are vector-mode SVG (show_pdf_page clip -> get_svg_image), so raster
XObjects stored upside-down in the PDF are rendered upright.
"""
import sys, os, json
sys.path.insert(0, os.path.dirname(__file__))
import pymupdf as fitz
from uea_images import extract_vector, img_dir

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STATE = os.path.join(ROOT, 'scripts', 'uea_state')
ALL = {q['id']: q for q in json.load(open(os.path.join(STATE, 'uea_all.json')))}
refs = json.load(open(os.path.join(STATE, 'uea_imgrefs.json')))

def save_vector(pdf, xref, dirname, fname):
    doc = fitz.open(os.path.join(ROOT, pdf))
    page = None; rect = None
    for pi in range(len(doc)):
        p = doc[pi]
        if any(img[0] == xref for img in p.get_images(full=True)):
            rects = p.get_image_rects(xref)
            if rects:
                page = p; rect = rects[0]; break
    if page is None or rect is None:
        doc.close(); raise RuntimeError(f'xref {xref} not found in {pdf}')
    outdir = os.path.join(ROOT, 'public', 'images', 'uea', dirname)
    os.makedirs(outdir, exist_ok=True)
    extract_vector(page, rect, os.path.join(outdir, fname))
    doc.close()
    return f'/images/uea/{dirname}/{fname}'

altimg = {}

# --- sis-2024-a3 q08 (Inglês): five artworks as alternatives ---
q = ALL['uea-sis-2024-a3-q08-ingles']
pdf = q['sourcePdf']
specs = [
    (18, 'q08-a.svg', 'Edvard Munch. O grito, 1910.'),
    (20, 'q08-b.svg', 'Pablo Picasso. Duas meninas lendo, 1934.'),
    (24, 'q08-c.svg', 'René Magritte. Os amantes, 1928.'),
    (26, 'q08-d.svg', 'Otto Dix. Retrato de Sylvia von Harden, 1926.'),
    (28, 'q08-e.svg', 'Roy Lichtenstein. No carro, 1963.'),
]
pairs = []
for xref, fname, caption in specs:
    src = save_vector(pdf, xref, 'sis-2024-a3', fname)
    pairs.append((caption, [{'src': src, 'alt': caption}]))
altimg['uea-sis-2024-a3-q08-ingles'] = {
    'alternatives': [c for c, _ in pairs],
    'alternativeImages': [imgs for _, imgs in pairs],
}
refs.pop('uea-sis-2024-a3-q08-ingles', None)

# --- vestibular-2026-cg q06: five artworks as alternatives ---
q = ALL['uea-vestibular-2026-cg-q06']
pdf = q['sourcePdf']
specs = [
    (26, 'q06-a.svg', 'Lyubov Popova. Modelo de um vestido, 1923-1924.'),
    (28, 'q06-b.svg', 'Claude Monet. Impressão, sol nascente, 1872-1873.'),
    (20, 'q06-c.svg', 'Mark Rothko. O ocre, 1954.'),
    (22, 'q06-d.svg', 'Vincent van Gogh. A noite estrelada, 1889.'),
    (24, 'q06-e.svg', 'Andy Warhol. Díptico de Marilyn, 1962.'),
]
pairs = []
for xref, fname, caption in specs:
    src = save_vector(pdf, xref, 'vestibular-2026-cg', fname)
    pairs.append((caption, [{'src': src, 'alt': caption}]))
altimg['uea-vestibular-2026-cg-q06'] = {
    'alternatives': [c for c, _ in pairs],
    'alternativeImages': [imgs for _, imgs in pairs],
}
refs.pop('uea-vestibular-2026-cg-q06', None)

# --- shared figures ---
refs['uea-vestibular-2025-cg-q11-ingles'] = refs['uea-vestibular-2025-cg-q09-ingles']
refs['uea-vestibular-2025-cg-q38'] = refs['uea-vestibular-2025-cg-q37']

# --- 2026-g2 q15: map in the opposite column (vector clip keeps PDF labels) ---
q = ALL['uea-vestibular-2026-g2-q15']
doc = fitz.open(os.path.join(ROOT, q['sourcePdf']))
page = doc[q['sourcePage'] - 1]
rect = page.get_image_rects(16)[0]
outdir = os.path.join(ROOT, 'public', 'images', 'uea', 'vestibular-2026-g2')
os.makedirs(outdir, exist_ok=True)
extract_vector(page, rect, os.path.join(outdir, 'q15-1.svg'))
doc.close()
refs['uea-vestibular-2026-g2-q15'] = [{'src': '/images/uea/vestibular-2026-g2/q15-1.svg', 'alt': 'Mapa da bacia do rio São Francisco.'}]

json.dump(refs, open(os.path.join(STATE, 'uea_imgrefs.json'), 'w'), ensure_ascii=False, indent=1)
json.dump(altimg, open(os.path.join(STATE, 'uea_altimg.json'), 'w'), ensure_ascii=False, indent=1)
print('special cases done; refs:', len(refs), 'altimg:', len(altimg))
