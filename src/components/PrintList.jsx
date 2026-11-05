import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeft, Check, FileDown, Loader2, Monitor, Printer } from 'lucide-react';
import QuestionContent, { AlternativeBody } from './QuestionContent.jsx';
import { isEditorialCorrection, isOpenQuestion } from './OpenResponse.jsx';

const ANSWER_LETTERS = ['A', 'B', 'C', 'D', 'E'];

const PAGE_WIDTH = 794;
const PAGE_HEIGHT = 1123;
const CONTENT_WIDTH = 698;
const CONTENT_HEIGHT = 1020;
const COLUMN_GAP = 32;
const COLUMN_WIDTH = (CONTENT_WIDTH - COLUMN_GAP) / 2;
const QUESTION_GAP = 18;
const MAX_COLUMN_FLOW = CONTENT_HEIGHT * 2;
const PRINT_ROOT_ID = 'pdf-print-root';

function questionKey(question) {
  return question.id || String(question.number);
}

function displayNumber(number) {
  return String(number).padStart(2, '0');
}

function answerLabel(question) {
  if (question.annulled) return 'ANULADA';
  if (isOpenQuestion(question)) return question.kind === 'essay' ? 'REDAÇÃO' : 'DISCURSIVA';
  return Number.isInteger(question.correct) ? (ANSWER_LETTERS[question.correct] || '—') : '—';
}

function PrintQuestion({ question, number, scale = 1, template, wide = false, idScope = 'visible' }) {
  return (
    <article
      className={`pdf-question${wide ? ' pdf-question-wide' : ''}${question.annulled ? ' pdf-question-annulled' : ''}`}
      data-print-question={questionKey(question)}
      data-diagram={question.diagram || ''}
      data-original-number={question.number}
      style={{ zoom: scale }}
    >
      <header className="pdf-question-header">
        {template === 'vunesp' ? (
          <div className="pdf-vunesp-heading" aria-label={`Questão ${displayNumber(number)}`}>
            <span className="pdf-vunesp-marker" aria-hidden="true" />
            <span className="pdf-vunesp-label">QUESTÃO</span>
            <strong className="pdf-vunesp-number">{displayNumber(number)}</strong>
          </div>
        ) : (
          <strong className="pdf-fuvest-number">{displayNumber(number)}</strong>
        )}
      </header>
      {question.annulled ? (
        <p className="pdf-annulled"><strong>QUESTÃO ANULADA.</strong></p>
      ) : (
        <>
          <QuestionContent question={question} eager />
          {isOpenQuestion(question) ? <div className="pdf-open-response-space">
            {(question.parts || []).map((part) => <div className="pdf-open-response-item" key={`${idScope}-${questionKey(question)}-${part.id}`}>
              <strong>{question.kind === 'essay' ? 'Resolução e resposta' : `Item ${part.id}) · resolução e resposta`}</strong>
              <div className="pdf-writing-lines" aria-hidden="true">{Array.from({ length: question.kind === 'essay' ? 18 : 4 }, (_, line) => <i key={line} />)}</div>
            </div>)}
          </div> : <div className="pdf-alternatives">
            {(question.alternatives || []).map((alternative, index) => (
              <div className="pdf-alternative" key={`${idScope}-${questionKey(question)}-${index}`}>
                <span className="pdf-alternative-letter">({ANSWER_LETTERS[index]})</span>
                <div className="pdf-alternative-body">
                  <AlternativeBody question={question} alternative={alternative} index={index} eager />
                </div>
              </div>
            ))}
          </div>}
        </>
      )}
    </article>
  );
}

function PageHeader({ title, template, answerKey = false }) {
  const documentTitle = title.trim() || 'Lista de exercícios';
  return (
    <header className="pdf-page-header">
      <span className="pdf-running-left" aria-hidden="true" />
      <strong>{answerKey ? `${documentTitle} — Gabarito` : documentTitle}</strong>
    </header>
  );
}

