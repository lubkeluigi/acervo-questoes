import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowLeft, ArrowRight, BarChart3, BookOpen, Bookmark, BookmarkCheck,
  Check, CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, CircleHelp,
  Clock3, Eye, FileText, Filter, FlaskConical, GraduationCap, Highlighter,
  Layers3, Menu, Play, RotateCcw, Scissors, Search, Shapes, Shuffle,
  SlidersHorizontal, Sparkles, Target, Timer, Trash2, Trophy, X, XCircle,
} from 'lucide-react';
import Diagram from './components/Diagrams.jsx';
import MathText from './components/MathText.jsx';
import { statementToHtml } from './components/questionFormatting.js';
import { QuestionTable } from './components/QuestionTable.jsx';
import ListBuilder from './components/ListBuilder.jsx';
import PracticeList from './components/PracticeList.jsx';
import OpenSolverView from './components/OpenSolverView.jsx';
import { isOpenQuestion } from './components/OpenResponse.jsx';
import { questions, exams, subjects, years, getContents, getSubtopics, SUBJECT_COLORS } from './data/questions.js';

const DEFAULT_FILTERS = {
  search: '', exam: 'Todas', type: 'Todos', subject: 'Todas', content: 'Todos', subtopic: 'Todos',
  year: 'Todos', difficulty: 'Todas', status: 'Todas',
};

const DEFAULT_LIST_CONFIG = {
  title: 'Lista de exercícios', selectedIds: [], order: 'selection', quantity: 10, seed: 1, includeKey: true, styleTemplate: 'fuvest',
  filters: { exam: 'Todas', type: 'Todos', subject: 'Todas', content: 'Todos', subtopic: 'Todos', difficulty: 'Todas' },
};

function useStoredState(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });
  useEffect(() => {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage may be unavailable */ }
  }, [key, value]);
  return [value, setValue];
}

