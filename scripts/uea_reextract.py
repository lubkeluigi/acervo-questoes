"""Layout-aware re-extraction of UEA questions: flowing prose, poems, lists,
KaTeX fractions, and figure regions. Used to rebuild statement text + images.
"""
import pymupdf as fitz
import re

UNI = re.compile(r'[\u2000-\u200b\u202f\u205f\u3000\u00a0]')
QMARK = re.compile(r'^Quest[ãa]o\s*(\d+)\s*(.*)$', re.IGNORECASE)
ALT = re.compile(r'^\(([A-E])\)\s*(.*)$')
RANGE = re.compile(r'quest[õo]es?\s+(?:de\s+)?(\d+)\s*(?:a|até|–|-)\s*(\d+)', re.IGNORECASE)
RANGE_E = re.compile(r'quest[õo]es?\s+(\d+)\s+e\s+(\d+)', re.IGNORECASE)

def clean(s):
    return UNI.sub(' ', s).replace('\u00ad', '')

def tidy(s):
    # fix spacing around punctuation introduced by span joins
    s = re.sub(r'\s+([,.;:!?%)\]])', r'\1', s)
    s = re.sub(r'([(\[])\s+', r'\1', s)
    s = re.sub(r'\s{2,}', ' ', s)
    # degree Celsius: the glyph "°" is often extracted as a stray "o" before C
    s = re.sub(r'(\d)\s*o\s*C\b', r'\1 °C', s)
    s = re.sub(r'(\d)\s*o\s*F\b', r'\1 °F', s)
    # ordinal indicators that slipped into math mode: N^o / 1^o / 2^a -> Nº / 1º / 2ª
    s = re.sub(r'\$([Nn])[\^_]\{o\}\$', r'\1º', s)
    s = re.sub(r'\$(\d+)\^\{o\}\$', r'\1º', s)
    s = re.sub(r'\$(\d+)\^\{a\}\$', r'\1ª', s)
    return s.strip()

def dehyphenate(lines):
    """Join words split across line breaks by a trailing hyphen (nave-\\ngação)."""
    out = []
    for t in lines:
        t = t.rstrip()
        if out and out[-1].endswith('-') and re.match(r'^[a-záàâãéêíóôõúüç]', t):
            out[-1] = out[-1][:-1] + t
        else:
            out.append(t)
    return out

def is_noise(t):
    t = t.strip()
    if not t: return True
    if 'Confidencial' in t or 'UEAM' in t: return True
    if 'RASCUNHO' in t or 'NÃO ASSINE' in t or 'Os rascunhos' in t: return True
    return False

def get_spans(page):
    spans = []; mid = page.rect.width / 2
    for b in page.get_text('rawdict')['blocks']:
        if b['type'] != 0: continue
        for l in b['lines']:
            for s in l['spans']:
                txt = ''.join(c['c'] for c in s['chars'])
                if not txt.strip(): continue
                x0, y0, x1, y1 = s['bbox']
                if y0 > 805 or y1 < 18: continue
                if is_noise(txt): continue
                spans.append(dict(x=x0, y=y0, x1=x1, y1=y1, text=clean(txt), size=s['size'],
                    italic=('Italic' in s['font'] or 'Oblique' in s['font']),
                    col=0 if x0 < mid - 5 else 1, page=page.number))
    return spans

def fraction_bars(page):
    return [d['rect'] for d in page.get_drawings()
            if d['type'] == 's' and d['rect'].height < 1.5 and 2 < d['rect'].width < 45]

