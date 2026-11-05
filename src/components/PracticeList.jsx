import React, { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, BarChart3, Check, CheckCircle2, ChevronLeft, ChevronRight, CircleHelp, Clock3, FileText, History, ListChecks, PenLine, RotateCcw, Target, X, XCircle } from 'lucide-react';
import MathText from './MathText.jsx';
import QuestionContent, { AlternativeBody } from './QuestionContent.jsx';
import { isOpenQuestion, isDiscursiveQuestion, isEditorialCorrection, OpenResponseEditor, OpenResponseReview, openAssessment, responseStatus } from './OpenResponse.jsx';
import { SUBJECT_COLORS } from '../data/questions.js';

const letter = (index) => String.fromCharCode(65 + index);
const normalize = (value) => value?.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const hasObjectiveAnswer = (answers, id) => answers[id] !== undefined && answers[id] !== null;

function calculateResult(listQuestions, answers, openAnswers = {}, selfScores = {}) {
  const valid = listQuestions.filter((question) => !question.annulled && !isOpenQuestion(question));
  const openQuestions = listQuestions.filter(isDiscursiveQuestion);
  const group = (key) => valid.reduce((accumulator, question) => {
    const name = question[key];
    if (!accumulator[name]) accumulator[name] = { total: 0, correct: 0, answered: 0 };
    accumulator[name].total += 1;
    const answer = answers[question.id];
    if (hasObjectiveAnswer(answers, question.id)) {
      accumulator[name].answered += 1;
      if (answer === question.correct) accumulator[name].correct += 1;
    }
    return accumulator;
  }, {});
  const correct = valid.filter((question) => answers[question.id] === question.correct).length;
  const answered = valid.filter((question) => hasObjectiveAnswer(answers, question.id)).length;
  const open = openQuestions.reduce((summary, question) => {
    const assessment = openAssessment(question, selfScores[question.id] || {});
    summary.score += assessment.score;
    summary.maxScore += assessment.maxScore;
    summary.assessed += assessment.assessed;
    summary.totalItems += assessment.totalItems;
    if (responseStatus(question, openAnswers[question.id] || {}) !== 'blank') summary.answered += 1;
    return summary;
  }, { score: 0, maxScore: 0, assessed: 0, totalItems: 0, answered: 0, totalQuestions: openQuestions.length });
  return {
    total: valid.length, annulled: listQuestions.filter((question) => question.annulled).length, correct, answered,
    blank: valid.length - answered, wrong: answered - correct,
    percent: valid.length ? Math.round((correct / valid.length) * 100) : 0,
    bySubject: group('subject'), byDifficulty: group('difficulty'), open,
  };
}

function questionAnswerState(question, session) {
  if (isOpenQuestion(question)) return responseStatus(question, session.openAnswers?.[question.id] || {});
  return hasObjectiveAnswer(session.answers, question.id) ? 'answered' : 'blank';
}

function Resolution({ question, selected }) {
  const alternatives = question.alternatives || [];
  return <section className="resolution-card practice-resolution">
    <div className="resolution-header"><span className="resolution-icon"><FileText size={21} /></span><div><span className="eyebrow">ENTENDA O RACIOCÍNIO</span><h2>Resolução comentada</h2></div><span className={`answer-key ${question.annulled ? 'annulled-key' : ''}`}>{question.annulled ? 'Anulada · pelo enunciado:' : 'Gabarito:'} <strong>{letter(question.correct)}</strong></span></div>
    <div className="resolution-steps">{(question.resolution || []).map((step, index) => <div className="resolution-step" key={index}><span>{index + 1}</span><p><MathText text={step} /></p></div>)}</div>
    <div className="analysis-section"><div className="analysis-title"><h3>Análise de cada alternativa</h3><span>{alternatives.length} comentários</span></div><div className="analysis-list">{alternatives.map((alternative, index) => <div key={index} className={`analysis-item ${index === question.correct ? 'analysis-correct' : ''} ${!question.annulled && selected === index && index !== question.correct ? 'analysis-wrong' : ''}`}><div className="analysis-item-head"><span className="analysis-letter">{letter(index)}</span><strong><MathText text={question.shortAlternatives?.[index] || alternative} /></strong>{index === question.correct && <span className="analysis-tag correct-tag"><Check size={12} /> {question.annulled ? 'Pelo enunciado' : 'Correta'}</span>}{!question.annulled && selected === index && index !== question.correct && <span className="analysis-tag wrong-tag">Sua resposta</span>}</div><p><MathText text={question.analyses[index]} /></p></div>)}</div></div>
  </section>;
}

