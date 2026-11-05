import React from 'react';
import Diagram from './Diagrams.jsx';
import MathText from './MathText.jsx';
import { QuestionTable } from './QuestionTable.jsx';
import { statementToHtml } from './questionFormatting.js';

function ImageGroup({ images, eager }) {
  if (!images?.length) return null;
  return <div className={`question-images ${images.length > 1 ? 'question-images-stack' : ''}`}>
    {images.map((image) => <figure key={image.src} className={image.className || undefined}>
      <img src={image.src} alt={image.alt} loading={eager ? 'eager' : 'lazy'} />
      {image.caption && <figcaption>{image.caption}</figcaption>}
    </figure>)}
  </div>;
}

function DiagramFigure({ type, caption, emptyCaption }) {
  if (!type) return null;
  return <figure className="diagram-figure"><Diagram type={type} />{!emptyCaption && caption !== '' && <figcaption>{caption || 'Representação esquemática da situação descrita no enunciado.'}</figcaption>}</figure>;
}

export function QuestionParts({ parts }) {
  if (!parts?.length) return null;
  return <div className="question-discursive-parts">{parts.map((part) => <div className="question-discursive-part" key={part.id}><strong>{part.id})</strong><p><MathText text={part.prompt} /></p></div>)}</div>;
}

export default function QuestionContent({ question, className = '', eager = false }) {
  return <div className={`question-content question-statement ${question.mathClass || ''} ${className}`}>
    <div dangerouslySetInnerHTML={{ __html: statementToHtml(question) }} />
    {question.math && <div className="statement-display-math"><MathText text={question.math} display /></div>}
    <ImageGroup images={question.images} eager={eager} />
    <DiagramFigure type={question.diagram} caption={question.figureCaption} emptyCaption={question.figureCaption === ''} />
    {question.tables?.map((table) => <QuestionTable key={table.ariaLabel} table={table} />)}
    {question.statementAfter && <div dangerouslySetInnerHTML={{ __html: statementToHtml(question, 'after') }} />}
    {question.afterMath && <div className="statement-display-math"><MathText text={question.afterMath} display /></div>}
    <ImageGroup images={question.afterImages} eager={eager} />
    <DiagramFigure type={question.afterDiagram} caption={question.afterFigureCaption} emptyCaption={question.afterFigureCaption === ''} />
    {question.afterTables?.map((table) => <QuestionTable key={table.ariaLabel} table={table} />)}
    {question.statementTail && <div dangerouslySetInnerHTML={{ __html: statementToHtml(question, 'tail') }} />}
    <QuestionParts parts={question.parts} />
  </div>;
}

export function AlternativeBody({ question, alternative, index, eager = false }) {
  const [body, ...sources] = alternative.split('\n\n');
  return <>
    <MathText text={body} />
    {sources.map((source, sourceIndex) => <span className="alternative-source" key={sourceIndex}><MathText text={source} /></span>)}
    {question.alternativeImages?.[index] && <span className="alternative-image-pair">
      {question.alternativeImages[index].map((image) => <span className="alternative-art" key={image.src}><img src={image.src} alt={image.alt} loading={eager ? 'eager' : 'lazy'} /></span>)}
    </span>}
  </>;
}