def extract_fractions(spans, bars):
    fracs = []; consumed = set()
    for b in bars:
        cx = (b.x0 + b.x1) / 2; num = den = None
        for i, s in enumerate(spans):
            if i in consumed or len(s['text'].strip()) > 12: continue
            scx = (s['x'] + s['x1']) / 2
            if abs(scx - cx) < 22:
                if -1 <= b.y0 - s['y1'] < 13 and s['y1'] <= b.y0 + 1.5:
                    if num is None or s['y1'] > num[1]['y1']: num = (i, s)
                if -1 <= s['y'] - b.y1 < 13 and s['y'] >= b.y1 - 1.5:
                    if den is None or s['y'] < den[1]['y']: den = (i, s)
        def tok_ok(t):
            return bool(re.fullmatch(r'\d{1,4}', t) or re.fullmatch(r'[a-zA-Z]{1,2}', t))
        if num and den:
            nt, dt = num[1]['text'].strip(), den[1]['text'].strip()
            both_num = re.fullmatch(r'\d{1,4}', nt) and re.fullmatch(r'\d{1,4}', dt)
            both_var = re.fullmatch(r'[a-zA-Z]{1,2}', nt) and re.fullmatch(r'[a-zA-Z]{1,2}', dt)
            if not (both_num or both_var):
                continue
            consumed.add(num[0]); consumed.add(den[0])
            fracs.append(dict(x=cx, y=b.y0, num=num[1]['text'].strip(), den=den[1]['text'].strip(),
                              top=num[1]['y'], bot=den[1]['y1'], col=num[1]['col'], page=num[1]['page']))
    return fracs, consumed

def join_lines(parts):
    txt = ''
    for t in parts:
        t = t.strip()
        if not t: continue
        if txt.endswith('-'): txt = txt[:-1] + t
        else: txt = (txt + ' ' + t).strip() if txt else t
    return tidy(txt)

def apply_scripts(items):
    """Detect sub/superscript spans (smaller + baseline-shifted) and merge into
    the preceding base as KaTeX $base_{sub}$ / $base^{sup}$."""
    items = sorted(items, key=lambda it: it['x'])
    normal = [it for it in items if not it.get('frac')]
    if not normal: return items
    dom = max(it['size'] for it in normal)
    base_ys = [it['y'] for it in normal if it['size'] >= dom * 0.85]
    if not base_ys: return items
    baseline = min(base_ys)
    result = []
    for it in items:
        small = (not it.get('frac')) and it['size'] < dom * 0.8
        stxt = it['text'].strip()
        is_script_tok = bool(re.fullmatch(r'\d{1,3}|[a-zA-Z]|[+\-\u2212=.,]', stxt))
        if small and result and is_script_tok:
            dy = it['y'] - baseline
            if dy > 2: script = '_{' + stxt + '}'
            elif dy < -0.5: script = '^{' + stxt + '}'
            else: result.append(it); continue
            base_parts = [result.pop()]
            while (result and not result[-1].get('frac')
                   and result[-1]['size'] >= dom * 0.85
                   and base_parts[0]['x'] - result[-1]['x1'] < 3
                   and not result[-1].get('math')):
                base_parts.insert(0, result.pop())
            base_text = ''.join(bp['text'] for bp in base_parts)
            # include accented letters so a footnote attaches to the whole word
            # (família¹) instead of only its ASCII tail (famí + $lia^{1}$)
            m = re.search(r'([A-Za-z0-9\u00C0-\u017F]+)\s*$', base_text)
            if not m:
                result.append(it); continue
            lead = base_text[:m.start(1)]
            base_tok = m.group(1)
            is_sup = script.startswith('^')
            sup_map = {'0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹'}
            sub_map = {'0':'₀','1':'₁','2':'₂','3':'₃','4':'₄','5':'₅','6':'₆','7':'₇','8':'₈','9':'₉'}
            def emit_plain(plain):
                if lead.strip():
                    li = dict(base_parts[0]); li['text'] = lead; result.append(li)
                ni = dict(base_parts[0]); ni['text'] = plain; ni['x1'] = it['x1']
                result.append(ni)
            # ordinal / numero indicator: keep as plain unicode, not KaTeX
            if stxt in ('o', 'a') and (base_tok.isdigit() or base_tok in ('N', 'n')):
                if is_sup or stxt == 'o':
                    emit_plain(base_tok + ('º' if stxt == 'o' else 'ª')); continue
            # footnote marker: a superscript digit glued to a word is a note
            # reference, never an exponent -> render as unicode, out of math mode
            if is_sup and stxt.isdigit() and re.fullmatch(r'[A-Za-z\u00C0-\u017F]{2,}', base_tok):
                emit_plain(base_tok + ''.join(sup_map.get(ch, ch) for ch in stxt)); continue
            if len(base_tok) > 8:
                result.append(it); continue
            is_word = bool(re.fullmatch(r'[A-Za-z\u00C0-\u017F]{4,}', base_tok))
            if is_word:
                upper = sum(1 for ch in base_tok if ch.isupper())
                if is_sup or upper < 2:
                    mp = sup_map if is_sup else sub_map
                    emit_plain(base_tok + ''.join(mp.get(ch, ch) for ch in stxt)); continue
            if lead.strip():
                lead_it = dict(base_parts[0]); lead_it['text'] = lead
                result.append(lead_it)
            new_it = dict(base_parts[0])
            new_it['text'] = '$' + base_tok + script + '$'
            new_it['x'] = it['x'] - 6
            new_it['x1'] = it['x1']; new_it['math'] = True
            result.append(new_it)
        else:
            result.append(it)
    return result

