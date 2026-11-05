import React from 'react';

const ink = { fontFamily: 'Arial, Helvetica, sans-serif', fill: '#161616' };
const angles = [-90, -45, 0, 45, 90, 135, 180, 225];
const point = (radius, angle) => [90 + radius * Math.cos(angle * Math.PI / 180), 65 + radius * Math.sin(angle * Math.PI / 180)];

function SpiderWeb({ figure, active, moves }) {
  const titleId = `q59-web-${figure}`;
  const arrowId = `q59-arrow-${figure}`;
  const outer = angles.map((angle) => point(45, angle));
  const [vx, vy] = active.reduce(([x, y], index) => {
    const angle = angles[index] * Math.PI / 180;
    return [x + Math.cos(angle), y + Math.sin(angle)];
  }, [0, 0]);
  const length = Math.hypot(vx, vy) || 1;
  const arrowStart = [90 + 20 * vx / length, 65 + 20 * vy / length];
  const arrowEnd = [90 + 57 * vx / length, 65 + 57 * vy / length];
  return <svg viewBox="0 0 180 182" role="img" aria-labelledby={titleId} className="question-svg spider-svg">
    <title id={titleId}>{`Figura ${figure}: oito direções na teia; ${active.length} sinais; aranha ${moves ? 'se move' : 'não se move'}`}</title>
    <defs><marker id={arrowId} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#b51f2d" /></marker></defs>
    <g fill="none" stroke="#767676" strokeWidth=".65">
      {[18, 29, 41].map((radius) => <polygon key={radius} points={angles.map((angle) => point(radius, angle).join(',')).join(' ')} />)}
      {outer.map(([x, y], index) => <line key={index} x1="90" y1="65" x2={x} y2={y} />)}
      <polygon points={outer.map((p) => p.join(',')).join(' ')} stroke="#4d4d4d" strokeWidth=".85" />
    </g>
    {moves && <line x1={arrowStart[0]} y1={arrowStart[1]} x2={arrowEnd[0]} y2={arrowEnd[1]} stroke="#b51f2d" strokeWidth="2.1" strokeLinecap="round" markerEnd={`url(#${arrowId})`} />}
    <circle cx="90" cy="65" r="17" fill="#b7b7b7" stroke="#333" strokeWidth="1" />
    {outer.map(([x, y], index) => <circle key={index} cx={x} cy={y} r="3.2" fill={active.includes(index) ? '#050505' : '#f7f7f7'} stroke="#161616" strokeWidth=".9" />)}
    <text x="90" y="139" textAnchor="middle" fontSize="10.5" fontWeight="700" style={ink}>{`Fig. ${figure}`}</text>
    <text x="90" y="156" textAnchor="middle" fontSize="11" fontWeight="700" style={ink}>Aranha</text>
    <text x="90" y="171" textAnchor="middle" fontSize="11" fontWeight="700" style={ink}>{moves ? 'se move' : 'não se move'}</text>
  </svg>;
}

const twoSignals = [
  { figure: 1, active: [0, 1], moves: true },
  { figure: 2, active: [0, 2], moves: true },
  { figure: 3, active: [0, 4], moves: false },
];
const fourSignals = [
  { figure: 4, active: [0, 1, 6, 7], moves: true },
  { figure: 5, active: [0, 5, 6, 7], moves: true },
  { figure: 6, active: [0, 2, 4, 6], moves: false },
];

function SpiderSet({ items, label }) {
  return <div className="spider-grid" role="group" aria-label={label}>{items.map((item) => <SpiderWeb key={item.figure} {...item} />)}</div>;
}

export const LOTE05_DIAGRAMS = {
  fuvest2027Q59Two: <SpiderSet items={twoSignals} label="Três exemplos com dois sinais na teia" />,
  fuvest2027Q59Four: <SpiderSet items={fourSignals} label="Três exemplos com quatro sinais na teia" />,
};
