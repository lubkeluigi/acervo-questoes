#!/usr/bin/env python3
"""Merge authored KaTeX resolutions into UEA data; strip gabarito/caderno wording everywhere."""
import json, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ALL = json.load(open(os.path.join(ROOT,'scripts','uea_state','uea_all.json')))
R = json.load(open(os.path.join(ROOT,'scripts','uea_state','uea_authored.json')))
authored = 0
for q in ALL:
    n = len(q['alternatives']); c = q['correct']; letter = chr(65 + c)
    if q['id'] in R:
        a = R[q['id']]
        q['resolution'] = a['resolution']
        q['analyses'] = [
            ("Correta. " + a['correct_reason']) if i == c else ("Incorreta. " + a['wrong'].get(str(i), "")).strip()
            for i in range(n)]
        authored += 1
    else:
        # factual, no official-key / caderno references; full commentary rolls out in batches
        q['resolution'] = [f"A alternativa correta é a {letter}."]
        q['analyses'] = ["Correta." if i == c else "Incorreta." for i in range(n)]
json.dump(ALL, open(os.path.join(ROOT,'scripts','uea_state','uea_all.json'), 'w'), ensure_ascii=False)
print('authored merged:', authored, '/', len(ALL))
