import React from 'react';
import { Check, ExternalLink, FileText, PenLine } from 'lucide-react';
import MathText from './MathText.jsx';

export const isOpenQuestion = (question) => question?.kind === 'discursive' || question?.kind === 'essay';
export const isDiscursiveQuestion = (question) => question?.kind === 'discursive';
export const isEditorialCorrection = (question) => question?.correctionOrigin === 'editorial';

export function responseStatus(question, responses = {}) {
  if (!isOpenQuestion(question)) return 'blank';
  const parts = question.parts || [];
  const completed = parts.filter((part) => String(responses[part.id] || '').trim()).length;
  if (!completed) return 'blank';
  return completed === parts.length ? 'answered' : 'partial';
}

export function openAssessment(question, scores = {}) {
  const parts = (question?.parts || []).filter((part) => Number.isFinite(part.maxScore));
  const assessed = parts.filter((part) => Number.isFinite(scores[part.id])).length;
  const score = parts.reduce((total, part) => total + (Number.isFinite(scores[part.id]) ? scores[part.id] : 0), 0);
  const maxScore = parts.reduce((total, part) => total + part.maxScore, 0);
  return { score, maxScore, assessed, totalItems: parts.length, complete: parts.length > 0 && assessed === parts.length };
}

export function OpenResponseEditor({ question, value = {}, onChange, disabled = false }) {
  const essay = question.kind === 'essay';
  const editorial = isEditorialCorrection(question);
  return <div className="open-response-editor">
    <div className="open-response-heading">
      <div><PenLine size={18} /><strong>{essay ? 'Escreva sua redação' : 'Escreva suas respostas'}</strong></div>
      <span>{disabled ? 'Respostas bloqueadas após a correção' : 'Seu texto é salvo automaticamente'}</span>
    </div>
    {(question.parts || []).map((part) => <label className="open-response-item" key={part.id}>
      <span className="open-response-item-label">
        <strong>{essay ? 'Texto definitivo' : `Item ${part.id})`}</strong>
        {Number.isFinite(part.maxScore) && <small>{editorial ? `até ${part.maxScore} ${part.maxScore === 1 ? 'ponto' : 'pontos'} de estudo` : `vale até ${part.maxScore} ${part.maxScore === 1 ? 'ponto' : 'pontos'}`}</small>}
      </span>
      <textarea
        value={value[part.id] || ''}
        onChange={(event) => onChange(part.id, event.target.value)}
        disabled={disabled}
        rows={essay ? 18 : 5}
        maxLength={essay ? 12000 : 4000}
        placeholder={essay ? 'Escreva aqui sua redação…' : `Apresente a resolução e a resposta do item ${part.id})…`}
        aria-label={essay ? 'Sua redação' : `Sua resposta do item ${part.id}`}
      />
      <small className="open-response-count">{String(value[part.id] || '').length} caracteres</small>
    </label>)}
  </div>;
}

export function OpenResponseReview({ question, responses = {}, scores = {}, onScoreChange }) {
  const assessment = openAssessment(question, scores);
  const editorial = isEditorialCorrection(question);
  return <section className="resolution-card open-response-review">
    <div className="resolution-header">
      <span className="resolution-icon"><FileText size={21} /></span>
      <div><span className="eyebrow">{editorial ? 'PROPOSTA DE CORREÇÃO DO ACERVO · NÃO OFICIAL' : 'RESPOSTA OFICIAL ESPERADA'}</span><h2>Compare e faça sua autoavaliação</h2></div>
      {assessment.totalItems > 0 && <span className="answer-key open-score-key">{editorial ? 'Sua pontuação de estudo:' : 'Sua nota:'} <strong>{assessment.score}/{assessment.maxScore}</strong></span>}
    </div>
    <p className="open-review-instruction">{editorial ? 'Leia sua resposta, confira a proposta de correção e os critérios de estudo e registre a pontuação de cada item. A rubrica é editorial, não oficial, e a plataforma não atribui essa nota automaticamente.' : 'Leia sua resposta, confira os critérios oficiais e registre a pontuação de cada item. A plataforma não atribui essa nota automaticamente.'}</p>
    <div className="open-review-parts">
      {(question.parts || []).map((part) => {
        const selectedScore = scores[part.id];
        return <article className="open-review-part" key={part.id}>
          <div className="open-review-part-heading"><strong>Item {part.id})</strong>{Number.isFinite(part.maxScore) && <span>até {part.maxScore} pontos{editorial ? ' de estudo' : ''}</span>}</div>
          <div className="open-student-response"><span>Sua resposta</span><p>{String(responses[part.id] || '').trim() || 'Você não respondeu a este item.'}</p></div>
          <div className="open-expected-response"><span>{editorial ? 'Resposta direta proposta pelo acervo' : 'Resposta esperada'}</span><p><MathText text={part.expected || (editorial ? 'Consulte a proposta de correção e os critérios de estudo.' : 'Consulte a proposta e os critérios oficiais.')} /></p>{part.expectedImages?.map((image) => <figure className="open-expected-image" key={image.src}><img src={image.src} alt={image.alt} loading="lazy" />{image.caption && <figcaption>{image.caption}</figcaption>}</figure>)}</div>
          {part.accepted && <div className="open-accepted-response"><strong>{editorial ? 'Formulações equivalentes' : 'Respostas também aceitas'}</strong><p><MathText text={part.accepted} /></p></div>}
          {part.rejected && <div className="open-accepted-response open-rejected-response"><strong>{editorial ? 'Não atende ao critério de estudo' : 'Não atende ao critério oficial'}</strong><p><MathText text={part.rejected} /></p></div>}
          {part.criteria?.length > 0 && <div className="open-criteria"><strong>{editorial ? 'Critérios de pontuação de estudo' : 'Critérios de pontuação'}</strong><ul>{part.criteria.map((criterion, index) => <li key={index}><span>{criterion.points} {criterion.points === 1 ? 'ponto' : 'pontos'}</span><p><MathText text={criterion.text} /></p></li>)}</ul></div>}
          {Number.isFinite(part.maxScore) && <div className="self-score-control">
            <div><strong>Quanto você atribui a este item?</strong><span>{Number.isFinite(selectedScore) ? `${selectedScore} de ${part.maxScore} pontos${editorial ? ' de estudo' : ''}` : 'Autoavaliação pendente'}</span></div>
            <div className="self-score-buttons" role="group" aria-label={`Nota do item ${part.id}`}>
              {Array.from({ length: part.maxScore + 1 }, (_, score) => <button type="button" key={score} className={selectedScore === score ? 'selected' : ''} aria-pressed={selectedScore === score} onClick={() => onScoreChange?.(part.id, score)}>{selectedScore === score && <Check size={13} />}{score}</button>)}
            </div>
          </div>}
        </article>;
      })}
    </div>
    {question.studyNotes?.length > 0 && <div className="open-official-notes"><strong>Observações da proposta de correção</strong>{question.studyNotes.map((note, index) => <p key={index}>{note}</p>)}</div>}
    {question.officialNotes?.length > 0 && <div className="open-official-notes"><strong>Observações oficiais</strong>{question.officialNotes.map((note, index) => <p key={index}>{note}</p>)}</div>}
    {question.officialAnswerUrl && <a className="open-official-link" href={question.officialAnswerUrl} target="_blank" rel="noreferrer">Abrir documento oficial de respostas esperadas <ExternalLink size={14} /></a>}
  </section>;
}
