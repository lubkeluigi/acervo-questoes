import React from 'react';

const textStyle = { fontFamily: 'Inter, Arial, sans-serif', fill: '#263b36' };
const blackStyle = { fontFamily: 'Arial, Helvetica, sans-serif', fill: '#151515' };
const redStyle = { ...blackStyle, fill: '#c41f3b' };

function Fuvest2027Q30() {
  const values = [1758, 2173.5, 3289.9, 4371.7, 3462.5, 3036.8];
  const labels = ['1758', '2173,5', '3289,9', '4371,7', '3462,5', '3036,8'];
  const bottom = 335; const top = 80; const plotHeight = bottom - top;
  const rainY = (value) => bottom - (value / 4500) * plotHeight;
  const elevationY = (value) => bottom - (value / 700) * 230;
  const profile = [[80,0],[145,0],[170,8],[190,15],[210,35],[230,85],[250,150],[270,210],[290,260],[310,340],[330,430],[350,540],[370,640],[390,700],[410,610],[430,540],[450,490],[470,400],[490,310],[510,250],[530,210],[550,190],[580,130],[610,70],[650,20],[690,0],[730,0]];
  const profilePath = profile.map(([x, value], index) => `${index ? 'L' : 'M'}${x},${elevationY(value)}`).join(' ');
  return (
    <svg viewBox="0 0 800 430" role="img" aria-labelledby="q30-title" className="question-svg question-svg-tall">
      <title id="q30-title">Perfil topo-pluviométrico da Ilha de São Sebastião</title>
      <defs><marker id="q30-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#111" /></marker></defs>
      <line x1="660" y1="24" x2="500" y2="24" stroke="#111" strokeWidth="2.5" markerEnd="url(#q30-arrow)" />
      <text x="580" y="49" textAnchor="middle" fontSize="13" fontWeight="600" style={blackStyle}>Ventos predominantes de SE</text>
      <rect x="80" y={top} width="650" height={plotHeight} fill="#fff" stroke="#333" strokeWidth="1.3" />
      {Array.from({ length: 10 }, (_, index) => index * 500).map((tick) => <g key={tick}><line x1="80" y1={rainY(tick)} x2="730" y2={rainY(tick)} stroke="#555" strokeWidth=".8" /><text x="67" y={rainY(tick) + 4} textAnchor="end" fontSize="12" style={blackStyle}>{tick}</text></g>)}
      <g transform="rotate(-90 24 224)"><text x="24" y="224" fontSize="14" fontWeight="600" style={blackStyle}>chuva (mm)</text></g>
      {values.map((value, index) => { const x = 115 + index * 102; return <g key={labels[index]}><rect x={x} y={rainY(value)} width="48" height={bottom - rainY(value)} fill={index === 2 ? '#b8d0f1' : '#347fe4'} /><text x={x + 24} y={rainY(value) - 8} textAnchor="middle" fontSize="13" fontWeight="700" style={blackStyle}>{labels[index]}</text></g>; })}
      <path d={profilePath} fill="none" stroke="#333" strokeWidth="1.7" strokeLinejoin="round" />
      <line x1="746" y1={elevationY(0)} x2="746" y2={elevationY(700)} stroke="#666" strokeWidth="1" />
      {[0,100,200,300,400,500,600,700].map((value) => <g key={value}><line x1="742" y1={elevationY(value)} x2="746" y2={elevationY(value)} stroke="#666" /><text x="753" y={elevationY(value) + 4} fontSize="11.5" style={blackStyle}>{value}m</text></g>)}
      <path d="M390 335V350H530V335" fill="none" stroke="#444" strokeWidth="1" />
      {['0m','250m','500m','1000m','1500m'].map((label, index) => { const x = 390 + index * 35; return <g key={label}><line x1={x} y1="350" x2={x} y2="356" stroke="#444" /><g transform={`rotate(90 ${x} 366)`}><text x={x} y="366" fontSize="10.5" style={blackStyle}>{label}</text></g></g>; })}
    </svg>
  );
}