def join_spans(items):
    txt = ''; prev_x1 = None; prev_size = 9.5
    for it in items:
        t = it['text']
        if prev_x1 is not None:
            gap = it['x'] - prev_x1
            thr = max(1.2, prev_size * 0.14)
            if gap > thr and not txt.endswith(' ') and not t.startswith(' '):
                txt += ' '
        txt += t
        prev_x1 = it['x1']; prev_size = it.get('size', 9.5)
    return tidy(txt)

def spans_to_lines(spans, fracs, consumed):
    items = []
    for i, s in enumerate(spans):
        if i in consumed: continue
        items.append(dict(y=s['y'], y1=s['y1'], x=s['x'], x1=s['x1'], text=s['text'],
                          size=s['size'], italic=s['italic'], frac=False))
    for f in fracs:
        items.append(dict(y=f['top'], y1=f['bot'], x=f['x'] - 3, x1=f['x'] + 3,
                          text=f"$\\frac{{{f['num']}}}{{{f['den']}}}$", size=9.5, italic=False, frac=True))
    items.sort(key=lambda it: (it['y'], it['x']))
    lines = []; cur = []; lasty = None
    for it in items:
        if lasty is not None and abs(it['y'] - lasty) > 7:
            lines.append(cur); cur = []
        cur.append(it); lasty = it['y']
    if cur: lines.append(cur)
    L = []
    for ln in lines:
        ln = apply_scripts(ln)
        ln.sort(key=lambda it: it['x'])
        # group spans into visual cells (large x-gap => new column/cell)
        cells = []; cur = []
        for it in ln:
            if cur and it['x'] - cur[-1]['x1'] > 12:
                cells.append(cur); cur = []
            cur.append(it)
        if cur: cells.append(cur)
        cell_list = [dict(x=c[0]['x'], x1=c[-1]['x1'], text=join_spans(c)) for c in cells]
        L.append(dict(text=join_spans(ln),
                      x=min(it['x'] for it in ln), y=ln[0]['y'],
                      y1=max(it['y1'] for it in ln),
                      size=max(it['size'] for it in ln),
                      italic=all(it['italic'] for it in ln if not it['frac']),
                      cells=cell_list))
    return L

NUMCELL = re.compile(r'^[\d\s.,%]+$|^(R\$|US\$)\s*[\d.,]+$|^[\d.,]+\s*(R\$|US\$)?$')

def _numeric_cell(t):
    t = t.strip()
    return bool(NUMCELL.match(t)) and any(ch.isdigit() for ch in t)

