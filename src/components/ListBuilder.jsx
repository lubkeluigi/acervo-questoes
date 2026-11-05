import React, { useMemo, useState } from 'react';
import { ArrowDown, ArrowUp, Check, ChevronRight, FileDown, Filter, ListChecks, Play, Plus, RotateCcw, Shuffle, Trash2, X } from 'lucide-react';
import { getContents, getSubtopics, subjects, exams, SUBJECT_COLORS } from '../data/questions.js';
import { isOpenQuestion } from './OpenResponse.jsx';
import PrintList from './PrintList.jsx';

const DIFFICULTY_ORDER = { 'Fácil': 0, 'Média': 1, 'Difícil': 2 };
const ORDER_OPTIONS = [
  ['selection', 'Ordem da seleção'], ['original', 'Numeração original'], ['subject', 'Agrupar por disciplina'],
  ['difficulty', 'Agrupar por dificuldade'], ['random', 'Embaralhar questões'],
];

export function seededShuffle(items, seed = 1) {
  const result = [...items];
  let state = (Number(seed) || 1) >>> 0;
  const random = () => { state = (state * 1664525 + 1013904223) >>> 0; return state / 4294967296; };
  for (let index = result.length - 1; index > 0; index -= 1) {
    const target = Math.floor(random() * (index + 1));
    [result[index], result[target]] = [result[target], result[index]];
  }
  return result;
}

function snippet(question) {
  const source = [question.statement, question.statementAfter, question.statementTail].filter(Boolean).join(' ');
  return `${source.replace(/\\[a-zA-Z]+/g, '').replace(/[${}]/g, '').replace(/\s+/g, ' ').trim().slice(0, 142)}…`;
}