function Fuvest2027Q31() {
  const A = [104,50]; const B = [330,67]; const C = [410,145]; const D = [188,149];
  const roofPoint = (s, t) => [0,1].map((axis) => A[axis] * (1-s) * (1-t) + B[axis] * s * (1-t) + C[axis] * s * t + D[axis] * (1-s) * t);
  const tiles = [];
  for (let row = 0; row < 9; row += 1) {
    for (let column = 0; column < 9; column += 1) {
      const points = [roofPoint(column/9,row/9),roofPoint((column+1)/9,row/9),roofPoint((column+1)/9,(row+1)/9),roofPoint(column/9,(row+1)/9)];
      tiles.push(<polygon key={`${row}-${column}`} points={points.map((point) => point.join(',')).join(' ')} fill={(row+column)%2 ? '#874532' : '#914c38'} stroke="#5d3026" strokeWidth=".75" />);
    }
  }
  return (
    <svg viewBox="0 0 700 730" role="img" aria-labelledby="q31-title" className="question-svg question-svg-tall">
      <title id="q31-title">Casa com telhado de duas águas e esquema frontal da inclinação</title>
      <defs>
        <marker id="q31-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#333" /></marker>
        <linearGradient id="q31-front-wall" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f0ece4" /><stop offset="1" stopColor="#d4cdc1" /></linearGradient>
        <linearGradient id="q31-side-wall" x1="0" y1="0" x2="1" y2=".4"><stop offset="0" stopColor="#d8d1c5" /><stop offset="1" stopColor="#b9b1a4" /></linearGradient>
        <radialGradient id="q31-shadow"><stop offset="0" stopColor="#635b50" stopOpacity=".24" /><stop offset="1" stopColor="#635b50" stopOpacity="0" /></radialGradient>
      </defs>
      <g transform="translate(110 15) scale(1.15)">
        <ellipse cx="220" cy="270" rx="205" ry="25" fill="url(#q31-shadow)" />
        <path d="M188 149L410 145L405 240L188 281Z" fill="url(#q31-side-wall)" stroke="#a9a195" strokeWidth="1.2" />
        <path d="M20 149L104 50L188 149V281L20 260Z" fill="url(#q31-front-wall)" stroke="#aaa296" strokeWidth="1.2" />
        <path d="M20 149L104 50L112 54L30 151Z" fill="#67372b" stroke="#553027" strokeWidth="1" />
        {tiles}
        <path d="M104 50L188 149" stroke="#5d3329" strokeWidth="5" strokeLinecap="round" />
        <path d="M20 149L188 149L410 145" fill="none" stroke="#5d3329" strokeWidth="4" strokeLinejoin="round" />
        <path d="M104 50L330 67" stroke="#c41f3b" strokeWidth="7" strokeLinecap="round" />
        <path d="M104 50L330 67" stroke="#e74859" strokeWidth="2" strokeLinecap="round" />
        <text x="217" y="8" textAnchor="middle" fontSize="13" fontWeight="700" letterSpacing=".6" style={blackStyle}>CUMEEIRA</text>
        <line x1="217" y1="19" x2="217" y2="48" stroke="#333" strokeWidth="1.5" markerEnd="url(#q31-arrow)" />
      </g>
      <path d="M170 540L350 420L530 540V670H170Z" fill="url(#q31-front-wall)" stroke="#b4aca0" strokeWidth="1.2" />
      <path d="M150 540L350 400L550 540" fill="none" stroke="#684234" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M154 536L350 403L546 536" fill="none" stroke="#9a6853" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="170" y1="540" x2="530" y2="540" stroke="#b8b0a4" />
      <circle cx="350" cy="400" r="8" fill="#c41f3b" /><circle cx="350" cy="400" r="3" fill="#ed6575" />
      <path d="M350 425V540H185" fill="none" stroke="#c41f3b" strokeWidth="2.4" />
      <path d="M334 524V540H350" fill="none" stroke="#c41f3b" strokeWidth="1.7" />
      <path d="M210 540A40 40 0 0 0 192 509" fill="none" stroke="#c41f3b" strokeWidth="1.7" />
      <text x="218" y="503" fontSize="20" fontStyle="italic" style={redStyle}>i%</text>
      <text x="365" y="486" fontSize="21" fontStyle="italic" style={redStyle}>x</text>
      <text x="260" y="568" fontSize="21" fontStyle="italic" style={redStyle}>y</text>
      <line x1="170" y1="605" x2="530" y2="605" stroke="#333" strokeWidth="1.6" />
      <rect x="320" y="594" width="60" height="23" fill="#ddd6cb" /><text x="350" y="611" textAnchor="middle" fontSize="16" style={blackStyle}>12m</text>
      <text x="350" y="710" textAnchor="middle" fontSize="15" fontWeight="700" letterSpacing=".4" style={blackStyle}>VISÃO FRONTAL</text>
    </svg>
  );
}

