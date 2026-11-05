import React from 'react';
import { RAMP_SKATER_PATHS } from './q73RampTraces.js';

const sans = 'Arial, Helvetica, sans-serif';

function RampDiagram() {
  return <svg viewBox="0 0 736 435" role="img" aria-labelledby="ramp-recreated-title" className="question-svg ramp-diagram" fontFamily={sans}>
    <title id="ramp-recreated-title">Esquema da rampa de Sandro Dias com as zonas Vertical, Transição e Flat, as alturas de 70 e 9,7 metros e os pontos inicial, intermediário e mais baixo.</title>
    <defs>
      <filter id="ramp-concrete-noise" x="-5%" y="-5%" width="110%" height="110%">
        <feTurbulence type="fractalNoise" baseFrequency=".62" numOctaves="3" seed="14" result="noise" />
        <feColorMatrix in="noise" type="saturate" values="0" result="grayNoise" />
        <feComponentTransfer in="grayNoise" result="contrast"><feFuncR type="linear" slope=".72" intercept=".28" /><feFuncG type="linear" slope=".72" intercept=".28" /><feFuncB type="linear" slope=".72" intercept=".28" /></feComponentTransfer>
        <feBlend in="SourceGraphic" in2="contrast" mode="multiply" result="textured" />
        <feComposite in="textured" in2="SourceAlpha" operator="in" />
      </filter>
      <marker id="ramp-arrow-red" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="#d42b2b" /></marker>
      <marker id="ramp-arrow-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#1717b9" /></marker>
    </defs>
    <path d="M207 267C230 319 280 376 349 385C456 385 596 366 736 338V435H325C267 393 225 335 207 267Z" fill="#ffd21c" stroke="#252525" strokeWidth="1.5" />
    <path d="M0 28H132V262C142 326 224 394 325 435H0Z" fill="#777" filter="url(#ramp-concrete-noise)" />
    <path d="M0 28H132V262C142 326 224 394 325 435H0Z" fill="none" stroke="#252525" strokeWidth="1.5" />
    <path d="M145 17V254C148 323 230 396 325 435" fill="none" stroke="#9b2940" strokeWidth="2" />
    <path d="M245 276C255 335 305 388 405 382" fill="none" stroke="#d42b2b" strokeWidth="3" strokeDasharray="1 7" strokeLinecap="round" />
    <line x1="150" y1="86" x2="656" y2="86" stroke="#d42b2b" strokeWidth="3" strokeDasharray="12 8" />
    <line x1="556" y1="88" x2="556" y2="420" stroke="#d42b2b" strokeWidth="3" markerStart="url(#ramp-arrow-red)" markerEnd="url(#ramp-arrow-red)" />
    <line x1="406" y1="385" x2="406" y2="429" stroke="#d42b2b" strokeWidth="3" markerStart="url(#ramp-arrow-red)" markerEnd="url(#ramp-arrow-red)" />
    {RAMP_SKATER_PATHS.map((path,index) => <path key={index} d={path} fill="#050505" />)}
    <text x="193" y="161" fontSize="23" fontWeight="700" fill="#1717b9">“Vertical”</text>
    <text x="274" y="326" fontSize="23" fontWeight="700" fill="#1717b9">“Transição”</text>
    <text x="578" y="325" fontSize="23" fontWeight="700" fill="#1717b9">“Flat”</text>
    <text x="570" y="160" fontSize="23" fontWeight="600" fill="#d42b2b">70,0 m</text>
    <text x="416" y="413" fontSize="21" fontWeight="600" fill="#d42b2b">9,7 m</text>
    <line x1="313" y1="359" x2="313" y2="341" stroke="#1717b9" strokeWidth="2" markerEnd="url(#ramp-arrow-blue)" />
    <circle cx="150" cy="86" r="9" fill="#f32929" stroke="#b31f1f" strokeWidth="1" />
    <circle cx="312" cy="370" r="9" fill="#2020c8" stroke="#111176" strokeWidth="1" />
    <circle cx="405" cy="380" r="9" fill="#f32929" stroke="#b31f1f" strokeWidth="1" />
  </svg>;
}

