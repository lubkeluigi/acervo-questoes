#!/usr/bin/env python3
"""Apply re-extracted statement/blockTypes to UEA data modules; clear caderno captions.
Usage: python3 scripts/uea_commit_text.py
Reads /tmp/uea_all.json + /tmp/uea_reextracted.json, rewrites src/data/uea*.js.
"""
import json, os, collections

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ALL = json.load(open(os.path.join(ROOT,'scripts','uea_state','uea_all.json')))
REX = json.load(open(os.path.join(ROOT,'scripts','uea_state','uea_reextracted.json')))
IMGREFS = json.load(open(os.path.join(ROOT,'scripts','uea_state','uea_imgrefs.json'))) if os.path.exists(os.path.join(ROOT,'scripts','uea_state','uea_imgrefs.json')) else {}
ALTIMG = json.load(open(os.path.join(ROOT,'scripts','uea_state','uea_altimg.json'))) if os.path.exists(os.path.join(ROOT,'scripts','uea_state','uea_altimg.json')) else {}
_ov_path = os.path.join(ROOT, 'scripts', 'uea_text_overrides.json')
OVERRIDES = json.load(open(_ov_path)) if os.path.exists(_ov_path) else {}

def merge_hyphen_blocks(statement, blockTypes):
    """Re-join words split across a paragraph boundary by a trailing hyphen
    (PDF line-break artefact). Only prose/command/source blocks are merged."""
    paras = statement.split('\n\n')
    types = list(blockTypes) + ['prose'] * max(0, len(paras) - len(blockTypes))
    out_p, out_t = [], []
    flow = ('prose', 'command', 'source')
    for p, t in zip(paras, types):
        if (out_p and out_t[-1] in flow and t in flow
                and out_p[-1].rstrip().endswith('-')
                and p.lstrip()[:1].isalpha()):
            out_p[-1] = out_p[-1].rstrip()[:-1] + p.lstrip()
            if t == 'command':
                out_t[-1] = 'command'
        else:
            out_p.append(p); out_t.append(t)
    return '\n\n'.join(out_p), out_t

MODULES = {
    (2022, 'sis'): ('uea2022-sis.js', 'uea2022Sis'),
    (2022, 'vestibular'): ('uea2022-vestibular.js', 'uea2022Vestibular'),
    (2023, 'sis'): ('uea2023-sis.js', 'uea2023Sis'),
    (2023, 'vestibular'): ('uea2023-vestibular.js', 'uea2023Vestibular'),
    (2024, 'sis'): ('uea2024-sis.js', 'uea2024Sis'),
    (2024, 'vestibular'): ('uea2024-vestibular.js', 'uea2024Vestibular'),
    (2025, 'sis'): ('uea2025-sis.js', 'uea2025Sis'),
    (2025, 'vestibular'): ('uea2025-vestibular.js', 'uea2025Vestibular'),
    (2026, 'sis'): ('uea2026-sis.js', 'uea2026Sis'),
    (2026, 'vestibular'): ('uea2026-vestibular.js', 'uea2026Vestibular'),
}

def modality_key(q):
    return 'sis' if q['modality'] == 'sis-seriado' else 'vestibular'

def reorder(q):
    """Insert blockTypes right after statement, keep other field order."""
    out = {}
    for k, v in q.items():
        if k == 'blockTypes':
            continue
        out[k] = v
        if k == 'statement':
            out['blockTypes'] = q.get('blockTypes', [])
    return out

def main():
    groups = collections.defaultdict(list)
    changed = 0
    for q in ALL:
        rex = REX.get(q['id'])
        stmt = rex['statement'] if rex else q.get('statement', '')
        bt = rex['blockTypes'] if rex else q.get('blockTypes', [])
        if q['id'] in OVERRIDES:
            stmt = OVERRIDES[q['id']]['statement']
            bt = OVERRIDES[q['id']]['blockTypes']
        stmt, bt = merge_hyphen_blocks(stmt, bt)
        q['statement'] = stmt
        q['blockTypes'] = bt
        changed += 1
        # replace figures with re-extracted crops / SVGs; drop caderno captions
        if q['id'] in IMGREFS:
            q['images'] = [{'src': r['src'], 'alt': r['alt']} for r in IMGREFS[q['id']]]
        elif q.get('images'):
            q['images'] = [{'src': i['src'], 'alt': i['alt']} for i in q['images']]
        else:
            q['images'] = []
        for img in q.get('afterImages', []):
            img.pop('caption', None)
        if q['id'] in ALTIMG:
            q['alternatives'] = ALTIMG[q['id']]['alternatives']
            q['alternativeImages'] = ALTIMG[q['id']]['alternativeImages']
            q['images'] = []
        q = reorder(q)
        groups[(q['year'], modality_key(q))].append(q)
    for (year, mod), qs in groups.items():
        fname, const = MODULES[(year, mod)]
        path = os.path.join(ROOT, 'src', 'data', fname)
        body = json.dumps(qs, ensure_ascii=False, indent=2)
        with open(path, 'w') as f:
            f.write(f'export const {const} = {body};\n')
        print(f'{fname}: {len(qs)} questions')
    print(f'updated statements: {changed}/{len(ALL)}')

if __name__ == '__main__':
    main()