function Bond({ x1, y1, x2, y2, double = false }) {
  const length = Math.hypot(x2 - x1, y2 - y1) || 1;
  const dx = -(y2 - y1) / length * 2.4; const dy = (x2 - x1) / length * 2.4;
  return <g stroke="#202020" strokeWidth="1.8" strokeLinecap="round"><line x1={x1} y1={y1} x2={x2} y2={y2} />{double && <line x1={x1 + dx} y1={y1 + dy} x2={x2 + dx} y2={y2 + dy} />}</g>;
}

function Benzene({ cx, cy, r }) {
  const points = Array.from({ length: 6 }, (_, index) => { const angle = (-90 + index * 60) * Math.PI / 180; return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)]; });
  const ring = points.map((point, index) => `${index ? 'L' : 'M'}${point.join(',')}`).join('') + 'Z';
  return <g><path d={ring} fill="none" stroke="#202020" strokeWidth="1.8" />{[0,2,4].map((index) => { const a = points[index]; const b = points[(index + 1) % 6]; return <Bond key={index} x1={a[0] * .82 + cx * .18} y1={a[1] * .82 + cy * .18} x2={b[0] * .82 + cx * .18} y2={b[1] * .82 + cy * .18} />; })}</g>;
}

function PyrethroidCore() {
  return <g>
    <Bond x1={50} y1={95} x2={80} y2={75} double /><Bond x1={80} y1={75} x2={90} y2={95} />
    <Bond x1={50} y1={95} x2={30} y2={75} /><Bond x1={50} y1={95} x2={25} y2={112} />
    <text x="25" y="70" fontSize="18" style={blackStyle}>Cl</text><text x="4" y="122" fontSize="18" style={blackStyle}>Cl</text>
    <Bond x1={90} y1={95} x2={120} y2={115} /><Bond x1={120} y1={115} x2={115} y2={75} /><Bond x1={115} y1={75} x2={90} y2={95} />
    <Bond x1={115} y1={75} x2={98} y2={48} /><Bond x1={115} y1={75} x2={145} y2={48} />
    <Bond x1={120} y1={115} x2={150} y2={125} /><Bond x1={150} y1={125} x2={150} y2={153} double />
    <text x="143" y="172" fontSize="18" style={blackStyle}>O</text>
    <Bond x1={150} y1={125} x2={177} y2={108} /><text x="174" y="111" fontSize="18" style={blackStyle}>O</text>
    <Bond x1={190} y1={112} x2={200} y2={126} />
  </g>;
}