function normalize(value) {
  return String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function Brand({ compact = false }) {
  return (
    <div className={`brand ${compact ? 'brand-compact' : ''}`}>
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 36 36"><path d="M9 9.5 18 5l9 4.5v17L18 31l-9-4.5Z" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/><path d="m9 9.5 9 4.7 9-4.7M18 14.2V31M13.5 7.3l9 4.6v9.2" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/></svg>
      </span>
      <span className="brand-copy"><strong>acervo<span>.</span></strong>{!compact && <small>BANCO DE QUESTÕES</small>}</span>
    </div>
  );
}

function Sidebar({ view, onNavigate, answers, saved, mobileOpen, onClose }) {
  const answered = Object.keys(answers).length;
  const correct = Object.values(answers).filter((a) => a.correct === true).length;
  const errors = Object.values(answers).filter((a) => !a.open && a.correct === false).length;
  const progress = Math.round((answered / questions.length) * 100);
  const nav = [
    { id: 'bank', label: 'Banco de questões', icon: BookOpen },
    { id: 'lists', label: 'Fazedor de listas', icon: FileText },
    { id: 'simulados', label: 'Simulados', icon: Timer },
    { id: 'performance', label: 'Desempenho', icon: BarChart3 },
  ];
  const library = [
    { id: 'saved', label: 'Questões salvas', icon: Bookmark, count: saved.length },
    { id: 'errors', label: 'Caderno de erros', icon: RotateCcw, count: errors },
  ];
  const renderButton = ({ id, label, icon: Icon, count }) => (
    <button key={id} className={`nav-item ${view === id ? 'active' : ''}`} onClick={() => onNavigate(id)}>
      <Icon size={19} strokeWidth={1.8} /><span>{label}</span>
      {count > 0 && <span className="nav-count">{count}</span>}
    </button>
  );
  return (
    <>
      <div className={`sidebar-overlay ${mobileOpen ? 'visible' : ''}`} onClick={onClose} />
      <aside className={`sidebar ${mobileOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-top">
          <button className="brand-button" onClick={() => onNavigate('bank')} aria-label="Ir ao banco de questões"><Brand /></button>
          <button className="sidebar-close" onClick={onClose} aria-label="Fechar menu"><X size={20} /></button>
        </div>
        <nav className="main-nav" aria-label="Navegação principal">
          <span className="nav-section-label">ESTUDAR</span>
          {nav.map(renderButton)}
          <span className="nav-section-label library-label">MEU CADERNO</span>
          {library.map(renderButton)}
        </nav>
        <div className="sidebar-bottom">
          <div className="sidebar-progress-card">
            <div className="progress-card-head"><span>Seu progresso</span><Target size={17} /></div>
            <div className="progress-number"><strong>{progress}%</strong><span>do acervo</span></div>
            <div className="mini-progress"><span style={{ width: `${progress}%` }} /></div>
            <p>{answered === 0 ? 'Sua primeira questão está esperando.' : `${answered} de ${questions.length} questões resolvidas`}</p>
            <button onClick={() => onNavigate('performance')}>Ver desempenho <ArrowRight size={14} /></button>
          </div>
          <div className="sidebar-foot"><span className="online-dot" /> Seu progresso é salvo neste dispositivo</div>
        </div>
      </aside>
    </>
  );
}

function Topbar({ search, onSearch, onMenu, onHelp, searchRef, listMode = false }) {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="mobile-menu-button" onClick={onMenu} aria-label="Abrir menu"><Menu size={22} /></button>
        <div className="global-search">
          <Search size={18} />
          <input
            ref={searchRef}
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Buscar questão, conteúdo ou prova..."
            aria-label="Buscar no banco de questões"
          />
          {search ? <button onClick={() => onSearch('')} aria-label="Limpar busca"><X size={16} /></button> : <kbd>/</kbd>}
        </div>
      </div>
      <div className="topbar-actions">
        <span className="demo-pill real-exam-pill"><BookOpen size={14} /> <span>{listMode ? 'Lista de exercícios' : `Acervo 2026–2027 · ${questions.length} questões`}</span></span>
        <button className="icon-button help-button" onClick={onHelp} aria-label="Como usar a plataforma" title="Como usar"><CircleHelp size={20} /></button>
        <div className="user-divider" />
        <div className="user-profile"><span className="avatar">ES</span><div><strong>Estudante</strong><small>Meu caderno</small></div><ChevronDown size={15} /></div>
      </div>
    </header>
  );
}

function SelectField({ label, value, onChange, children, disabled = false }) {
  return (
    <label className={`select-field ${disabled ? 'disabled' : ''}`}>
      <span>{label}</span>
      <div className="select-wrap">
        <select value={value} onChange={(e) => onChange(e.target.value)} disabled={disabled}>{children}</select>
        <ChevronDown size={15} />
      </div>
    </label>
  );
}

function FilterPanel({ filters, setFilters, onClear, mobileOpen, onClose }) {
  const contents = getContents(filters.subject);
  const subtopics = getSubtopics(filters.subject, filters.content);
  const activeCount = Object.entries(filters).filter(([key, value]) => key !== 'search' && !['Todas', 'Todos'].includes(value)).length;
  const update = (key, value) => setFilters((current) => ({ ...current, [key]: value }));
  return (
    <>
      {mobileOpen && <div className="filter-overlay" onClick={onClose} />}
      <aside className={`filters-panel ${mobileOpen ? 'mobile-open' : ''}`}>
        <div className="filter-title"><div><SlidersHorizontal size={18} /><strong>Filtros</strong>{activeCount > 0 && <span>{activeCount}</span>}</div><button onClick={onClear}>Limpar</button><button className="filter-close" onClick={onClose}><X size={19} /></button></div>
        <div className="filter-fields">
          <SelectField label="Prova" value={filters.exam} onChange={(v) => update('exam', v)}>
            <option>Todas</option>{exams.map((exam) => <option key={exam}>{exam}</option>)}
          </SelectField>
          <SelectField label="Tipo" value={filters.type} onChange={(v) => update('type', v)}>
            <option>Todos</option><option>Objetivas</option><option>Discursivas</option>
          </SelectField>
          <SelectField label="Matéria" value={filters.subject} onChange={(v) => setFilters((current) => ({ ...current, subject: v, content: 'Todos', subtopic: 'Todos' }))}>
            <option>Todas</option>{subjects.map((subject) => <option key={subject}>{subject}</option>)}
          </SelectField>
          <SelectField label="Conteúdo" value={filters.content} onChange={(v) => setFilters((current) => ({ ...current, content: v, subtopic: 'Todos' }))}>
            <option>Todos</option>{contents.map((content) => <option key={content}>{content}</option>)}
          </SelectField>
          <SelectField label="Subtema" value={filters.subtopic} onChange={(v) => update('subtopic', v)}>
            <option>Todos</option>{subtopics.map((subtopic) => <option key={subtopic}>{subtopic}</option>)}
          </SelectField>
          <div className="filter-two-columns">
            <SelectField label="Ano" value={filters.year} onChange={(v) => update('year', v)}>
              <option>Todos</option>{years.map((year) => <option key={year}>{year}</option>)}
            </SelectField>
            <SelectField label="Dificuldade" value={filters.difficulty} onChange={(v) => update('difficulty', v)}>
              <option>Todas</option><option>Fácil</option><option>Média</option><option>Difícil</option>
            </SelectField>
          </div>
          <SelectField label="Situação" value={filters.status} onChange={(v) => update('status', v)}>
            <option>Todas</option><option>Não resolvidas</option><option>Corretas</option><option>Incorretas</option>
          </SelectField>
        </div>
        <div className="smart-filter-note"><Sparkles size={17} /><div><strong>Filtros inteligentes</strong><p>Conteúdos e subtemas se adaptam à matéria escolhida.</p></div></div>
      </aside>
    </>
  );
}

function StatusBadge({ question, answers }) {
  const answer = answers[question.id];
  if (question.annulled) return <span className="question-status status-annulled"><CircleHelp size={14} /> Questão anulada</span>;
  if (!answer) return <span className="question-status status-new"><span /> Não resolvida</span>;
  if (answer.open) {
    const assessed = Object.keys(answer.scores || {}).length;
    const total = (question.parts || []).filter((part) => Number.isFinite(part.maxScore)).length;
    return <span className="question-status status-open"><FileText size={14} /> {answer.reviewed ? total && assessed === total ? 'Autoavaliada' : 'Autoavaliação pendente' : 'Resposta salva'}</span>;
  }
  return answer.correct
    ? <span className="question-status status-correct"><CheckCircle2 size={14} /> Você acertou</span>
    : <span className="question-status status-wrong"><XCircle size={14} /> Para revisar</span>;
}

function QuestionCard({ question, answers, saved, onToggleSaved, onOpen }) {
  const isSaved = saved.includes(question.id);
  return (
    <article className="question-card" onClick={onOpen} onKeyDown={(e) => { if (e.key === 'Enter') onOpen(); }} role="button" tabIndex={0}>
      <div className="question-card-top">
        <div className="question-origin"><span className="exam-badge">{question.exam}</span><span>{question.year}</span><i /><span>{question.number}</span>{question.phase && <><i /><span>{question.phase}</span></>}</div>
        <button className={`bookmark-button ${isSaved ? 'saved' : ''}`} onClick={(e) => { e.stopPropagation(); onToggleSaved(); }} aria-label={isSaved ? 'Remover das questões salvas' : 'Salvar questão'} title={isSaved ? 'Remover dos salvos' : 'Salvar questão'}>
          <Bookmark size={18} fill={isSaved ? 'currentColor' : 'none'} />
        </button>
      </div>
      <div className="question-tags"><span className="subject-tag" style={{ '--subject-color': SUBJECT_COLORS[question.subject] }}><i />{question.subject}</span><span>{question.content}</span><span className="subtopic-tag">{question.subtopic}</span>{isOpenQuestion(question) && <span className="question-kind-badge">{question.kind === 'essay' ? 'Redação' : 'Discursiva'}</span>}</div>
      <p className="question-preview">{question.preview || question.statementAfter?.split('\n\n').slice(-1)[0] || question.statement.split('\n\n').slice(-1)[0]}</p>
      <div className="question-card-bottom">
        <div className="card-meta"><span className={`difficulty difficulty-${normalize(question.difficulty)}`}>{question.difficulty}</span>{(question.diagram || question.images || question.tables || question.alternativeImages) && <span className="diagram-label"><Shapes size={14} /> {question.diagram ? 'Com diagrama' : question.tables ? 'Com tabela' : 'Com imagens'}</span>}</div>
        <StatusBadge question={question} answers={answers} />
      </div>
      <div className="card-solve-link">Resolver questão <ArrowRight size={16} /></div>
    </article>
  );
}

function EmptyState({ type = 'filters', onAction }) {
  const saved = type === 'saved';
  const errors = type === 'errors';
  return (
    <div className="empty-state">
      <div className="empty-icon">{saved ? <Bookmark size={28} /> : errors ? <Trophy size={28} /> : <Search size={28} />}</div>
      <h3>{saved ? 'Seu caderno está esperando boas questões' : errors ? 'Nenhum erro por aqui. Muito bem!' : 'Nenhuma questão encontrada'}</h3>
      <p>{saved ? 'Toque no marcador de uma questão para guardá-la e revisar depois.' : errors ? 'Quando você errar uma questão, ela aparecerá aqui para uma nova tentativa.' : 'Tente remover alguns filtros ou buscar por outro termo.'}</p>
      <button className="button button-secondary" onClick={onAction}>{saved || errors ? 'Explorar questões' : 'Limpar filtros'}</button>
    </div>
  );
}

function BankView({ view, filters, setFilters, sort, setSort, filtered, answers, saved, onToggleSaved, onOpen, onClear, onSimulado, onNavigate, mobileFilters, setMobileFilters }) {
  const answered = Object.keys(answers).length;
  const objectiveAnswers = Object.values(answers).filter((answer) => !answer.open);
  const correct = objectiveAnswers.filter((a) => a.correct === true).length;
  const accuracy = objectiveAnswers.length ? Math.round((correct / objectiveAnswers.length) * 100) : 0;
  const titles = {
    bank: ['Banco de questões', 'Explore o acervo, pratique no seu ritmo e entenda cada alternativa.'],
    saved: ['Questões salvas', 'Seu acervo pessoal para voltar às questões mais importantes.'],
    errors: ['Caderno de erros', 'Transforme cada erro em uma oportunidade de revisão.'],
  };
  return (
    <div className="page bank-page">
      <div className="page-heading">
        <div><span className="eyebrow">APRENDER FAZENDO</span><h1>{titles[view][0]}</h1><p>{titles[view][1]}</p></div>
        {view === 'bank' ? <button className="button button-primary" onClick={onSimulado}><Timer size={18} /> Montar simulado</button> : <button className="button button-secondary" onClick={() => onNavigate('bank')}><BookOpen size={17} /> Ver todo o acervo</button>}
      </div>
      {view === 'bank' && (
        <div className="study-summary">
          <div><span className="summary-icon green"><Layers3 size={19} /></span><p><strong>{questions.length}</strong><span>questões no acervo</span></p></div>
          <i />
          <div><span className="summary-icon blue"><CheckCircle2 size={19} /></span><p><strong>{answered}</strong><span>já resolvidas</span></p></div>
          <i />
          <div><span className="summary-icon amber"><Target size={19} /></span><p><strong>{accuracy}%</strong><span>de precisão</span></p></div>
          <div className="summary-message"><Sparkles size={17} /><span>Uma questão de cada vez.<br /><strong>Um avanço de cada vez.</strong></span></div>
        </div>
      )}
      <button className="mobile-filter-button button button-secondary" onClick={() => setMobileFilters(true)}><Filter size={17} /> Filtrar questões</button>
      <div className="bank-layout">
        <FilterPanel filters={filters} setFilters={setFilters} onClear={onClear} mobileOpen={mobileFilters} onClose={() => setMobileFilters(false)} />
        <section className="results-section">
          <div className="results-toolbar"><div><strong>{filtered.length}</strong> {filtered.length === 1 ? 'questão encontrada' : 'questões encontradas'}</div><label className="sort-select"><span>Ordenar:</span><select value={sort} onChange={(e) => setSort(e.target.value)}><option value="recent">Mais recentes</option><option value="oldest">Mais antigas</option><option value="subject">Por matéria</option></select><ChevronDown size={14} /></label></div>
          {filtered.length > 0 ? <div className="questions-list">{filtered.map((question) => <QuestionCard key={question.id} question={question} answers={answers} saved={saved} onToggleSaved={() => onToggleSaved(question.id)} onOpen={() => onOpen(question, filtered)} />)}</div> : <EmptyState type={view} onAction={view === 'bank' ? onClear : () => onNavigate('bank')} />}
          {filtered.length > 0 && <div className="results-end"><Check size={15} /><span>Você chegou ao fim desta seleção</span></div>}
        </section>
      </div>
    </div>
  );
}

function HighlighterToolbar({ onHighlight, onClear }) {
  return (
    <div className="highlighter-toolbar">
      <div className="highlight-label"><Highlighter size={17} /><span>Marca-texto</span></div>
      <span className="highlight-instruction">Selecione um trecho e escolha uma cor</span>
      <div className="highlight-colors">
        <button className="highlight-color yellow" onMouseDown={(e) => e.preventDefault()} onClick={() => onHighlight('yellow')} aria-label="Marcar seleção em amarelo" title="Amarelo" />
        <button className="highlight-color green" onMouseDown={(e) => e.preventDefault()} onClick={() => onHighlight('green')} aria-label="Marcar seleção em verde" title="Verde" />
        <button className="highlight-color pink" onMouseDown={(e) => e.preventDefault()} onClick={() => onHighlight('pink')} aria-label="Marcar seleção em rosa" title="Rosa" />
      </div>
      <button className="clear-highlights" onClick={onClear} title="Remover todas as marcações"><Trash2 size={15} /><span>Limpar</span></button>
    </div>
  );
}

function SolverView({ question, queue, answers, saved, eliminated, setEliminated, onToggleSaved, onAnswer, onBack, onNavigateQuestion, notify, sessionTitle }) {
  const savedAnswer = question.annulled ? null : answers[question.id];
  const [selected, setSelected] = useState(savedAnswer?.selected ?? null);
  const [checked, setChecked] = useState(Boolean(savedAnswer));
  const [showResolution, setShowResolution] = useState(Boolean(savedAnswer));
  const [markup, setMarkup] = useState(() => statementToHtml(question));
  const [afterMarkup, setAfterMarkup] = useState(() => statementToHtml(question, 'after'));
  const [tailMarkup, setTailMarkup] = useState(() => statementToHtml(question, 'tail'));
  const statementRef = useRef(null);
  const beforeTextRef = useRef(null);
  const afterTextRef = useRef(null);
  const tailTextRef = useRef(null);
  const feedbackRef = useRef(null);
  const position = queue.indexOf(question.id);
  const currentEliminated = eliminated[question.id] || [];
  const isSaved = saved.includes(question.id);
  const highlightId = `${question.id}:rich-v2`;
  const hasHighlights = [markup, afterMarkup, tailMarkup].some((value) => value.includes('text-highlight'));

  useEffect(() => {
    const previous = question.annulled ? null : answers[question.id];
    setSelected(previous?.selected ?? null);
    setChecked(Boolean(previous));
    setShowResolution(Boolean(previous));
    let savedMarkup = null;
    try { savedMarkup = JSON.parse(localStorage.getItem('acervo-highlights') || '{}')[highlightId]; } catch { /* ignore */ }
    setMarkup((typeof savedMarkup === 'string' ? savedMarkup : savedMarkup?.main) || statementToHtml(question));
    setAfterMarkup(savedMarkup?.after || statementToHtml(question, 'after'));
    setTailMarkup(savedMarkup?.tail || statementToHtml(question, 'tail'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [question.id]);

  const saveMarkup = () => {
    const main = beforeTextRef.current?.innerHTML || markup;
    const after = afterTextRef.current?.innerHTML || afterMarkup;
    const tail = tailTextRef.current?.innerHTML || tailMarkup;
    setMarkup(main);
    setAfterMarkup(after);
    setTailMarkup(tail);
    try {
      const all = JSON.parse(localStorage.getItem('acervo-highlights') || '{}');
      all[highlightId] = { main, after, tail };
      localStorage.setItem('acervo-highlights', JSON.stringify(all));
    } catch { /* ignore */ }
  };

  const applyHighlight = (color) => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed || !selection.rangeCount) {
      notify('Selecione primeiro um trecho do enunciado.');
      return;
    }
    const range = selection.getRangeAt(0);
    if (!beforeTextRef.current?.contains(range.commonAncestorContainer) && !afterTextRef.current?.contains(range.commonAncestorContainer) && !tailTextRef.current?.contains(range.commonAncestorContainer)) {
      notify('A seleção precisa estar em um trecho de texto do enunciado.');
      return;
    }
    try {
      const mark = document.createElement('mark');
      mark.className = `text-highlight ${color}`;
      mark.appendChild(range.extractContents());
      range.insertNode(mark);
      selection.removeAllRanges();
      saveMarkup();
    } catch {
      notify('Tente selecionar um trecho menor, dentro de um único parágrafo.');
    }
  };

  const clearHighlights = () => {
    setMarkup(statementToHtml(question));
    setAfterMarkup(statementToHtml(question, 'after'));
    setTailMarkup(statementToHtml(question, 'tail'));
    try {
      const all = JSON.parse(localStorage.getItem('acervo-highlights') || '{}');
      delete all[highlightId];
      localStorage.setItem('acervo-highlights', JSON.stringify(all));
    } catch { /* ignore */ }
  };

  const toggleEliminated = (index) => {
    if (checked) return;
    const current = eliminated[question.id] || [];
    const next = current.includes(index) ? current.filter((item) => item !== index) : [...current, index];
    setEliminated((all) => ({ ...all, [question.id]: next }));
    if (selected === index && !current.includes(index)) setSelected(null);
  };

  const confirmAnswer = () => {
    if (selected === null) { notify('Escolha uma alternativa antes de confirmar.'); return; }
    setChecked(true);
    setShowResolution(true);
    if (!question.annulled) onAnswer(question, selected);
    setTimeout(() => feedbackRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
  };

  const chooseAlternative = (index) => {
    if (checked || currentEliminated.includes(index)) return;
    setSelected(index);
  };

  return (
    <div className="page solver-page">
      <div className="solver-navigation">
        <button className="back-button" onClick={onBack}><ArrowLeft size={18} /> Voltar {sessionTitle ? 'aos simulados' : 'ao banco'}</button>
        <div className="question-position"><span>{sessionTitle || 'Questão'}</span><strong>{position + 1} <i>/</i> {queue.length}</strong></div>
        <div className="question-nav-buttons"><button disabled={position <= 0} onClick={() => onNavigateQuestion(-1)} aria-label="Questão anterior"><ChevronLeft size={19} /></button><button disabled={position >= queue.length - 1} onClick={() => onNavigateQuestion(1)} aria-label="Próxima questão"><ChevronRight size={19} /></button></div>
      </div>
      <div className="solver-layout">
        <main className="solver-main">
          <section className="solver-card">
            <div className="solver-meta">
              <div className="question-origin"><span className="exam-badge">{question.exam}</span><span>{question.year}</span><i /><span>{question.number}</span>{question.phase && <><i /><span>{question.phase}</span></>}{question.demo && <span className="illustrative-badge">Ilustrativa</span>}{question.annulled && <span className="annulled-badge">Anulada</span>}</div>
              <button className={`bookmark-button ${isSaved ? 'saved' : ''}`} onClick={onToggleSaved}><Bookmark size={19} fill={isSaved ? 'currentColor' : 'none'} /><span>{isSaved ? 'Salva' : 'Salvar'}</span></button>
            </div>
            <div className="question-tags solver-tags"><span className="subject-tag" style={{ '--subject-color': SUBJECT_COLORS[question.subject] }}><i />{question.subject}</span><span>{question.content}</span><span className="subtopic-tag">{question.subtopic}</span><span className={`difficulty difficulty-${normalize(question.difficulty)}`}>{question.difficulty}</span></div>
            {question.annulled && <div className="annulment-notice"><CircleHelp size={20} /><div><strong>Questão anulada</strong><p>{question.annulmentReason}</p></div></div>}
            <HighlighterToolbar onHighlight={applyHighlight} onClear={clearHighlights} />
            <div className={`question-statement ${question.mathClass || ''}`} ref={statementRef}>
              <div ref={beforeTextRef} dangerouslySetInnerHTML={{ __html: markup }} />
              {question.math && <div className="statement-display-math"><MathText text={question.math} display /></div>}
              {question.images && <div className={`question-images ${question.images.length > 1 ? 'question-images-stack' : ''}`}>{question.images.map((image) => <figure key={image.src} className={image.className || undefined}><img src={image.src} alt={image.alt} /><figcaption>{image.caption}</figcaption></figure>)}</div>}
              {question.diagram && <figure className="diagram-figure"><Diagram type={question.diagram} />{question.figureCaption !== '' && <figcaption>{question.figureCaption || 'Representação esquemática da situação descrita no enunciado.'}</figcaption>}</figure>}
              {question.tables?.map((table) => <QuestionTable key={table.ariaLabel} table={table} />)}
              {question.statementAfter && <div ref={afterTextRef} dangerouslySetInnerHTML={{ __html: afterMarkup }} />}
              {question.afterMath && <div className="statement-display-math"><MathText text={question.afterMath} display /></div>}
              {question.afterImages && <div className={`question-images ${question.afterImages.length > 1 ? 'question-images-stack' : ''}`}>{question.afterImages.map((image) => <figure key={image.src} className={image.className || undefined}><img src={image.src} alt={image.alt} /><figcaption>{image.caption}</figcaption></figure>)}</div>}
              {question.afterDiagram && <figure className="diagram-figure"><Diagram type={question.afterDiagram} />{question.afterFigureCaption !== '' && <figcaption>{question.afterFigureCaption || 'Representação esquemática da situação descrita no enunciado.'}</figcaption>}</figure>}
              {question.afterTables?.map((table) => <QuestionTable key={table.ariaLabel} table={table} />)}
              {question.statementTail && <div ref={tailTextRef} dangerouslySetInnerHTML={{ __html: tailMarkup }} />}
            </div>
            <div className="alternatives-heading"><div><strong>Escolha uma alternativa</strong><span><Scissors size={13} /> Use a tesoura para eliminar opções</span></div><span>{selected !== null && !checked ? `Alternativa ${String.fromCharCode(65 + selected)} selecionada` : ''}</span></div>
            <div className="alternatives-list" role="radiogroup" aria-label="Alternativas">
              {question.alternatives.map((alternative, index) => {
                const isEliminated = currentEliminated.includes(index);
                const isCorrect = checked && !question.annulled && index === question.correct;
                const isWrong = checked && !question.annulled && selected === index && index !== question.correct;
                const [alternativeBody, ...alternativeSource] = alternative.split('\n\n');
                return (
                  <div
                    key={index}
                    className={`alternative ${selected === index ? 'selected' : ''} ${isEliminated ? 'eliminated' : ''} ${isCorrect ? 'correct' : ''} ${isWrong ? 'wrong' : ''} ${checked ? 'locked' : ''}`}
                    onClick={() => chooseAlternative(index)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') chooseAlternative(index); }}
                    role="radio" aria-checked={selected === index} tabIndex={isEliminated ? -1 : 0}
                  >
                    <span className="alternative-letter">{String.fromCharCode(65 + index)}</span>
                    <span className="alternative-text"><MathText text={alternativeBody} />{alternativeSource.map((source, sourceIndex) => <span className="alternative-source" key={sourceIndex}><MathText text={source} /></span>)}{question.alternativeImages?.[index] && <span className="alternative-image-pair">{question.alternativeImages[index].map((image) => <span className="alternative-art" key={image.src}><img src={image.src} alt={image.alt} loading="lazy" /></span>)}</span>}{isEliminated && <small>eliminada</small>}</span>
                    {isCorrect && <span className="answer-state-icon"><CheckCircle2 size={20} /></span>}
                    {isWrong && <span className="answer-state-icon"><XCircle size={20} /></span>}
                    {!checked && <button className={`scissor-button ${isEliminated ? 'restore' : ''}`} onClick={(e) => { e.stopPropagation(); toggleEliminated(index); }} title={isEliminated ? 'Restaurar alternativa' : 'Eliminar alternativa'} aria-label={`${isEliminated ? 'Restaurar' : 'Eliminar'} alternativa ${String.fromCharCode(65 + index)}`}><Scissors size={17} /></button>}
                  </div>
                );
              })}
            </div>
            <div className="answer-actions">
              <button className="button button-ghost" onClick={() => setShowResolution((value) => !value)}><Eye size={17} />{showResolution ? 'Ocultar resolução' : 'Ver resolução'}</button>
              {!checked ? <button className="button button-primary" onClick={confirmAnswer}>Confirmar resposta <ArrowRight size={17} /></button> : position < queue.length - 1 ? <button className="button button-primary" onClick={() => onNavigateQuestion(1)}>Próxima questão <ArrowRight size={17} /></button> : <button className="button button-primary" onClick={onBack}>Concluir <Check size={17} /></button>}
            </div>
          </section>
          {checked && (
            <div ref={feedbackRef} className={`answer-feedback ${question.annulled ? 'feedback-annulled' : selected === question.correct ? 'feedback-correct' : 'feedback-wrong'}`}>
              {question.annulled ? <CircleHelp size={25} /> : selected === question.correct ? <CheckCircle2 size={25} /> : <XCircle size={25} />}
              <div><strong>{question.annulled ? 'Questão anulada.' : selected === question.correct ? 'Resposta correta. Excelente!' : 'Não foi dessa vez — e tudo bem.'}</strong><p>{question.annulled ? `Sua seleção não entra no desempenho. Considerando apenas o enunciado, o resultado é a alternativa ${String.fromCharCode(65 + question.correct)}.` : selected === question.correct ? 'Você dominou este conceito. Confira a resolução para consolidar o raciocínio.' : `O gabarito é a alternativa ${String.fromCharCode(65 + question.correct)}. Entenda o raciocínio abaixo e transforme este erro em aprendizado.`}</p></div>
            </div>
          )}
          {showResolution && (
            <section className="resolution-card">
              <div className="resolution-header"><span className="resolution-icon"><FileText size={21} /></span><div><span className="eyebrow">ENTENDA O RACIOCÍNIO</span><h2>Resolução comentada</h2></div><span className={`answer-key ${question.annulled ? 'annulled-key' : ''}`}>{question.annulled ? 'Anulada · pelo enunciado:' : 'Gabarito:'} <strong>{String.fromCharCode(65 + question.correct)}</strong></span></div>
              <div className="resolution-steps">{question.resolution.map((step, index) => <div className="resolution-step" key={index}><span>{index + 1}</span><p><MathText text={step} /></p></div>)}</div>
              <div className="analysis-section"><div className="analysis-title"><h3>Análise de cada alternativa</h3><span>{question.alternatives.length} comentários</span></div><div className="analysis-list">{question.alternatives.map((alternative, index) => <div key={index} className={`analysis-item ${question.annulled && index === question.correct ? 'analysis-annulled' : !question.annulled && index === question.correct ? 'analysis-correct' : ''} ${checked && !question.annulled && selected === index && index !== question.correct ? 'analysis-wrong' : ''}`}><div className="analysis-item-head"><span className="analysis-letter">{String.fromCharCode(65 + index)}</span><strong><MathText text={question.shortAlternatives?.[index] || alternative} /></strong>{question.annulled && index === question.correct ? <span className="analysis-tag annulled-tag"><FileText size={12} /> Pelo enunciado</span> : !question.annulled && index === question.correct ? <span className="analysis-tag correct-tag"><Check size={12} /> Correta</span> : checked && selected === index ? <span className="analysis-tag wrong-tag">Sua resposta</span> : null}</div><p><MathText text={question.analyses[index]} /></p></div>)}</div></div>
            </section>
          )}
          <div className="solver-bottom-nav"><button disabled={position <= 0} onClick={() => onNavigateQuestion(-1)}><ArrowLeft size={16} /> Questão anterior</button><span>{question.subject} · {question.content}</span><button disabled={position >= queue.length - 1} onClick={() => onNavigateQuestion(1)}>Próxima questão <ArrowRight size={16} /></button></div>
        </main>
        <aside className="solver-aside">
          <div className="aside-card focus-card"><span className="aside-card-icon"><GraduationCap size={20} /></span><h3>Modo foco</h3><p>Leia com atenção, destaque os dados importantes e elimine o que não faz sentido.</p><div className="focus-checklist"><span className={hasHighlights ? 'done' : ''}><i>{hasHighlights && <Check size={11} />}</i>Destaque o enunciado</span><span className={currentEliminated.length ? 'done' : ''}><i>{currentEliminated.length > 0 && <Check size={11} />}</i>Elimine alternativas</span><span className={selected !== null ? 'done' : ''}><i>{selected !== null && <Check size={11} />}</i>Escolha sua resposta</span></div></div>
          <div className="aside-card aside-tip"><Sparkles size={18} /><div><strong>Dica de estudo</strong><p>Tente justificar cada alternativa eliminada. Isso torna sua revisão muito mais eficiente.</p></div></div>
          <div className="aside-source"><FileText size={15} /><span>{question.originalUrl ? <>Fonte: {question.exam} {question.year}, {question.phase}.<br /><a href={question.originalUrl} target="_blank" rel="noreferrer">Abrir prova original <ArrowRight size={11} /></a></> : <>Questão ilustrativa.<br />O acervo das suas provas será inserido aqui.</>}</span></div>
        </aside>
      </div>
    </div>
  );
}

function SimuladosView({ onCreate, onQuickStart }) {
  return (
    <div className="page simulados-page">
      <div className="page-heading"><div><span className="eyebrow">TREINO COM PROPÓSITO</span><h1>Simulados</h1><p>Combine provas, matérias e conteúdos para criar um treino com a sua cara.</p></div></div>
      <section className="simulado-hero"><div className="simulado-hero-copy"><span className="hero-kicker"><Sparkles size={15} /> SEU PRÓXIMO TREINO COMEÇA AQUI</span><h2>Transforme o acervo<br />em <em>experiência de prova.</em></h2><p>Escolha o que quer praticar. A correção e a análise completa ficam disponíveis em cada questão.</p><button className="button button-light" onClick={onCreate}><Play size={17} fill="currentColor" /> Criar meu simulado</button></div><div className="simulado-illustration" aria-hidden="true"><div className="timer-ring"><Timer size={55} strokeWidth={1.25} /></div><span className="floating-chip chip-one"><CheckCircle2 size={16} /> Correção imediata</span><span className="floating-chip chip-two"><BarChart3 size={16} /> Seu desempenho</span><div className="orbit orbit-one" /><div className="orbit orbit-two" /></div></section>
      <div className="section-heading"><div><h2>Comece por uma sugestão</h2><p>Treinos rápidos para entrar no ritmo.</p></div></div>
      <div className="quick-simulados">
        <button onClick={() => onQuickStart({ subject: 'Todas', exam: 'FUVEST', count: 5, random: false })}><span className="quick-icon" style={{ background: '#edf1ff', color: '#5675d6' }}><BookOpen size={22} /></span><div><span>FUVEST 2027 · 5 QUESTÕES</span><h3>Prova V1 em foco</h3><p>Comece pela sequência do acervo</p></div><ArrowRight size={19} /></button>
        <button onClick={() => onQuickStart({ subject: 'Literatura', exam: 'Todas', count: 3, random: false })}><span className="quick-icon" style={{ background: '#f2edf8', color: '#8b5fbf' }}><FileText size={22} /></span><div><span>LITERATURA · 3 QUESTÕES</span><h3>Poesia e interpretação</h3><p>Drummond e Ferreira Gullar</p></div><ArrowRight size={19} /></button>
        <button onClick={() => onQuickStart({ subject: 'Todas', exam: 'Todas', count: 5, random: true })}><span className="quick-icon" style={{ background: '#f5ede4', color: '#a36b45' }}><Clock3 size={22} /></span><div><span>REVISÃO · 5 QUESTÕES</span><h3>Um pouco de tudo</h3><p>Para treinar em poucos minutos</p></div><ArrowRight size={19} /></button>
      </div>
      <div className="how-it-works"><div><span>1</span><p><strong>Personalize</strong>Escolha prova, matéria e quantidade.</p></div><i /><div><span>2</span><p><strong>Resolva</strong>Use todas as ferramentas de estudo.</p></div><i /><div><span>3</span><p><strong>Entenda</strong>Revise cada alternativa comentada.</p></div></div>
    </div>
  );
}

function PerformanceView({ answers, onOpen, onNavigate }) {
  const entries = Object.entries(answers).sort((a, b) => new Date(b[1].date) - new Date(a[1].date));
  const objectiveEntries = entries.filter(([, answer]) => !answer.open);
  const answered = entries.length;
  const correct = objectiveEntries.filter(([, answer]) => answer.correct === true).length;
  const accuracy = objectiveEntries.length ? Math.round((correct / objectiveEntries.length) * 100) : 0;
  return (
    <div className="page performance-page">
      <div className="page-heading"><div><span className="eyebrow">SEU RITMO, SEUS DADOS</span><h1>Desempenho</h1><p>Veja o que já avançou e descubra onde concentrar a próxima revisão.</p></div><button className="button button-primary" onClick={() => onNavigate('bank')}><BookOpen size={17} /> Resolver questões</button></div>
      <div className="performance-stats">
        <div><span className="stat-icon green"><BookOpen size={20} /></span><p>Questões resolvidas<strong>{answered}<small> / {questions.length}</small></strong></p></div>
        <div><span className="stat-icon blue"><CheckCircle2 size={20} /></span><p>Respostas corretas<strong>{correct}</strong></p></div>
        <div><span className="stat-icon amber"><RotateCcw size={20} /></span><p>Para revisar<strong>{objectiveEntries.length - correct}</strong></p></div>
        <div><span className="stat-icon purple"><Trophy size={20} /></span><p>Precisão geral<strong>{accuracy}%</strong></p></div>
      </div>
      <div className="performance-grid">
        <section className="performance-card subject-performance"><div className="card-section-title"><div><h2>Desempenho por matéria</h2><p>Precisão considerando as questões já respondidas.</p></div><BarChart3 size={20} /></div><div className="subject-bars">{subjects.map((subject) => { const subjectQuestions = questions.filter((q) => q.subject === subject); const subjectAnswers = subjectQuestions.filter((q) => answers[q.id] && !answers[q.id].open); const subjectCorrect = subjectAnswers.filter((q) => answers[q.id].correct === true).length; const percent = subjectAnswers.length ? Math.round((subjectCorrect / subjectAnswers.length) * 100) : 0; return <div className="subject-bar-row" key={subject}><div className="subject-bar-label"><span className="subject-tag" style={{ '--subject-color': SUBJECT_COLORS[subject] }}><i />{subject}</span><span>{subjectAnswers.length ? `${subjectCorrect}/${subjectAnswers.length} corretas` : 'Ainda não iniciada'}</span></div><div className="subject-bar-track"><span style={{ width: `${percent}%`, background: SUBJECT_COLORS[subject] }} /></div><strong>{subjectAnswers.length ? `${percent}%` : '—'}</strong></div>; })}</div></section>
        <section className="performance-card accuracy-card"><div className="card-section-title"><div><h2>Visão geral</h2><p>Seu panorama no acervo.</p></div></div><div className="accuracy-donut" style={{ '--accuracy': `${accuracy * 3.6}deg` }}><div><strong>{accuracy}%</strong><span>de precisão</span></div></div><div className="accuracy-legend"><span><i className="legend-correct" />{correct} corretas</span><span><i className="legend-wrong" />{objectiveEntries.length - correct} incorretas</span></div><p className="accuracy-message">{answered === 0 ? 'Resolva sua primeira questão para começar a acompanhar seu desempenho.' : accuracy >= 70 ? 'Ótimo ritmo! Continue revisando as resoluções para consolidar.' : 'A consistência vale mais que a pressa. Revise os erros e tente novamente.'}</p></section>
      </div>
      <section className="performance-card recent-card"><div className="card-section-title"><div><h2>Atividade recente</h2><p>Suas últimas respostas registradas.</p></div></div>{entries.length ? <div className="recent-list">{entries.slice(0, 6).map(([id, answer]) => { const question = questions.find((q) => q.id === id); if (!question) return null; return <button key={id} onClick={() => onOpen(question, questions)}><span className={`recent-status ${answer.open ? 'open' : answer.correct ? 'correct' : 'wrong'}`}>{answer.open ? <FileText size={16} /> : answer.correct ? <Check size={16} /> : <X size={16} />}</span><div><strong>{question.subject} · {question.content}</strong><span>{question.exam} {question.year} · {question.number}</span></div><span className="recent-date">{new Date(answer.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })}</span><ArrowRight size={17} /></button>; })}</div> : <div className="recent-empty"><span><BarChart3 size={25} /></span><p><strong>Seu histórico começa na primeira resposta.</strong>As questões resolvidas aparecerão aqui.</p></div>}</section>
    </div>
  );
}

function SimuladoModal({ onClose, onStart }) {
  const [exam, setExam] = useState('Todas');
  const [subject, setSubject] = useState('Todas');
  const [count, setCount] = useState(5);
  const [random, setRandom] = useState(true);
  const available = questions.filter((q) => (exam === 'Todas' || q.exam === exam) && (subject === 'Todas' || q.subject === subject));
  useEffect(() => { if (count > available.length && available.length > 0) setCount(available.length); }, [available.length]);
  return (
    <div className="modal-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal simulado-modal" role="dialog" aria-modal="true" aria-labelledby="simulado-title">
        <button className="modal-close" onClick={onClose} aria-label="Fechar"><X size={20} /></button>
        <span className="modal-icon"><Timer size={24} /></span><span className="eyebrow">TREINO PERSONALIZADO</span><h2 id="simulado-title">Monte seu simulado</h2><p className="modal-description">Você escolhe o recorte. Nós preparamos as questões.</p>
        <div className="modal-form"><SelectField label="Prova" value={exam} onChange={setExam}><option>Todas</option>{exams.map((item) => <option key={item}>{item}</option>)}</SelectField><SelectField label="Matéria" value={subject} onChange={setSubject}><option>Todas</option>{subjects.map((item) => <option key={item}>{item}</option>)}</SelectField><SelectField label="Quantidade de questões" value={count} onChange={(value) => setCount(Number(value))}>{[1, 2, 3, 5, 8, 10].filter((number) => number <= available.length).map((number) => <option key={number} value={number}>{number} {number === 1 ? 'questão' : 'questões'}</option>)}{available.length === 0 && <option value={0}>Nenhuma disponível</option>}</SelectField><div className="order-option"><div><Shuffle size={18} /><span><strong>Ordem aleatória</strong><small>Deixe o treino mais parecido com uma prova</small></span></div><button className={`switch ${random ? 'on' : ''}`} onClick={() => setRandom((value) => !value)} role="switch" aria-checked={random}><span /></button></div></div>
        <div className="availability-note"><CheckCircle2 size={16} /><span>{available.length} {available.length === 1 ? 'questão disponível' : 'questões disponíveis'} para este recorte</span></div>
        <div className="modal-actions"><button className="button button-ghost" onClick={onClose}>Cancelar</button><button className="button button-primary" disabled={!available.length || !count} onClick={() => onStart({ exam, subject, count, random })}><Play size={16} fill="currentColor" /> Começar simulado</button></div>
      </div>
    </div>
  );
}

function HelpModal({ onClose }) {
  return (
    <div className="modal-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}><div className="modal help-modal" role="dialog" aria-modal="true"><button className="modal-close" onClick={onClose}><X size={20} /></button><span className="modal-icon"><GraduationCap size={24} /></span><h2>Um jeito melhor de revisar</h2><p className="modal-description">Ferramentas simples para estudar ativamente, não apenas conferir o gabarito.</p><div className="help-list"><div><span><Highlighter size={19} /></span><p><strong>Destaque o que importa</strong>Selecione um trecho do enunciado e clique em uma das cores do marca-texto.</p></div><div><span><Scissors size={19} /></span><p><strong>Elimine alternativas</strong>Use a tesoura ao lado de cada opção. Clique novamente para restaurá-la.</p></div><div><span><FileText size={19} /></span><p><strong>Entenda cada escolha</strong>Confirme sua resposta para ver a resolução e o comentário de todas as alternativas.</p></div><div><span><Bookmark size={19} /></span><p><strong>Guarde para revisar</strong>Salve questões importantes e acompanhe seus erros no menu lateral.</p></div></div><button className="button button-primary full-width" onClick={onClose}>Entendi, vamos estudar <ArrowRight size={17} /></button><small className="keyboard-tip">Atalho: pressione <kbd>/</kbd> para buscar no acervo.</small></div></div>
  );
}

export default function App() {
  const [view, setView] = useState('bank');
  const [solverOrigin, setSolverOrigin] = useState('bank');
  const [sessionTitle, setSessionTitle] = useState('');
  const [selectedId, setSelectedId] = useState(questions[0].id);
  const [queue, setQueue] = useState(questions.map((q) => q.id));
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [sort, setSort] = useState('recent');
  const [answers, setAnswers] = useStoredState('acervo-answers', {});
  const [saved, setSaved] = useStoredState('acervo-saved', []);
  const [eliminated, setEliminated] = useStoredState('acervo-eliminated', {});
  const [listConfig, setListConfig] = useStoredState('acervo:list-builder', DEFAULT_LIST_CONFIG);
  const [practiceSession, setPracticeSession] = useStoredState('acervo:list-practice', null);
  const [listHistory, setListHistory] = useStoredState('acervo:list-history', []);
  const [mobileNav, setMobileNav] = useState(false);
  const [mobileFilters, setMobileFilters] = useState(false);
  const [simuladoOpen, setSimuladoOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [toast, setToast] = useState('');
  const searchRef = useRef(null);

  const notify = (message) => setToast(message);
  useEffect(() => {
    const validIds = new Set(questions.map((question) => question.id));
    const gradableIds = new Set(questions.filter((question) => !question.annulled).map((question) => question.id));
    const prune = (current) => {
      const next = Object.fromEntries(Object.entries(current).filter(([id]) => validIds.has(id)));
      return Object.keys(next).length === Object.keys(current).length ? current : next;
    };
    setAnswers((current) => Object.fromEntries(Object.entries(prune(current)).filter(([id]) => gradableIds.has(id))));
    setEliminated(prune);
    setSaved((current) => current.filter((id) => validIds.has(id)));
  }, []);
  useEffect(() => { if (!toast) return; const timer = setTimeout(() => setToast(''), 3200); return () => clearTimeout(timer); }, [toast]);
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) { event.preventDefault(); searchRef.current?.focus(); }
      if (event.key === 'Escape') { setSimuladoOpen(false); setHelpOpen(false); setMobileNav(false); setMobileFilters(false); }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const filtered = useMemo(() => {
    const term = normalize(filters.search.trim());
    const result = questions.filter((question) => {
      const answer = answers[question.id];
      if (view === 'saved' && !saved.includes(question.id)) return false;
      if (view === 'errors' && (!answer || answer.open || answer.correct)) return false;
      if (filters.exam !== 'Todas' && question.exam !== filters.exam) return false;
      if (filters.type === 'Objetivas' && isOpenQuestion(question)) return false;
      if (filters.type === 'Discursivas' && question.kind !== 'discursive') return false;
      if (filters.subject !== 'Todas' && question.subject !== filters.subject) return false;
      if (filters.content !== 'Todos' && question.content !== filters.content) return false;
      if (filters.subtopic !== 'Todos' && question.subtopic !== filters.subtopic) return false;
      if (filters.year !== 'Todos' && String(question.year) !== String(filters.year)) return false;
      if (filters.difficulty !== 'Todas' && question.difficulty !== filters.difficulty) return false;
      if (filters.status === 'Não resolvidas' && answer) return false;
      if (filters.status === 'Corretas' && !answer?.correct) return false;
      if (filters.status === 'Incorretas' && (!answer || answer.open || answer.correct)) return false;
      if (term && !normalize(`${question.number} ${question.statement} ${question.statementAfter || ''} ${question.statementTail || ''} ${question.exam} ${question.subject} ${question.content} ${question.subtopic} ${question.detail} ${question.year}`).includes(term)) return false;
      return true;
    });
    return result.sort((a, b) => sort === 'oldest' ? a.year - b.year : sort === 'subject' ? a.subject.localeCompare(b.subject) : b.year - a.year);
  }, [filters, answers, saved, view, sort]);

  const selectedQuestion = questions.find((question) => question.id === selectedId) || questions[0];
  const activeView = view === 'solver' ? solverOrigin : view === 'practice' ? 'lists' : view;

  const navigate = (nextView) => {
    setView(nextView); setMobileNav(false); setSessionTitle('');
    if (['bank', 'saved', 'errors'].includes(nextView)) setFilters(DEFAULT_FILTERS);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const openQuestion = (question, list = filtered) => {
    setSelectedId(question.id); setQueue(list.map((item) => item.id)); setSolverOrigin(view === 'solver' ? solverOrigin : view); setSessionTitle(''); setView('solver'); setMobileNav(false);
  };
  const toggleSaved = (id) => {
    const isSaved = saved.includes(id);
    setSaved((current) => isSaved ? current.filter((item) => item !== id) : [...current, id]);
    notify(isSaved ? 'Questão removida das salvas.' : 'Questão salva no seu caderno.');
  };
  const recordAnswer = (question, selected) => {
    setAnswers((current) => ({ ...current, [question.id]: { selected, correct: selected === question.correct, date: new Date().toISOString() } }));
  };
  const recordOpenAnswer = (question, value) => {
    setAnswers((current) => ({ ...current, [question.id]: { ...value, open: true, date: new Date().toISOString() } }));
  };
  const navigateQuestion = (direction) => {
    const index = queue.indexOf(selectedId);
    const next = queue[index + direction];
    if (next) setSelectedId(next);
  };
  const startSimulado = ({ exam, subject, count, random }) => {
    let pool = questions.filter((q) => (exam === 'Todas' || q.exam === exam) && (subject === 'Todas' || q.subject === subject));
    if (random) pool = [...pool].sort(() => Math.random() - 0.5);
    const chosen = pool.slice(0, Math.min(count, pool.length));
    if (!chosen.length) { notify('Nenhuma questão encontrada para este simulado.'); return; }
    setQueue(chosen.map((q) => q.id)); setSelectedId(chosen[0].id); setSolverOrigin('simulados'); setSessionTitle('Simulado'); setView('solver'); setSimuladoOpen(false); notify(`Simulado iniciado com ${chosen.length} ${chosen.length === 1 ? 'questão' : 'questões'}. Boa prova!`);
  };
  const startPracticeList = (listQuestions, title) => {
    const questionIds = listQuestions.map((question) => question.id);
    setPracticeSession((current) => {
      const sameList = current && current.questionIds?.length === questionIds.length && current.questionIds.every((id, index) => id === questionIds[index]);
      if (sameList) return { ...current, title: title.trim() || 'Lista de exercícios' };
      return {
        id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
        title: title.trim() || 'Lista de exercícios', questionIds, answers: {}, openAnswers: {}, selfScores: {}, currentIndex: 0,
        result: null, correctedAt: null, startedAt: new Date().toISOString(),
      };
    });
    setView('practice'); setMobileNav(false); setSessionTitle('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleSearch = (value) => {
    setFilters((current) => ({ ...current, search: value }));
    if (!['bank', 'saved', 'errors'].includes(view)) { setView('bank'); setSessionTitle(''); }
  };

  return (
    <div className="app-shell">
      <Sidebar view={activeView} onNavigate={navigate} answers={answers} saved={saved} mobileOpen={mobileNav} onClose={() => setMobileNav(false)} />
      <div className="app-content">
        <Topbar search={filters.search} onSearch={handleSearch} onMenu={() => setMobileNav(true)} onHelp={() => setHelpOpen(true)} searchRef={searchRef} listMode={activeView === 'lists'} />
        {['bank', 'saved', 'errors'].includes(view) && <BankView view={view} filters={filters} setFilters={setFilters} sort={sort} setSort={setSort} filtered={filtered} answers={answers} saved={saved} onToggleSaved={toggleSaved} onOpen={openQuestion} onClear={() => setFilters(DEFAULT_FILTERS)} onSimulado={() => setSimuladoOpen(true)} onNavigate={navigate} mobileFilters={mobileFilters} setMobileFilters={setMobileFilters} />}
        {view === 'solver' && (isOpenQuestion(selectedQuestion) ? <OpenSolverView key={selectedQuestion.id} question={selectedQuestion} queue={queue} answers={answers} saved={saved} onToggleSaved={() => toggleSaved(selectedQuestion.id)} onAnswerOpen={recordOpenAnswer} onBack={() => { setView(solverOrigin); setSessionTitle(''); }} onNavigateQuestion={navigateQuestion} notify={notify} sessionTitle={sessionTitle} /> : <SolverView key={selectedQuestion.id} question={selectedQuestion} queue={queue} answers={answers} saved={saved} eliminated={eliminated} setEliminated={setEliminated} onToggleSaved={() => toggleSaved(selectedQuestion.id)} onAnswer={recordAnswer} onBack={() => { setView(solverOrigin); setSessionTitle(''); }} onNavigateQuestion={navigateQuestion} notify={notify} sessionTitle={sessionTitle} />)}
        {view === 'simulados' && <SimuladosView onCreate={() => setSimuladoOpen(true)} onQuickStart={startSimulado} />}
        {view === 'lists' && <div className="page list-page"><ListBuilder questions={questions} list={listConfig} setList={setListConfig} onPractice={startPracticeList} notify={notify} /></div>}
        {view === 'practice' && <div className="page practice-page"><PracticeList session={practiceSession} setSession={setPracticeSession} questions={questions} history={listHistory} setHistory={setListHistory} onBack={() => navigate('lists')} notify={notify} /></div>}
        {view === 'performance' && <PerformanceView answers={answers} onOpen={openQuestion} onNavigate={navigate} />}
      </div>
      {simuladoOpen && <SimuladoModal onClose={() => setSimuladoOpen(false)} onStart={startSimulado} />}
      {helpOpen && <HelpModal onClose={() => setHelpOpen(false)} />}
      {toast && <div className="toast" role="status"><span><Check size={15} /></span>{toast}<button onClick={() => setToast('')}><X size={15} /></button></div>}
    </div>
  );
}