function PageFooter({ page, total, template }) {
  return (
    <footer className="pdf-page-footer">
      <span>Lista de exercícios</span>
      <strong>{displayNumber(page)}</strong>
      <span>{template === 'fuvest' ? `${page} / ${total}` : ''}</span>
    </footer>
  );
}

function AnswerKey({ questions, page, total, title, template }) {
  const hasEditorialOpen = questions.some((question) => isOpenQuestion(question) && isEditorialCorrection(question));
  const hasOfficialOpen = questions.some((question) => isOpenQuestion(question) && !isEditorialCorrection(question));
  const openAnswerNote = hasEditorialOpen
    ? (hasOfficialOpen
      ? ' Nas discursivas, consulte as respostas esperadas e os critérios de autoavaliação no modo “Responder lista”.'
      : ' Nas discursivas, consulte as propostas de correção do acervo e os critérios de estudo no modo “Responder lista”; esse material não é oficial.')
    : ' Nas discursivas, consulte a resposta oficial esperada e os critérios de autoavaliação no modo “Responder lista”.';
  return (
    <section
      className={`pdf-page pdf-page-${template} pdf-answer-page`}
      data-page-kind="answer-key"
      style={{ width: PAGE_WIDTH, height: PAGE_HEIGHT }}
    >
      <PageHeader title={title} template={template} answerKey />
      <div className="pdf-page-content pdf-answer-content">
        <div className="pdf-answer-intro">
          <h2>GABARITO</h2>
          <p>{questions.length} {questions.length === 1 ? 'questão' : 'questões'} · respostas na ordem desta lista</p>
        </div>
        <div className="pdf-answer-key">
          {questions.map((question, index) => (
            <div className="pdf-answer-item" key={questionKey(question)}>
              <strong>{displayNumber(index + 1)}</strong>
              <span>{answerLabel(question)}</span>
            </div>
          ))}
        </div>
        <p className="pdf-answer-note">Questões anuladas são identificadas expressamente. A numeração acima corresponde à ordem escolhida para esta lista.{questions.some(isOpenQuestion) ? openAnswerNote : ''}</p>
      </div>
      <PageFooter page={page} total={total} template={template} />
    </section>
  );
}

function fitPrintMath(root) {
  if (!root) return;
  root.querySelectorAll('.math-display').forEach((math) => {
    math.style.fontSize = '';
    const computed = getComputedStyle(math);
    const initialSize = parseFloat(computed.fontSize) || 12;
    const horizontalPadding = (parseFloat(computed.paddingLeft) || 0) + (parseFloat(computed.paddingRight) || 0);
    const available = math.clientWidth - horizontalPadding;
    const content = math.scrollWidth - horizontalPadding;
    if (available <= 0 || content <= available + 1) return;

    // Reduz somente a fórmula que não cabe; nunca divide reagentes, seta e produtos.
    let size = Math.max(9, Math.floor(initialSize * (available / content) * 0.97 * 10) / 10);
    math.style.fontSize = `${size}px`;
    for (let attempt = 0; attempt < 4 && math.scrollWidth > math.clientWidth + 1 && size > 9; attempt += 1) {
      size = Math.max(9, size - 0.5);
      math.style.fontSize = `${size}px`;
    }
  });
}

async function waitForPrintResources() {
  if (document.fonts) {
    await document.fonts.ready;
    if (document.fonts.load) {
      await Promise.all([
        document.fonts.load('12px "Roboto Condensed"'),
        document.fonts.load('700 12px "Roboto Condensed"'),
      ]);
    }
  }
  const root = document.getElementById(PRINT_ROOT_ID);
  const images = root ? Array.from(root.querySelectorAll('img')) : [];
  await Promise.all(images.map((image) => {
    if (image.complete && image.naturalWidth > 0) return Promise.resolve();
    if (image.decode) return image.decode().catch(() => undefined);
    return new Promise((resolve) => {
      image.addEventListener('load', resolve, { once: true });
      image.addEventListener('error', resolve, { once: true });
    });
  }));
  await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
}