export default function ListBuilder({ questions, list, setList, onPractice, notify }) {
  const [showPreview, setShowPreview] = useState(false);
  const requestedFilters = { exam: 'Todas', type: 'Todos', subject: 'Todas', content: 'Todos', subtopic: 'Todos', difficulty: 'Todas', ...(list.filters || {}) };
  const contents = getContents(requestedFilters.subject);
  const content = requestedFilters.content === 'Todos' || contents.includes(requestedFilters.content) ? requestedFilters.content : 'Todos';
  const subtopics = getSubtopics(requestedFilters.subject, content);
  const subtopic = requestedFilters.subtopic === 'Todos' || subtopics.includes(requestedFilters.subtopic) ? requestedFilters.subtopic : 'Todos';
  const filters = { ...requestedFilters, content, subtopic };
  const filtered = useMemo(() => questions.filter((question) =>
    (filters.exam === 'Todas' || question.exam === filters.exam) &&
    (filters.type === 'Todos' || (filters.type === 'Objetivas' ? !isOpenQuestion(question) : filters.type === 'Discursivas' ? question.kind === 'discursive' : question.kind === 'essay')) &&
    (filters.subject === 'Todas' || question.subject === filters.subject) &&
    (filters.content === 'Todos' || question.content === filters.content) &&
    (filters.subtopic === 'Todos' || question.subtopic === filters.subtopic) &&
    (filters.difficulty === 'Todas' || question.difficulty === filters.difficulty)
  ), [questions, filters]);
  const selected = useMemo(() => list.selectedIds.map((id) => questions.find((question) => question.id === id)).filter(Boolean), [questions, list.selectedIds]);
  const ordered = useMemo(() => {
    const copy = [...selected];
    if (list.order === 'original') return copy.sort((a, b) => questions.indexOf(a) - questions.indexOf(b));
    if (list.order === 'subject') return copy.sort((a, b) => a.subject.localeCompare(b.subject, 'pt-BR') || questions.indexOf(a) - questions.indexOf(b));
    if (list.order === 'difficulty') return copy.sort((a, b) => (DIFFICULTY_ORDER[a.difficulty] ?? 9) - (DIFFICULTY_ORDER[b.difficulty] ?? 9) || questions.indexOf(a) - questions.indexOf(b));
    if (list.order === 'random') return seededShuffle(copy, list.seed);
    return copy;
  }, [selected, list.order, list.seed, questions]);
  const patch = (value) => setList((current) => ({ ...current, ...value }));
  const patchFilters = (value) => patch({ filters: { ...filters, ...value } });
  const toggle = (id) => patch({ selectedIds: list.selectedIds.includes(id) ? list.selectedIds.filter((item) => item !== id) : [...list.selectedIds, id] });
  const addFiltered = () => {
    const ids = new Set(list.selectedIds); filtered.forEach((question) => ids.add(question.id));
    patch({ selectedIds: [...ids] }); notify(`${filtered.length} questões filtradas foram incluídas na lista.`);
  };
  const selectRandom = () => {
    if (!filtered.length) { notify('Nenhuma questão corresponde aos filtros escolhidos.', 'error'); return; }
    const quantity = Math.max(1, Math.min(Number(list.quantity) || 1, filtered.length));
    const seed = (Number(list.seed) || 0) + 1;
    const chosen = seededShuffle(filtered, seed).slice(0, quantity);
    patch({ selectedIds: chosen.map((question) => question.id), quantity, seed });
    notify(`${chosen.length} ${chosen.length === 1 ? 'questão sorteada' : 'questões sorteadas'} sem repetição.`);
  };
  const move = (id, direction) => {
    const index = list.selectedIds.indexOf(id); const target = index + direction;
    if (index < 0 || target < 0 || target >= list.selectedIds.length) return;
    const ids = [...list.selectedIds]; [ids[index], ids[target]] = [ids[target], ids[index]]; patch({ selectedIds: ids });
  };
  const startPractice = () => { if (ordered.length) onPractice(ordered, list.title); };

  return <section className="list-builder">
    <div className="list-builder-heading">
      <div><span className="eyebrow">PDF + RESOLUÇÃO COMENTADA</span><h1>Fazedor de listas</h1><p>Monte uma prova com as questões do acervo, imprima em A4 ou responda no próprio site.</p></div>
      <div className="list-heading-actions"><button className="button button-secondary" disabled={!ordered.length} onClick={() => setShowPreview(true)}><FileDown size={18} /> Visualizar PDF</button><button className="button button-primary" disabled={!ordered.length} onClick={startPractice}><Play size={17} /> Responder lista</button></div>
    </div>

    <div className="list-config-card">
      <label className="list-title-field"><span>Título da lista</span><input value={list.title} maxLength={80} onChange={(event) => patch({ title: event.target.value })} placeholder="Ex.: Revisão semanal" /></label>
      <label><span>Ordenação</span><select value={list.order} onChange={(event) => patch({ order: event.target.value })}>{ORDER_OPTIONS.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label>
      <label className="list-template-field"><span>Estilo do caderno</span><select value={list.styleTemplate || 'fuvest'} onChange={(event) => patch({ styleTemplate: event.target.value })}><option value="fuvest">Preto e branco</option><option value="vunesp">Detalhes azuis</option></select></label>
      {list.order === 'random' && <button className="button button-quiet list-shuffle-button" onClick={() => patch({ seed: (Number(list.seed) || 0) + 1 })}><Shuffle size={17} /> Embaralhar novamente</button>}
      <label className="answer-key-toggle"><input type="checkbox" checked={list.includeKey} onChange={(event) => patch({ includeKey: event.target.checked })} /><span><strong>Incluir gabarito</strong><small>Em uma página separada do PDF</small></span></label>
    </div>

    <div className="list-builder-grid">
      <div className="list-picker">
        <div className="list-filter-head"><div><Filter size={18} /><strong>Escolher questões</strong><span>{filtered.length} disponíveis</span></div><button className="text-button" onClick={() => patchFilters({ exam: 'Todas', type: 'Todos', subject: 'Todas', content: 'Todos', subtopic: 'Todos', difficulty: 'Todas' })}><RotateCcw size={14} /> Limpar filtros</button></div>
        <div className="list-filters">
          <label><span>Prova</span><select value={filters.exam} onChange={(event) => patchFilters({ exam: event.target.value })}><option>Todas</option>{exams.map((exam) => <option key={exam}>{exam}</option>)}</select></label>
          <label><span>Tipo</span><select value={filters.type} onChange={(event) => patchFilters({ type: event.target.value })}><option>Todos</option><option>Objetivas</option><option>Discursivas</option><option>Redação</option></select></label>
          <label><span>Disciplina</span><select value={filters.subject} onChange={(event) => patchFilters({ subject: event.target.value, content: 'Todos', subtopic: 'Todos' })}><option>Todas</option>{subjects.map((subject) => <option key={subject}>{subject}</option>)}</select></label>
          <label><span>Conteúdo</span><select value={filters.content} onChange={(event) => patchFilters({ content: event.target.value, subtopic: 'Todos' })}><option>Todos</option>{contents.map((content) => <option key={content}>{content}</option>)}</select></label>
          <label><span>Subtema</span><select value={filters.subtopic} onChange={(event) => patchFilters({ subtopic: event.target.value })}><option>Todos</option>{subtopics.map((subtopic) => <option key={subtopic}>{subtopic}</option>)}</select></label>
          <label><span>Dificuldade</span><select value={filters.difficulty} onChange={(event) => patchFilters({ difficulty: event.target.value })}><option>Todas</option><option>Fácil</option><option>Média</option><option>Difícil</option></select></label>
        </div>
        <div className="random-picker">
          <label><span>Quantidade para sortear</span><input type="number" min="1" max={Math.max(filtered.length, 1)} value={list.quantity} onChange={(event) => patch({ quantity: event.target.value })} /></label>
          <button className="button button-secondary" onClick={selectRandom}><Shuffle size={17} /> Selecionar aleatoriamente</button>
          <button className="button button-quiet" disabled={!filtered.length} onClick={addFiltered}><Plus size={17} /> Adicionar filtradas</button>
          <small>O sorteio substitui a seleção atual e não repete questões.</small>
        </div>
        <div className="list-picker-table" role="list" aria-label="Questões disponíveis">
          {filtered.map((question) => {
            const checked = list.selectedIds.includes(question.id);
            return <button className={`list-pick-row ${checked ? 'selected' : ''}`} key={question.id} onClick={() => toggle(question.id)} role="listitem" aria-pressed={checked}>
              <span className="list-pick-check">{checked && <Check size={15} />}</span>
              <span className="list-pick-number">Q{question.number.replace(/\D/g, '')}</span>
              <span className="list-pick-main"><strong>{question.content} · {question.subtopic}</strong><small>{question.detail} — {snippet(question)}</small><span><i style={{ background: SUBJECT_COLORS[question.subject] }} />{question.exam} · {question.phase} · {question.subject} · {question.difficulty}{isOpenQuestion(question) ? ` · ${question.kind === 'essay' ? 'Redação' : 'Discursiva'}` : ''}</span></span>
              <span className="list-pick-add">{checked ? <X size={16} /> : <Plus size={16} />}</span>
            </button>;
          })}
          {!filtered.length && <div className="list-empty-filter">Nenhuma questão encontrada com esses filtros.</div>}
        </div>
      </div>

      <aside className="list-selection-panel">
        <div className="selection-panel-head"><div><ListChecks size={19} /><strong>Sua lista</strong></div><span>{ordered.length}/{questions.length}</span></div>
        <div className="selection-summary"><strong>{ordered.length}</strong><span>{ordered.length === 1 ? 'questão selecionada' : 'questões selecionadas'}</span>{ordered.length > 0 && <button className="text-button danger-text" onClick={() => patch({ selectedIds: [] })}><Trash2 size={14} /> Esvaziar</button>}</div>
        <div className="selection-order-note">{ORDER_OPTIONS.find(([value]) => value === list.order)?.[1]}{list.order === 'selection' && ' · use as setas para reorganizar'}</div>
        <div className="selected-question-list">
          {ordered.map((question, index) => <div className="selected-question-row" key={question.id}>
            <span className="selected-order-number">{String(index + 1).padStart(2, '0')}</span>
            <div><strong>{question.number}{isOpenQuestion(question) ? ` · ${question.kind === 'essay' ? 'Redação' : 'Discursiva'}` : ''}</strong><small>{question.exam} · {question.phase} · {question.subject}</small></div>
            {list.order === 'selection' && <span className="selected-move-buttons"><button aria-label={`Mover ${question.number} para cima`} disabled={index === 0} onClick={() => move(question.id, -1)}><ArrowUp size={14} /></button><button aria-label={`Mover ${question.number} para baixo`} disabled={index === ordered.length - 1} onClick={() => move(question.id, 1)}><ArrowDown size={14} /></button></span>}
            <button className="selected-remove" aria-label={`Remover ${question.number}`} onClick={() => toggle(question.id)}><X size={15} /></button>
          </div>)}
          {!ordered.length && <div className="selection-empty"><ListChecks size={32} /><strong>Comece sua seleção</strong><p>Clique nas questões ao lado ou use o sorteio por quantidade.</p></div>}
        </div>
        {ordered.length > 0 && <div className="selection-panel-actions"><button className="button button-secondary" onClick={() => setShowPreview(true)}>Prévia A4 <ChevronRight size={16} /></button><button className="button button-primary" onClick={startPractice}>Responder <Play size={15} /></button></div>}
      </aside>
    </div>
    {showPreview && <PrintList questions={ordered} title={list.title.trim() || 'Lista de exercícios'} showKey={list.includeKey} styleTemplate={list.styleTemplate || 'fuvest'} onBack={() => setShowPreview(false)} />}
  </section>;
}