const PB_COLORS = {
  Fe: { gradient: 'pb-fe', stroke: '#a33b00', radius: 12 },
  N: { gradient: 'pb-n', stroke: '#7160b6', radius: 9.5 },
  C: { gradient: 'pb-c', stroke: '#484848', radius: 9 },
  Cation: { gradient: 'pb-cation', stroke: '#208b12', radius: 11 },
};
function Atom({ x, y, type, legend = false }) {
  const style = PB_COLORS[type];
  const radius = legend ? 14 : style.radius;
  return <g transform={`translate(${x} ${y})`} filter="url(#pb-shadow)">
    <circle r={radius} fill={`url(#${style.gradient})`} stroke={style.stroke} strokeWidth=".8" />
    <ellipse cx={-radius*.28} cy={-radius*.34} rx={radius*.25} ry={radius*.16} fill="#fff" opacity=".72" transform={`rotate(-25 ${-radius*.28} ${-radius*.34})`} />
  </g>;
}
const lerpPoint = (a, b, t) => ({ x: a.x + (b.x-a.x)*t, y: a.y + (b.y-a.y)*t });
function Bond({ a, b, color = '#8d839e', triple = false }) {
  const dx=b.x-a.x, dy=b.y-a.y, length=Math.hypot(dx,dy) || 1;
  const nx=-dy/length, ny=dx/length;
  const offsets=triple ? [-2.4,0,2.4] : [0];
  return <g fill="none" strokeLinecap="round">
    {offsets.map((offset,index) => {
      const start={x:a.x+nx*offset,y:a.y+ny*offset}, end={x:b.x+nx*offset,y:b.y+ny*offset};
      return <React.Fragment key={offset}>
        <line x1={start.x} y1={start.y} x2={end.x} y2={end.y} stroke="#4c4951" strokeWidth={triple ? 2.4 : 5.5} />
        <line x1={start.x} y1={start.y} x2={end.x} y2={end.y} stroke={triple ? '#aaa4b2' : color} strokeWidth={triple ? 1.05 : 2.3} />
      </React.Fragment>;
    })}
  </g>;
}
const PB_VERTICES = {
  a:{x:30,y:35}, b:{x:255,y:35}, c:{x:255,y:260}, d:{x:30,y:260},
  e:{x:95,y:90}, f:{x:320,y:90}, g:{x:320,y:315}, h:{x:95,y:315},
};
const PB_EDGES = [['a','b'],['b','c'],['c','d'],['d','a'],['a','e'],['b','f'],['c','g'],['d','h'],['e','f'],['f','g'],['g','h'],['h','e']];
const edgeData = PB_EDGES.map(([from,to],index) => {
  const a=PB_VERTICES[from], b=PB_VERTICES[to], p1=lerpPoint(a,b,1/3), p2=lerpPoint(a,b,2/3);
  const type1=index%2===0 ? 'N' : 'C', type2=type1==='N' ? 'C' : 'N';
  return {a,b,p1,p2,type1,type2,index};
});
const pbAtoms = [
  ...edgeData.flatMap((edge) => [{...edge.p1,type:edge.type1,key:`e${edge.index}-1`},{...edge.p2,type:edge.type2,key:`e${edge.index}-2`}]),
  {x:225,y:48,type:'Cation',key:'green-1'}, {x:65,y:137,type:'Cation',key:'green-2'},
  {x:281,y:216,type:'Cation',key:'green-3'}, {x:151,y:282,type:'Cation',key:'green-4'},
  ...Object.entries(PB_VERTICES).map(([key,point]) => ({...point,type:'Fe',key:`fe-${key}`})),
].sort((a,b) => a.y-b.y);

function PrussianBlueDiagram() {
  return <svg viewBox="0 0 760 350" role="img" aria-labelledby="prussian-recreated-title" className="question-svg prussian-blue-diagram" fontFamily={sans}>
    <title id="prussian-recreated-title">Modelo tridimensional do Azul da Prússia, com íons ferro nos vértices, grupos cianeto formados por carbono e nitrogênio e cátions verdes fracamente ligados.</title>
    <defs>
      <radialGradient id="pb-fe" cx="32%" cy="25%" r="72%"><stop offset="0" stopColor="#ffc18a" /><stop offset=".28" stopColor="#ff801f" /><stop offset=".72" stopColor="#ed5408" /><stop offset="1" stopColor="#a72d00" /></radialGradient>
      <radialGradient id="pb-n" cx="32%" cy="25%" r="72%"><stop offset="0" stopColor="#f1ecff" /><stop offset=".28" stopColor="#c3b5ff" /><stop offset=".72" stopColor="#8f7bdd" /><stop offset="1" stopColor="#57479a" /></radialGradient>
      <radialGradient id="pb-c" cx="32%" cy="25%" r="72%"><stop offset="0" stopColor="#f4f4f4" /><stop offset=".28" stopColor="#b5b5b5" /><stop offset=".72" stopColor="#6d6d6d" /><stop offset="1" stopColor="#353535" /></radialGradient>
      <radialGradient id="pb-cation" cx="32%" cy="25%" r="72%"><stop offset="0" stopColor="#d8ffb8" /><stop offset=".28" stopColor="#76ef45" /><stop offset=".72" stopColor="#2dc515" /><stop offset="1" stopColor="#128407" /></radialGradient>
      <filter id="pb-shadow" x="-40%" y="-40%" width="180%" height="180%"><feDropShadow dx=".7" dy="1.1" stdDeviation="1" floodColor="#000" floodOpacity=".32" /></filter>
    </defs>
    {edgeData.map((edge) => <g key={`bonds-${edge.index}`}>
      <Bond a={edge.a} b={edge.p1} color={edge.type1==='N' ? '#a18bdc' : '#929292'} />
      <Bond a={edge.p1} b={edge.p2} triple />
      <Bond a={edge.p2} b={edge.b} color={edge.type2==='N' ? '#a18bdc' : '#929292'} />
    </g>)}
    {pbAtoms.map(({ key, ...atom }) => <Atom key={key} {...atom} />)}
    <g fontSize="22" fill="#171717">
      <Atom x={400} y={75} type="Fe" legend /><text x="435" y="83">Ferro</text>
      <Atom x={400} y={140} type="N" legend /><text x="435" y="148">Nitrogênio</text>
      <Atom x={400} y={205} type="C" legend /><text x="435" y="213">Carbono</text>
      <Atom x={400} y={270} type="Cation" legend /><text x="435" y="278">Cátions fracamente ligados</text>
    </g>
  </svg>;
}

export const RECREATED_DIAGRAMS = {
  fuvest2027Q65Structure: <PrussianBlueDiagram />,
  fuvest2027Q73Ramp: <RampDiagram />,
};
