#!/usr/bin/env python3
"""Special-case figures: per-alternative artworks + shared/other-column figures."""
import sys, os, json
sys.path.insert(0, os.path.dirname(__file__))
import pymupdf as fitz
from uea_images import extract_raster, img_dir

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ALL = {q['id']: q for q in json.load(open('/tmp/uea_all.json'))}
refs = json.load(open('/tmp/uea_imgrefs.json'))

def save_native(pdf, xref, dirname, fname):
    doc = fitz.open(os.path.join(ROOT, pdf))
    outdir = os.path.join(ROOT, 'public', 'images', 'uea', dirname)
    os.makedirs(outdir, exist_ok=True)
    extract_raster(doc, xref, os.path.join(outdir, fname))
    doc.close()
    return f'/images/uea/{dirname}/{fname}'

altimg = {}

# --- sis-2024-a3 q08 (Inglês): five artworks as alternatives ---
q = ALL['uea-sis-2024-a3-q08-ingles']
pdf = q['sourcePdf']
specs = [
    (18, 'q08-a.png', 'Edvard Munch. O grito, 1910.'),
    (20, 'q08-b.png', 'Pablo Picasso. Duas meninas lendo, 1934.'),
    (24, 'q08-c.png', 'René Magritte. Os amantes, 1928.'),
    (26, 'q08-d.png', 'Otto Dix. Retrato de Sylvia von Harden, 1926.'),
    (28, 'q08-e.png', 'Roy Lichtenstein. No carro, 1963.'),
]
pairs = []
for xref, fname, caption in specs:
    src = save_native(pdf, xref, 'sis-2024-a3', fname)
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
    (26, 'q06-a.png', 'Lyubov Popova. Modelo de um vestido, 1923-1924.'),
    (28, 'q06-b.png', 'Claude Monet. Impressão, sol nascente, 1872-1873.'),
    (20, 'q06-c.png', 'Mark Rothko. O ocre, 1954.'),
    (22, 'q06-d.png', 'Vincent van Gogh. A noite estrelada, 1889.'),
    (24, 'q06-e.png', 'Andy Warhol. Díptico de Marilyn, 1962.'),
]
pairs = []
for xref, fname, caption in specs:
    src = save_native(pdf, xref, 'vestibular-2026-cg', fname)
    pairs.append((caption, [{'src': src, 'alt': caption}]))
altimg['uea-vestibular-2026-cg-q06'] = {
    'alternatives': [c for c, _ in pairs],
    'alternativeImages': [imgs for _, imgs in pairs],
}
refs.pop('uea-vestibular-2026-cg-q06', None)

# --- shared figures ---
refs['uea-vestibular-2025-cg-q11-ingles'] = refs['uea-vestibular-2025-cg-q09-ingles']
refs['uea-vestibular-2025-cg-q38'] = refs['uea-vestibular-2025-cg-q37']

# --- 2026-g2 q15: map in the opposite column (render: labels are PDF text) ---
q = ALL['uea-vestibular-2026-g2-q15']
doc = fitz.open(os.path.join(ROOT, q['sourcePdf']))
page = doc[q['sourcePage'] - 1]
rect = page.get_image_rects(16)[0]
outdir = os.path.join(ROOT, 'public', 'images', 'uea', 'vestibular-2026-g2')
os.makedirs(outdir, exist_ok=True)
pix = page.get_pixmap(matrix=fitz.Matrix(3, 3), clip=rect, alpha=False)
pix.save(os.path.join(outdir, 'q15-1.png'))
doc.close()
refs['uea-vestibular-2026-g2-q15'] = [{'src': '/images/uea/vestibular-2026-g2/q15-1.png', 'alt': 'Mapa da bacia do rio São Francisco.'}]

json.dump(refs, open('/tmp/uea_imgrefs.json', 'w'), ensure_ascii=False, indent=1)
json.dump(altimg, open('/tmp/uea_altimg.json', 'w'), ensure_ascii=False, indent=1)
print('special cases done; refs:', len(refs), 'altimg:', len(altimg))