function Fuvest2027Q33() {
  return (
    <svg viewBox="0 0 800 240" role="img" aria-labelledby="q33-title" className="question-svg">
      <title id="q33-title">Fórmulas estruturais da permetrina e da transflutrina</title>
      <rect x="1" y="1" width="798" height="238" fill="#fff" stroke="#333" strokeWidth="1.5" />
      <line x1="400" y1="1" x2="400" y2="239" stroke="#333" strokeWidth="1.5" />
      <line x1="1" y1="195" x2="799" y2="195" stroke="#333" strokeWidth="1.5" />
      <g transform="translate(25 0)"><PyrethroidCore /><Bond x1={200} y1={126} x2={215} y2={108} /><Benzene cx={245} cy={90} r={36} /><Bond x1={276} y1={108} x2={291} y2={116} /><text x="289" y="125" fontSize="18" style={blackStyle}>O</text><Bond x1={307} y1={116} x2={316} y2={108} /><Benzene cx={345} cy={90} r={36} /></g>
      <g transform="translate(420 0)"><PyrethroidCore /><Bond x1={200} y1={126} x2={225} y2={108} /><Benzene cx={260} cy={90} r={42} />
        <Bond x1={260} y1={48} x2={260} y2={25} /><text x="253" y="20" fontSize="18" style={blackStyle}>F</text>
        <Bond x1={296} y1={69} x2={318} y2={50} /><text x="318" y="47" fontSize="18" style={blackStyle}>F</text>
        <Bond x1={296} y1={111} x2={321} y2={124} /><text x="324" y="131" fontSize="18" style={blackStyle}>F</text>
        <Bond x1={260} y1={132} x2={260} y2={157} /><text x="253" y="177" fontSize="18" style={blackStyle}>F</text>
      </g>
      <text x="200" y="224" textAnchor="middle" fontSize="20" style={blackStyle}>Permetrina</text>
      <text x="600" y="224" textAnchor="middle" fontSize="20" style={blackStyle}>Transflutrina</text>
    </svg>
  );
}

function CircuitNode({ x, y }) { return <circle cx={x} cy={y} r="5" fill="#fff" stroke="#202020" strokeWidth="2" />; }
function Resistor({ x, y, rotate = 0 }) { return <rect x={x - 18} y={y - 7} width="36" height="14" fill="#fff" stroke="#202020" strokeWidth="2" transform={`rotate(${rotate} ${x} ${y})`} />; }

function Fuvest2027Q35() {
  const nodes = [[83,132],[153,132],[297,132],[440,132],[584,132],[647,132],[83,277],[153,277],[297,277],[440,277],[647,277],[153,341],[297,341],[440,68],[584,68]];
  return (
    <svg viewBox="0 0 730 401" role="img" aria-labelledby="q35-title" className="question-svg question-svg-tall">
      <title id="q35-title">Circuito elétrico linear com entradas c1 e c2 e medições x e y</title>
      <defs><marker id="q35-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#202020" /></marker></defs>
      <g fill="none" stroke="#202020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M83 132H647M83 277H647M153 132V277M297 132V277M440 132V277M584 132V277" />
        <path d="M153 277L297 132M297 132L440 277M440 277L584 132" />
        <path d="M153 277V341M297 277V341M440 132V68M584 132V68" />
        <path d="M83 277C25 235 25 175 83 132" markerEnd="url(#q35-arrow)" />
        <path d="M647 277C705 235 705 175 647 132" markerEnd="url(#q35-arrow)" />
        <path d="M297 341C270 385 190 385 153 341" markerEnd="url(#q35-arrow)" />
        <path d="M584 68C550 20 470 20 440 68" markerEnd="url(#q35-arrow)" />
      </g>
      <Resistor x={225} y={132} /><Resistor x={368} y={132} /><Resistor x={510} y={132} /><Resistor x={225} y={277} />
      <Resistor x={153} y={205} rotate={90} /><Resistor x={297} y={205} rotate={90} /><Resistor x={440} y={205} rotate={90} /><Resistor x={584} y={205} rotate={90} />
      <Resistor x={225} y={205} rotate={-45} /><Resistor x={368} y={205} rotate={45} /><Resistor x={512} y={205} rotate={-45} />
      {nodes.map(([x,y], index) => <CircuitNode key={index} x={x} y={y} />)}
      <text x="34" y="220" fontSize="24" fontStyle="italic" style={blackStyle}>c₁</text>
      <text x="668" y="220" fontSize="24" fontStyle="italic" style={blackStyle}>c₂</text>
      <text x="210" y="390" fontSize="24" fontStyle="italic" style={blackStyle}>x</text>
      <text x="510" y="35" fontSize="24" fontStyle="italic" style={blackStyle}>y</text>
    </svg>
  );
}

export const LOTE03_DIAGRAMS = {
  fuvest2027Q30: <Fuvest2027Q30 />,
  fuvest2027Q31: <Fuvest2027Q31 />,
  fuvest2027Q33: <Fuvest2027Q33 />,
  fuvest2027Q35: <Fuvest2027Q35 />,
};
