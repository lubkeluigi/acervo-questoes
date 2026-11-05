import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

// A `$` that belongs to a currency token (R$, US$) is preceded by a letter and
// must not open a math span; only start math when `$` is not glued to a word.
const MATH_PARTS = /(\$\$[\s\S]*?\$\$|(?<![A-Za-z0-9])\$(?!\s)(?:\\.|[^$\n])*?(?<!\s)\$)/g;

function decodeEntities(value) {
  return value.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
}

export function renderMathHtml(math, displayMode = false) {
  return katex.renderToString(decodeEntities(math), {
    displayMode,
    output: 'html',
    throwOnError: false,
    strict: 'ignore',
  });
}

// Receives HTML-escaped prose and replaces only the explicitly delimited math.
export function renderMixedMathHtml(escapedText) {
  return escapedText.split(MATH_PARTS).map((part) => {
    if (part.startsWith('$$') && part.endsWith('$$')) {
      return `<span class="math-display">${renderMathHtml(part.slice(2, -2), true)}</span>`;
    }
    if (part.startsWith('$') && part.endsWith('$')) {
      return `<span class="math-inline">${renderMathHtml(part.slice(1, -1))}</span>`;
    }
    return part;
  }).join('');
}

export default function MathText({ text, display = false }) {
  const value = String(text ?? '');
  if (display) {
    return <span className="math-display" aria-label={value} dangerouslySetInnerHTML={{ __html: renderMathHtml(value, true) }} />;
  }
  return <>{value.split(MATH_PARTS).map((part, index) => {
    if (part.startsWith('$$') && part.endsWith('$$')) {
      const math = part.slice(2, -2);
      return <span className="math-display" aria-label={math} key={index} dangerouslySetInnerHTML={{ __html: renderMathHtml(math, true) }} />;
    }
    if (part.startsWith('$') && part.endsWith('$')) {
      const math = part.slice(1, -1);
      return <span className="math-inline" aria-label={math} key={index} dangerouslySetInnerHTML={{ __html: renderMathHtml(math) }} />;
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  })}</>;
}