export default function PrintList({ questions, title, showKey, onBack, styleTemplate = 'fuvest' }) {
  const template = styleTemplate === 'vunesp' ? 'vunesp' : 'fuvest';
  const [showPreview, setShowPreview] = useState(true);
  const [previewScale, setPreviewScale] = useState(1);
  const [stable, setStable] = useState(false);
  const [layout, setLayout] = useState(null);
  const [adjustment, setAdjustment] = useState('');
  const [layoutWarning, setLayoutWarning] = useState('');
  const [audit, setAudit] = useState({ maxOverflowX: 0, maxOverflowY: 0, pagesChecked: 0 });
  const measureColumnRef = useRef(null);
  const measureWideRef = useRef(null);
  const pagesRef = useRef(null);
  const previewViewportRef = useRef(null);
  const adjustmentsRef = useRef(0);
  const totalPages = (layout?.pages.length || 0) + (showKey ? 1 : 0);

  useEffect(() => {
    setStable(false);
    setLayout(null);
    setLayoutWarning('');
    setAdjustment('');
    setAudit({ maxOverflowX: 0, maxOverflowY: 0, pagesChecked: 0 });
    adjustmentsRef.current = 0;
  }, [questions, template]);

  useEffect(() => {
    if (!showPreview || !previewViewportRef.current) return undefined;
    const viewport = previewViewportRef.current;
    const updateScale = () => {
      const available = Math.max(280, viewport.clientWidth - 64);
      setPreviewScale(Math.min(1, available / PAGE_WIDTH));
    };
    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [showPreview, layout]);

  useLayoutEffect(() => {
    let cancelled = false;
    setStable(false);
    setLayout(null);
    setLayoutWarning('');
    setAdjustment('');
    adjustmentsRef.current = 0;

    const measure = async () => {
      await waitForPrintResources();
      if (cancelled || !measureColumnRef.current || !measureWideRef.current) return;
      fitPrintMath(measureColumnRef.current);
      fitPrintMath(measureWideRef.current);
      const columnNodes = Array.from(measureColumnRef.current.querySelectorAll('[data-print-question]'));
      const wideNodes = Array.from(measureWideRef.current.querySelectorAll('[data-print-question]'));
      const columnHeights = new Map(columnNodes.map((node) => [node.dataset.printQuestion, node.getBoundingClientRect().height]));
      const wideHeights = new Map(wideNodes.map((node) => [node.dataset.printQuestion, node.getBoundingClientRect().height]));

      const items = questions.map((question, index) => {
        const key = questionKey(question);
        const rawColumnHeight = columnHeights.get(key) || 0;
        // A FUVEST abre páginas inteiras para conjuntos gráficos extensos (como a Q44).
        // O mesmo critério evita reduzir demais questões que não cabem confortavelmente em uma coluna.
        const wide = isOpenQuestion(question) || question.diagram === 'fuvest2027Q44' || rawColumnHeight > MAX_COLUMN_FLOW * 1.03;
        const rawHeight = wide ? (wideHeights.get(key) || rawColumnHeight) : rawColumnHeight;
        const capacity = wide ? CONTENT_HEIGHT - 12 : MAX_COLUMN_FLOW - QUESTION_GAP * 2;
        const rawWithGap = rawHeight + (wide ? 0 : QUESTION_GAP);
        const scale = rawWithGap > capacity
          ? Math.max(0.55, Math.min(1, (capacity / rawWithGap) * 0.985))
          : 1;
        return {
          key,
          question,
          number: index + 1,
          wide,
          scale,
          height: rawHeight * scale + (wide ? 0 : QUESTION_GAP * scale),
        };
      });

      const pages = [];
      let current = [];
      let used = 0;
      const flush = () => {
        if (!current.length) return;
        pages.push({ kind: 'normal', items: current });
        current = [];
        used = 0;
      };

      items.forEach((item) => {
        if (item.wide) {
          flush();
          pages.push({ kind: 'wide', items: [item] });
          return;
        }
        if (current.length && used + item.height > MAX_COLUMN_FLOW) flush();
        current.push(item);
        used += item.height;
      });
      flush();

      if (!cancelled) {
        setLayout({ pages });
        setAdjustment('Medição editorial concluída. Verificando as páginas reais…');
      }
    };

    measure().catch((error) => {
      if (cancelled) return;
      console.error('Falha ao medir a impressão:', error);
      setLayoutWarning('Não foi possível medir a lista. Reabra a visualização e tente novamente.');
    });
    return () => { cancelled = true; };
  }, [questions, template]);

  useLayoutEffect(() => {
    if (!layout || !pagesRef.current) return;
    fitPrintMath(pagesRef.current);
    const contentNodes = Array.from(pagesRef.current.querySelectorAll('[data-page-kind="questions"] .pdf-page-content'));
    if (contentNodes.length !== layout.pages.length) return;

    let maxOverflowX = 0;
    let maxOverflowY = 0;
    const overflows = [];
    contentNodes.forEach((node, index) => {
      const overflowX = Math.max(0, node.scrollWidth - node.clientWidth);
      const overflowY = Math.max(0, node.scrollHeight - node.clientHeight);
      maxOverflowX = Math.max(maxOverflowX, overflowX);
      maxOverflowY = Math.max(maxOverflowY, overflowY);
      if (overflowX > 3 || overflowY > 3) overflows.push({ index, overflowX, overflowY, node });
    });
    setAudit({ maxOverflowX, maxOverflowY, pagesChecked: contentNodes.length });

    if (!overflows.length) {
      setStable(true);
      setAdjustment('');
      setLayoutWarning('');
      return;
    }

    setStable(false);
    if (adjustmentsRef.current >= 40) {
      setLayoutWarning('O navegador não estabilizou a paginação. Atualize a página antes de gerar o PDF.');
      setStable(true);
      return;
    }
    adjustmentsRef.current += 1;
    const first = overflows[0];
    setAdjustment(`Ajuste fino de paginação ${adjustmentsRef.current}/40 · página ${first.index + 1}`);

    setLayout((currentLayout) => {
      if (!currentLayout) return currentLayout;
      const pages = currentLayout.pages.map((page) => ({ ...page, items: page.items.map((item) => ({ ...item })) }));
      overflows.forEach(({ index, overflowX, overflowY, node }) => {
        const page = pages[index];
        if (!page) return;
        if (page.kind === 'normal' && page.items.length > 1) {
          const [moved] = page.items.splice(-1, 1);
          const next = pages[index + 1];
          if (next && next.kind === 'normal') next.items.unshift(moved);
          else pages.splice(index + 1, 0, { kind: 'normal', items: [moved] });
          return;
        }
        const item = page.items[0];
        if (!item) return;
        const ratioX = node.scrollWidth ? node.clientWidth / node.scrollWidth : 1;
        const ratioY = node.scrollHeight ? node.clientHeight / node.scrollHeight : 1;
        const ratio = Math.max(0.86, Math.min(0.985, ratioX, ratioY));
        item.scale = Math.max(0.5, item.scale * ratio);
      });
      return { pages };
    });
  }, [layout, totalPages, showPreview]);

  const printPdf = () => {
    setShowPreview(false);
    window.setTimeout(() => window.print(), 120);
  };

  const questionPages = layout?.pages || [];
  const status = useMemo(() => {
    if (!layout) return 'Compondo colunas e medindo figuras…';
    if (!stable) return adjustment || 'Verificando a paginação…';
    return `${questionPages.length} ${questionPages.length === 1 ? 'página de questões' : 'páginas de questões'} · nenhuma questão dividida entre páginas`;
  }, [layout, stable, adjustment, questionPages.length]);

  const printMarkup = (
    <div id={PRINT_ROOT_ID} className={`pdf-print-root pdf-theme-${template}`} aria-hidden={showPreview ? true : undefined}>
      <div className="pdf-measure-bank" aria-hidden="true">
        <div ref={measureColumnRef} className={`pdf-measure-lane pdf-page-${template}`} style={{ width: COLUMN_WIDTH }}>
          {questions.map((question, index) => (
            <PrintQuestion key={`column-${questionKey(question)}`} question={question} number={index + 1} template={template} idScope="measure-column" />
          ))}
        </div>
        <div ref={measureWideRef} className={`pdf-measure-lane pdf-page-${template}`} style={{ width: CONTENT_WIDTH }}>
          {questions.map((question, index) => (
            <PrintQuestion key={`wide-${questionKey(question)}`} question={question} number={index + 1} template={template} wide idScope="measure-wide" />
          ))}
        </div>
      </div>

      {layout && (
        <div ref={pagesRef} className="pdf-pages" data-print-ready={stable ? 'true' : 'false'}>
          {questionPages.map((page, pageIndex) => (
            <section
              className={`pdf-page pdf-page-${template}${page.kind === 'wide' ? ' pdf-page-wide' : ''}`}
              data-page-kind="questions"
              data-page-index={pageIndex}
              key={`page-${pageIndex}-${page.items.map((item) => item.key).join('-')}`}
              style={{ width: PAGE_WIDTH, height: PAGE_HEIGHT }}
            >
              <PageHeader title={title} template={template} />
              <div className={`pdf-page-content${page.kind === 'wide' ? ' pdf-page-content-wide' : ''}`}>
                {page.items.map((item) => (
                  <PrintQuestion
                    key={item.key}
                    question={item.question}
                    number={item.number}
                    scale={item.scale}
                    template={template}
                    wide={item.wide}
                  />
                ))}
              </div>
              <PageFooter page={pageIndex + 1} total={totalPages} template={template} />
            </section>
          ))}
          {showKey && (
            <AnswerKey
              questions={questions}
              page={questionPages.length + 1}
              total={totalPages}
              title={title}
              template={template}
            />
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className={`print-list print-list-${template}`}>
      <div className="print-toolbar">
        <button type="button" className="btn btn-ghost" onClick={onBack}><ArrowLeft size={18} /> Voltar à lista</button>
        <div className="print-toolbar-title">
          <span className="eyebrow">PDF editorial</span>
          <h1>{title}</h1>
          <p>{questions.length} {questions.length === 1 ? 'questão' : 'questões'} · {showKey ? 'com gabarito ao final' : 'sem gabarito'}</p>
        </div>
        <div className="print-actions">
          <button type="button" className="btn btn-secondary" onClick={() => setShowPreview((value) => !value)}>
            <Monitor size={18} /> {showPreview ? 'Ocultar visualização' : 'Mostrar visualização'}
          </button>
          <button type="button" className="btn btn-primary" onClick={printPdf} disabled={!stable || !layout}>
            {stable ? <FileDown size={18} /> : <Loader2 size={18} className="spin" />}
            {stable ? 'Gerar PDF / Imprimir' : 'Preparando páginas…'}
          </button>
        </div>
      </div>

      <div className={`print-status ${stable ? 'is-ready' : ''}`} role="status" aria-live="polite">
        {stable ? <Check size={17} /> : <Loader2 size={17} className="spin" />}
        <span>{status}</span>
        {stable && audit.pagesChecked > 0 && <small>Overflow horizontal: {audit.maxOverflowX}px · vertical: {audit.maxOverflowY}px</small>}
      </div>
      {layoutWarning && <div className="print-warning" role="alert">{layoutWarning}</div>}
      <p className="print-tip"><Printer size={15} /> Na janela de impressão, use papel A4, escala 100% e margens “Nenhuma”. Cada questão permanece em uma única página; quando necessário, continua da coluna esquerda para a direita.</p>

      {showPreview && (
        <div className="print-preview-viewport" ref={previewViewportRef}>
          <div className="print-preview-scaler" style={{ width: PAGE_WIDTH * previewScale }}>
            <div
              className="print-preview-zoom"
              style={{ width: PAGE_WIDTH, transform: `scale(${previewScale})`, transformOrigin: 'top left' }}
            >
              {printMarkup}
            </div>
          </div>
        </div>
      )}
      {!showPreview && createPortal(printMarkup, document.body)}
    </div>
  );
}