function PerformanceGroup({ title, data }) {
  const entries = Object.entries(data || {});
  if (!entries.length) return null;
  return <section className="practice-stats-group"><div className="stats-group-heading"><h3>{title}</h3><span>acertos / válidas</span></div>{entries.map(([name, values]) => {
    const percent = values.total ? Math.round((values.correct / values.total) * 100) : 0;
    return <div className="practice-stat-row" key={name}><div><strong>{name}</strong><span>{values.correct} de {values.total} · {values.answered} respondidas</span></div><div className="practice-stat-bar"><i style={{ width: `${percent}%`, background: SUBJECT_COLORS[name] || '#7357c7' }} /></div><strong>{percent}%</strong></div>;
  })}</section>;
}

export default function PracticeList({ session, setSession, questions, history, setHistory, onBack, notify }) {
  const [tab, setTab] = useState('practice');
  const [confirmCorrection, setConfirmCorrection] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);
  const listQuestions = useMemo(() => (session?.questionIds || []).map((id) => questions.find((question) => question.id === id)).filter(Boolean), [session?.questionIds, questions]);
  if (!session || !listQuestions.length) return <section className="practice-empty"><ListChecks size={42} /><h1>Nenhuma lista em resolução</h1><p>Monte uma lista e escolha “Responder lista”.</p><button className="button button-primary" onClick={onBack}>Voltar ao construtor</button></section>;

  const corrected = Boolean(session.correctedAt);
  const answers = session.answers || {};
  const openAnswers = session.openAnswers || {};
  const selfScores = session.selfScores || {};
  const result = calculateResult(listQuestions, answers, openAnswers, selfScores);
  const currentIndex = Math.min(session.currentIndex || 0, listQuestions.length - 1);
  const question = listQuestions[currentIndex];
  const openQuestion = isOpenQuestion(question);
  const editorial = isEditorialCorrection(question);
  const hasEditorialOpen = listQuestions.some((item) => isDiscursiveQuestion(item) && isEditorialCorrection(item));
  const hasOfficialOpen = listQuestions.some((item) => isDiscursiveQuestion(item) && !isEditorialCorrection(item));
  const selected = openQuestion ? null : answers[question.id];
  const answeredCount = listQuestions.filter((item) => !item.annulled && questionAnswerState(item, session) === 'answered').length;
  const partialCount = listQuestions.filter((item) => questionAnswerState(item, session) === 'partial').length;
  const gradableCount = listQuestions.filter((item) => !item.annulled).length;
  const currentAssessment = isDiscursiveQuestion(question) ? openAssessment(question, selfScores[question.id] || {}) : null;
  const update = (value) => setSession((current) => ({ ...current, ...value }));
  const go = (index) => update({ currentIndex: Math.max(0, Math.min(index, listQuestions.length - 1)) });
  const choose = (index) => {
    if (corrected || openQuestion) return;
    setSession((current) => ({ ...current, answers: { ...(current.answers || {}), [question.id]: index } }));
  };
  const changeOpenAnswer = (partId, text) => {
    if (corrected) return;
    setSession((current) => ({ ...current, openAnswers: { ...(current.openAnswers || {}), [question.id]: { ...(current.openAnswers?.[question.id] || {}), [partId]: text } } }));
  };
  const changeSelfScore = (partId, score) => {
    const nextScores = { ...selfScores, [question.id]: { ...(selfScores[question.id] || {}), [partId]: score } };
    const next = { ...session, selfScores: nextScores };
    next.result = calculateResult(listQuestions, next.answers || {}, next.openAnswers || {}, next.selfScores || {});
    setSession(next);
    setHistory((current) => [next, ...current.filter((item) => item.id !== session.id)].slice(0, 30));
  };
  const correctList = () => {
    const completedAt = new Date().toISOString();
    const nextResult = calculateResult(listQuestions, answers, openAnswers, selfScores);
    const record = { ...session, answers, openAnswers, selfScores, result: nextResult, correctedAt: completedAt, currentIndex };
    setSession(record);
    setHistory((current) => [record, ...current.filter((item) => item.id !== session.id)].slice(0, 30));
    setConfirmCorrection(false); setTab('stats');
    notify(nextResult.total ? `Objetivas corrigidas: ${nextResult.correct} de ${nextResult.total} acertos.${nextResult.open.totalItems ? ' Faça a autoavaliação das discursivas.' : ''}` : 'Respostas liberadas para comparação e autoavaliação.');
  };
  const resetList = () => {
    setSession((current) => ({ ...current, id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`, answers: {}, openAnswers: {}, selfScores: {}, result: null, correctedAt: null, startedAt: new Date().toISOString(), currentIndex: 0 }));
    setConfirmReset(false); setTab('practice');
  };
  const openHistory = (record) => { setSession({ ...record, currentIndex: 0 }); setTab('stats'); };
  const dateFormat = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' });
  const openPercent = result.open.maxScore ? Math.round((result.open.score / result.open.maxScore) * 100) : 0;
  const objectiveOnly = result.open.totalItems === 0;

  return <section className="practice-shell">
    <div className="practice-topbar">
      <button className="back-button" onClick={onBack}><ArrowLeft size={18} /> Voltar ao construtor</button>
      <div><span className="eyebrow">MODO ESTUDANTE</span><h1>{session.title}</h1></div>
      <div className="practice-top-actions">{corrected && <button className="button button-quiet" onClick={() => setConfirmReset(true)}><RotateCcw size={16} /> Refazer lista</button>}<button className="button button-primary" disabled={corrected} onClick={() => setConfirmCorrection(true)}><CheckCircle2 size={17} /> {corrected ? 'Lista corrigida' : 'Corrigir lista'}</button></div>
    </div>
    <div className="practice-tabs" role="tablist">
      <button className={tab === 'practice' ? 'active' : ''} onClick={() => setTab('practice')}><ListChecks size={17} /> {corrected ? 'Revisar respostas' : 'Responder'}<span>{answeredCount}/{gradableCount}</span></button>
      <button className={tab === 'stats' ? 'active' : ''} disabled={!corrected} onClick={() => setTab('stats')}><BarChart3 size={17} /> Estatísticas{corrected && <span>{result.total ? result.percent : openPercent}%</span>}</button>
      <button className={tab === 'history' ? 'active' : ''} onClick={() => setTab('history')}><History size={17} /> Histórico<span>{history.length}</span></button>
    </div>

    {tab === 'practice' && <div className="practice-layout">
      <main className="practice-main">
        {corrected && (openQuestion ? <div className="practice-result-banner open">
          <FileText size={23} /><div><strong>{question.kind === 'essay' ? 'Compare sua produção com a proposta.' : editorial ? 'Proposta de correção do acervo liberada para autoavaliação.' : 'Resposta oficial liberada para autoavaliação.'}</strong><p>{question.kind === 'essay' ? 'A redação permanece separada e não recebe nota automática.' : `Confira os critérios e atribua a nota de cada item. ${currentAssessment?.complete ? `Sua nota nesta questão: ${currentAssessment.score}/${currentAssessment.maxScore}.` : 'A autoavaliação ainda está pendente.'}`}</p></div>
        </div> : <div className={`practice-result-banner ${selected === question.correct && !question.annulled ? 'correct' : question.annulled ? 'annulled' : 'wrong'}`}>
          {question.annulled ? <CircleHelp size={23} /> : selected === question.correct ? <CheckCircle2 size={23} /> : <XCircle size={23} />}
          <div><strong>{question.annulled ? 'Questão anulada — não entra na nota.' : selected === undefined || selected === null ? 'Questão em branco.' : selected === question.correct ? 'Você acertou esta questão.' : `Resposta incorreta. O gabarito é ${letter(question.correct)}.`}</strong><p>Revise a resolução comentada abaixo e use as estatísticas para orientar o próximo estudo.</p></div>
        </div>)}
        <section className="practice-question-card">
          <div className="practice-question-meta"><div><span className="practice-question-number">QUESTÃO {String(currentIndex + 1).padStart(2, '0')}</span><span>{question.exam} {question.year} · {question.number} · {question.phase}</span></div><div><span className="subject-tag" style={{ '--subject-color': SUBJECT_COLORS[question.subject] }}><i />{question.subject}</span><span className={`difficulty difficulty-${normalize(question.difficulty)}`}>{question.difficulty}</span></div></div>
          <div className="practice-content-tag">{question.content} · {question.subtopic}{openQuestion && <span className="question-kind-badge">{question.kind === 'essay' ? 'Redação' : 'Discursiva'}</span>}</div>
          {question.annulled && corrected && <div className="annulment-notice"><CircleHelp size={20} /><div><strong>Questão anulada</strong><p>{question.annulmentReason}</p></div></div>}
          <QuestionContent question={question} className="practice-question-content" eager />
          {openQuestion ? (!corrected && <OpenResponseEditor question={question} value={openAnswers[question.id] || {}} onChange={changeOpenAnswer} />) : <>
            <div className="practice-alternatives-heading"><strong>{corrected ? 'Gabarito e sua resposta' : 'Escolha uma alternativa'}</strong>{!corrected && <span>{selected !== undefined && selected !== null ? `Alternativa ${letter(selected)} selecionada` : 'Nenhuma resposta selecionada'}</span>}</div>
            <div className="alternatives-list practice-alternatives" role="radiogroup" aria-label={`Alternativas da questão ${currentIndex + 1}`}>
              {(question.alternatives || []).map((alternative, index) => {
                const isCorrect = corrected && index === question.correct;
                const isWrong = corrected && !question.annulled && selected === index && index !== question.correct;
                return <div key={index} className={`alternative ${selected === index ? 'selected' : ''} ${isCorrect ? 'correct' : ''} ${isWrong ? 'wrong' : ''} ${corrected ? 'locked' : ''}`} onClick={() => choose(index)} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') choose(index); }} role="radio" aria-checked={selected === index} tabIndex={corrected ? -1 : 0}>
                  <span className="alternative-letter">{letter(index)}</span><span className="alternative-text"><AlternativeBody question={question} alternative={alternative} index={index} eager /></span>
                  {isCorrect && <span className="answer-state-icon"><CheckCircle2 size={20} /></span>}{isWrong && <span className="answer-state-icon"><XCircle size={20} /></span>}
                </div>;
              })}
            </div>
          </>}
          <div className="practice-question-nav"><button disabled={currentIndex === 0} onClick={() => go(currentIndex - 1)}><ChevronLeft size={18} /> Anterior</button><span>{currentIndex + 1} de {listQuestions.length}</span><button disabled={currentIndex === listQuestions.length - 1} onClick={() => go(currentIndex + 1)}>Próxima <ChevronRight size={18} /></button></div>
        </section>
        {corrected && (openQuestion ? <OpenResponseReview question={question} responses={openAnswers[question.id] || {}} scores={selfScores[question.id] || {}} onScoreChange={changeSelfScore} /> : <Resolution question={question} selected={selected} />)}
      </main>
      <aside className="practice-sidebar">
        <div className="practice-progress-card"><div><span>{corrected ? (result.total ? 'Resultado objetivo' : 'Autoavaliação') : 'Progresso'}</span><strong>{corrected ? `${result.total ? result.percent : openPercent}%` : `${answeredCount}/${gradableCount}`}</strong></div><div className="practice-progress-track"><i style={{ width: `${corrected ? (result.total ? result.percent : openPercent) : gradableCount ? (answeredCount / gradableCount) * 100 : 0}%` }} /></div><p>{corrected ? (result.total ? `${result.correct} acertos · ${result.wrong} erros · ${result.blank} em branco` : `${result.open.assessed}/${result.open.totalItems} itens autoavaliados`) : `${gradableCount - answeredCount} ${gradableCount - answeredCount === 1 ? 'questão sem resposta completa' : 'questões sem resposta completa'}${partialCount ? ` · ${partialCount} parcial` : ''}`}</p></div>
        <div className="practice-navigator"><div className="practice-navigator-head"><strong>Questões</strong><span>{corrected ? 'Resultado' : 'Respondidas'}</span></div><div className="practice-number-grid">{listQuestions.map((item, index) => {
          const answer = answers[item.id]; const answerState = questionAnswerState(item, session); const answered = answerState === 'answered';
          const status = corrected ? isOpenQuestion(item) ? 'open' : item.annulled ? 'annulled' : answer === item.correct ? 'correct' : hasObjectiveAnswer(answers, item.id) ? 'wrong' : 'blank' : answerState === 'partial' ? 'partial' : answered ? 'answered' : '';
          return <button key={item.id} className={`${index === currentIndex ? 'current' : ''} ${status}`} onClick={() => go(index)} aria-label={`Questão ${index + 1}${answered ? ', respondida' : answerState === 'partial' ? ', parcialmente respondida' : ', em branco'}`}>{index + 1}{corrected && (isOpenQuestion(item) ? <FileText size={10} /> : !item.annulled && (answer === item.correct ? <Check size={11} /> : hasObjectiveAnswer(answers, item.id) ? <X size={11} /> : <span>—</span>))}</button>;
        })}</div>{!corrected && <div className="practice-navigator-legend"><span><i className="answered" />Respondida</span><span><i />Em branco</span></div>}</div>
        {!corrected ? <button className="button button-primary practice-correct-button" onClick={() => setConfirmCorrection(true)}><CheckCircle2 size={18} /> Corrigir lista</button> : <button className="button button-secondary practice-correct-button" onClick={() => setTab('stats')}><BarChart3 size={18} /> Ver estatísticas</button>}
        <p className="practice-save-note"><Clock3 size={14} /> Suas respostas ficam salvas neste navegador.</p>
      </aside>
    </div>}

    {tab === 'stats' && corrected && <div className="practice-stats-view">
      {result.total > 0 ? <div className="score-hero"><div className="score-ring" style={{ '--score': `${result.percent * 3.6}deg` }}><span><strong>{result.percent}%</strong><small>de aproveitamento</small></span></div><div><span className="eyebrow">RESULTADO DAS OBJETIVAS</span><h2>{result.correct} {result.correct === 1 ? 'acerto' : 'acertos'} em {result.total} {result.total === 1 ? 'questão válida' : 'questões válidas'}</h2><p>Corrigida em {dateFormat.format(new Date(session.correctedAt))}{result.annulled ? ` · ${result.annulled} anulada fora da nota` : ''}.</p><button className="button button-secondary" onClick={() => setTab('practice')}>Revisar respostas e resoluções <ArrowRight size={16} /></button></div></div> : <div className="score-hero open-score-hero"><div className="score-ring" style={{ '--score': `${openPercent * 3.6}deg` }}><span><strong>{result.open.score}/{result.open.maxScore}</strong><small>pontos autoavaliados</small></span></div><div><span className="eyebrow">AUTOAVALIAÇÃO DAS DISCURSIVAS</span><h2>{result.open.assessed} de {result.open.totalItems} itens avaliados</h2><p>A pontuação é registrada por você, com base nas respostas e nos {hasEditorialOpen ? (hasOfficialOpen ? 'critérios de autoavaliação' : 'critérios de estudo') : 'critérios oficiais'}.</p><button className="button button-secondary" onClick={() => setTab('practice')}>Comparar respostas e critérios <ArrowRight size={16} /></button></div></div>}
      {result.total > 0 && <div className="result-metric-grid"><div className="metric-correct"><CheckCircle2 /><span><strong>{result.correct}</strong>{result.correct === 1 ? 'Acerto' : 'Acertos'}</span></div><div className="metric-wrong"><XCircle /><span><strong>{result.wrong}</strong>Erros</span></div><div className="metric-blank"><CircleHelp /><span><strong>{result.blank}</strong>Em branco</span></div><div><Target /><span><strong>{result.answered}</strong>Respondidas</span></div></div>}
      {result.open.totalItems > 0 && <section className="open-stats-card"><div className="open-stats-icon"><PenLine size={23} /></div><div><span className="eyebrow">DISCURSIVAS · AUTOAVALIAÇÃO</span><h3>{result.open.score} de {result.open.maxScore} pontos</h3><p>{result.open.assessed} de {result.open.totalItems} itens avaliados · {result.open.answered} de {result.open.totalQuestions} questões com resposta iniciada.</p></div><button className="button button-secondary" onClick={() => { const index = listQuestions.findIndex(isDiscursiveQuestion); if (index >= 0) go(index); setTab('practice'); }}>Revisar autoavaliação <ArrowRight size={15} /></button></section>}
      {(result.bySubject && Object.keys(result.bySubject).length > 0) && <div className="practice-stats-columns"><PerformanceGroup title="Desempenho por disciplina" data={result.bySubject} /><PerformanceGroup title="Desempenho por dificuldade" data={result.byDifficulty} /></div>}
      <section className="stats-answer-map"><div className="stats-group-heading"><h3>Mapa de respostas</h3><span>Clique para revisar</span></div><div>{listQuestions.map((item, index) => {
        const answer = answers[item.id];
        if (isOpenQuestion(item)) { const assessment = openAssessment(item, selfScores[item.id] || {}); return <button key={item.id} className="open" onClick={() => { go(index); setTab('practice'); }}><span>{index + 1}</span><strong>{item.kind === 'essay' ? 'Redação · sem nota automática' : assessment.totalItems ? assessment.assessed === assessment.totalItems ? `Autoavaliação · ${assessment.score}/${assessment.maxScore} pontos` : 'Autoavaliação pendente' : 'Resposta discursiva'}</strong></button>; }
        const status = item.annulled ? 'annulled' : answer === item.correct ? 'correct' : hasObjectiveAnswer(answers, item.id) ? 'wrong' : 'blank';
        return <button key={item.id} className={status} onClick={() => { go(index); setTab('practice'); }}><span>{index + 1}</span><strong>{item.annulled ? 'Anulada' : !hasObjectiveAnswer(answers, item.id) ? 'Em branco' : `${letter(answer)} · ${answer === item.correct ? 'correta' : `gabarito ${letter(item.correct)}`}`}</strong></button>;
      })}</div></section>
    </div>}

    {tab === 'history' && <div className="practice-history-view"><div className="history-heading"><div><History size={23} /><span><h2>Histórico de listas</h2><p>As últimas 30 correções ficam salvas neste navegador.</p></span></div>{history.length > 0 && <button className="text-button danger-text" onClick={() => { if (window.confirm('Apagar todo o histórico de listas?')) setHistory([]); }}>Limpar histórico</button>}</div>{history.length ? <div className="history-list">{history.map((record) => <button key={record.id} onClick={() => openHistory(record)}><span className="history-score">{record.result.total ? `${record.result.percent}%` : `${record.result.open?.score || 0}/${record.result.open?.maxScore || 0}`}</span><span><strong>{record.title}</strong><small>{dateFormat.format(new Date(record.correctedAt))} · {record.questionIds.length} questões</small></span><span><strong>{record.result.total ? `${record.result.correct}/${record.result.total}` : `${record.result.open?.assessed || 0}/${record.result.open?.totalItems || 0}`}</strong><small>{record.result.total ? 'acertos' : 'itens avaliados'}</small></span><ChevronRight size={18} /></button>)}</div> : <div className="history-empty"><History size={35} /><h3>Nenhuma lista corrigida ainda</h3><p>Seus resultados aparecerão aqui após a primeira correção.</p></div>}</div>}

    {confirmCorrection && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setConfirmCorrection(false); }}><div className="confirm-modal" role="dialog" aria-modal="true" aria-labelledby="correct-list-title"><span className="confirm-modal-icon"><CheckCircle2 size={27} /></span><h2 id="correct-list-title">Corrigir a lista agora?</h2><p>Você concluiu <strong>{answeredCount} de {gradableCount}</strong> questões. {gradableCount - answeredCount > 0 ? `${gradableCount - answeredCount} ficarão sem resposta completa.` : objectiveOnly ? 'Todas têm uma alternativa selecionada.' : 'Todas as questões têm resposta.'}</p><div className="confirm-modal-note">Depois da correção, {hasEditorialOpen ? (hasOfficialOpen ? 'os gabaritos e as respostas esperadas' : 'os gabaritos e as propostas de correção do acervo') : 'os gabaritos e as respostas oficiais'} serão liberados. Nas discursivas, você poderá registrar a autoavaliação por item.</div><div><button className="button button-secondary" onClick={() => setConfirmCorrection(false)}>Continuar respondendo</button><button className="button button-primary" onClick={correctList}>Corrigir e ver resultado</button></div></div></div>}
    {confirmReset && <div className="modal-backdrop"><div className="confirm-modal" role="dialog" aria-modal="true"><span className="confirm-modal-icon"><RotateCcw size={27} /></span><h2>Refazer esta lista?</h2><p>As respostas atuais serão apagadas. O resultado já corrigido continuará no histórico.</p><div><button className="button button-secondary" onClick={() => setConfirmReset(false)}>Cancelar</button><button className="button button-primary" onClick={resetList}>Apagar respostas e refazer</button></div></div></div>}
  </section>;
}