def try_table(blk):
    """Detect a tabular block and return a TSV string (rows\\n, cells\\t) or None."""
    if len(blk) < 3: return None
    multi = [l for l in blk if len(l.get('cells', [])) >= 2]
    if len(multi) < max(3, int(len(blk) * 0.6)): return None
    # data rows = lines whose cells are mostly numeric
    data = [l for l in blk if len(l.get('cells', [])) >= 2
            and sum(1 for c in l['cells'] if _numeric_cell(c['text'])) >= max(1, len(l['cells']) // 2)]
    if len(data) < 2: return None
    ncols = max(len(l['cells']) for l in data)
    if ncols < 2: return None
    # cluster cell x-starts into columns
    xs = sorted(c['x'] for l in blk for c in l.get('cells', []))
    cols = []
    for x in xs:
        if not cols or x - cols[-1][-1] > 25: cols.append([x])
        else: cols[-1].append(x)
    centers = [sum(c) / len(c) for c in cols]
    if len(centers) < ncols: return None
    centers = centers[:max(ncols, len(centers))]
    def assign(line):
        row = [''] * len(centers)
        for c in line.get('cells', []):
            j = min(range(len(centers)), key=lambda k: abs(centers[k] - c['x']))
            row[j] = (row[j] + ' ' + c['text']).strip()
        return row
    first_data_y = min(l['y'] for l in data)
    header_rows = [l for l in blk if l['y'] < first_data_y]
    body_rows = [l for l in blk if l['y'] >= first_data_y]
    out = []
    if header_rows:
        head = [''] * len(centers)
        for l in header_rows:
            r = assign(l)
            for j, v in enumerate(r):
                if v: head[j] = (head[j] + ' ' + v).strip()
        if any(head): out.append('\t'.join(head))
    for l in body_rows:
        out.append('\t'.join(assign(l)))
    return '\n'.join(out)

def _is_data_row(l):
    cs = l.get('cells', [])
    return len(cs) >= 2 and sum(1 for c in cs if _numeric_cell(c['text'])) >= max(1, len(cs) // 2)

def find_table_regions(L, body_x):
    """Return (regions, used) where each region is (start, end) line indices of a
    table (header lines + numeric data rows)."""
    n = len(L); used = [False] * n; regions = []
    i = 0
    while i < n:
        if _is_data_row(L[i]) and not used[i]:
            j = i
            while j + 1 < n and _is_data_row(L[j + 1]) and not used[j + 1]: j += 1
            if j - i + 1 >= 2:
                s = i
                # absorb indented header lines immediately above the data
                while s - 1 >= 0 and not used[s - 1] and i - s < 4:
                    pl = L[s - 1]; cs = pl.get('cells', []); txt = pl['text'].strip()
                    indented = pl['x'] > body_x + 5
                    multi = len(cs) >= 2
                    continuation = bool(re.match(r'^[a-záàâãéêíóôõúüç(]', txt))
                    if indented and (multi or continuation): s -= 1
                    else: break
                regions.append((s, j))
                for k in range(s, j + 1): used[k] = True
                i = j + 1
            else:
                i += 1
        else:
            i += 1
    return regions, used

def lines_to_blocks(L, body_x=None):
    if not L: return []
    if body_x is None: body_x = min(l['x'] for l in L)
    regions, used = find_table_regions(L, body_x)
    # emit table blocks for each region
    table_at = {}
    for (s, e) in regions:
        tsv = try_table(L[s:e + 1])
        if tsv is not None: table_at[s] = (e, tsv)
    blocks = []; cur = []; prev = None; idx = 0
    def flush():
        nonlocal cur
        if cur: blocks.append(cur); cur = []
    while idx < len(L):
        if idx in table_at:
            flush()
            e, tsv = table_at[idx]
            blocks.append(('TABLE', tsv))
            prev = L[e]; idx = e + 1; continue
        if used[idx]:
            idx += 1; continue
        ln = L[idx]
        if prev is not None and not isinstance(prev, tuple):
            gap = ln['y'] - prev['y1']
            indent_increase = ln['x'] - prev['x'] > 15
            leaving_indent = prev['x'] > body_x + 30 and ln['x'] < prev['x'] - 15
            sizechange = abs(ln['size'] - prev['size']) > 1.0
            if gap > 8 or indent_increase or leaving_indent or sizechange:
                flush()
        cur.append(ln); prev = ln; idx += 1
    flush()
    out = []
    for blk in blocks:
        if isinstance(blk, tuple) and blk[0] == 'TABLE':
            out.append(('table', blk[1])); continue
        x0 = min(l['x'] for l in blk); sz = max(l['size'] for l in blk)
        texts = [l['text'] for l in blk]
        is_source = sz < 8.5
        is_poem = (x0 > body_x + 18) and len(blk) >= 2
        is_list = sum(1 for t in texts if re.match(r'^(\d+[.)]|[a-e][.)]|[-•]|[IVX]+[.)])\s', t)) >= max(2, len(blk) // 2)
        if is_source: out.append(('source', join_lines(texts)))
        elif is_poem: out.append(('poem', '\n'.join(dehyphenate([tidy(t) for t in texts]))))
        elif is_list: out.append(('list', '\n'.join(dehyphenate([tidy(t) for t in texts]))))
        else: out.append(('prose', join_lines(texts)))
    return out

def ordered_lines(doc, pages):
    """All visual lines across pages in reading order (page, column, y)."""
    all_lines = []
    for pi in pages:
        page = doc[pi]
        pt = page.get_text()
        if re.search(r'Confira seus dados|Assine com caneta|Nome do candidato|Esta prova contém|onestudy|BAIXAR MAIS PROVAS|Conhecer a Onestudy|MEGA PLATAFORMA|VEST - UEA|PROVAS ANTERIORES', pt, re.IGNORECASE):
            continue
        spans = get_spans(page)
        bars = fraction_bars(page)
        mid = page.rect.width / 2
        # process each column independently so lines never merge across columns
        for col in (0, 1):
            cspans = [s for s in spans if s['col'] == col]
            if not cspans: continue
            fracs, consumed = extract_fractions(cspans, bars)
            L = spans_to_lines(cspans, fracs, consumed)
            for ln in L:
                ln['page'] = pi; ln['col'] = col
            L.sort(key=lambda r: (r['y'], r['x']))
            all_lines.extend(L)
    return all_lines

def parse_questions(lines, body_x=None):
    questions = []
    cur = None
    ctx_lines = []; ctx_range = None

    def start_q(n, line):
        nonlocal cur, ctx_lines, ctx_range
        if cur is not None: finish_q()
        cur = dict(number=n, body=[], ctx=[], alts={}, alt_order=[], page=line['page'],
                   col=line['col'], last_alt=None, state='body', alt_x=None, alt_col=None,
                   marker_y=line['y'], alt_y=None)
        if ctx_lines:
            if ctx_range is None:
                cur['ctx'] = ctx_lines; ctx_lines = []
            else:
                a, b = ctx_range
                if a <= n <= b:
                    cur['ctx'] = list(ctx_lines)
                    if n >= b: ctx_lines = []; ctx_range = None
                elif n > b:
                    ctx_lines = []; ctx_range = None

    def add_ctx(ln):
        nonlocal ctx_range
        ctx_lines.append(ln)
        m = RANGE.search(ln['text']) or RANGE_E.search(ln['text'])
        if m: ctx_range = (int(m.group(1)), int(m.group(2)))

    def finish_q():
        nonlocal cur
        if cur is None: return
        ctx_blocks = lines_to_blocks(cur['ctx'])
        body_blocks = lines_to_blocks(cur['body'])
        if body_blocks and body_blocks[-1][0] == 'prose':
            body_blocks[-1] = ('command', body_blocks[-1][1])
        cur['blocks'] = ctx_blocks + body_blocks
        cur['alternatives'] = [tidy(cur['alts'].get(c, '')) for c in 'ABCDE']
        questions.append(cur)
        cur = None

    for ln in lines:
        text = ln['text']
        qm = QMARK.match(text)
        if qm:
            start_q(int(qm.group(1)), ln)
            rem = qm.group(2).strip()
            if rem and cur is not None:
                cur['body'].append(dict(ln, text=rem))
            continue
        if cur is None:
            add_ctx(ln); continue
        am = ALT.match(text)
        if cur['state'] == 'body':
            if am:
                cur['state'] = 'alts'; cur['alt_x'] = ln['x']; cur['alt_col'] = ln['col']
                if cur['alt_y'] is None: cur['alt_y'] = ln['y']
                letter, rest = am.group(1), am.group(2)
                cur['alts'][letter] = rest; cur['last_alt'] = letter
                if letter not in cur['alt_order']: cur['alt_order'].append(letter)
            else:
                cur['body'].append(ln)
            continue
        if cur['state'] == 'alts':
            if am:
                letter, rest = am.group(1), am.group(2)
                cur['alts'][letter] = rest; cur['last_alt'] = letter; cur['alt_x'] = ln['x']; cur['alt_col'] = ln['col']
                if letter not in cur['alt_order']: cur['alt_order'].append(letter)
            elif ln['col'] == cur['alt_col'] and ln['x'] > (cur['alt_x'] or 0) + 10:
                la = cur['last_alt']
                if la: cur['alts'][la] = cur['alts'][la] + ' ' + text
            else:
                cur['state'] = 'done'; finish_q(); add_ctx(ln)
            continue
    finish_q()
    return questions
