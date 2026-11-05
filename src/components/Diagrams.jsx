import React from 'react';
import { WORLD_COUNTRIES } from './worldMapData.js';
import { LOTE03_DIAGRAMS } from './DiagramsLote03.jsx';
import { LOTE04_DIAGRAMS } from './DiagramsLote04.jsx';
import { LOTE05_DIAGRAMS } from './DiagramsLote05.jsx';
import { LOTE06_DIAGRAMS } from './DiagramsLote06.jsx';
import { RECREATED_DIAGRAMS } from './DiagramsRecreated.jsx';

const textStyle = { fontFamily: 'Inter, Arial, sans-serif', fill: '#263b36' };

function InclinedPlane() {
  return (
    <svg viewBox="0 0 640 350" role="img" aria-labelledby="plane-title" className="question-svg">
      <title id="plane-title">Bloco sobre um plano inclinado de 30 graus</title>
      <defs>
        <marker id="plane-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#5675d6" />
        </marker>
        <pattern id="ground-hatch" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
          <line x1="0" y1="0" x2="0" y2="12" stroke="#b7c0ba" strokeWidth="2" />
        </pattern>
      </defs>
      <path d="M100 290 L500 59 L500 290 Z" fill="#f3f5f1" stroke="#38534b" strokeWidth="2.4" strokeLinejoin="round" />
      <rect x="94" y="291" width="414" height="18" fill="url(#ground-hatch)" opacity=".7" />
      <line x1="86" y1="290" x2="520" y2="290" stroke="#38534b" strokeWidth="2.4" />
      <g transform="translate(320 157) rotate(-30)">
        <rect x="-51" y="-68" width="102" height="63" rx="5" fill="#dfe7ff" stroke="#5675d6" strokeWidth="2.4" />
        <rect x="-43" y="-60" width="86" height="47" rx="2" fill="#edf1ff" />
        <text x="0" y="-31" textAnchor="middle" fontSize="17" fontWeight="650" style={textStyle}>m = 2 kg</text>
      </g>
      <line x1="100" y1="290" x2="181" y2="290" stroke="#82918b" strokeWidth="1.6" strokeDasharray="4 4" />
      <path d="M172 290 A72 72 0 0 0 162.35 254" fill="none" stroke="#5675d6" strokeWidth="2" />
      <text x="180" y="263" fontSize="18" fontWeight="650" fill="#5675d6" style={textStyle}>30°</text>
      <line x1="225" y1="181" x2="158" y2="220" stroke="#5675d6" strokeWidth="2.4" markerEnd="url(#plane-arrow)" />
      <text x="137" y="177" fontSize="15" fill="#5675d6" style={textStyle}>movimento</text>
      <text x="384" y="239" fontSize="15" fill="#7c8a84" style={textStyle} transform="rotate(-30 384 239)">sem atrito</text>
    </svg>
  );
}

function VelocityGraph() {
  return (
    <svg viewBox="0 0 640 350" role="img" aria-labelledby="graph-title" className="question-svg">
      <title id="graph-title">Gráfico de velocidade por tempo com aceleração até dez segundos e velocidade constante até vinte segundos</title>
      <defs>
        <marker id="axis-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#52645d" />
        </marker>
      </defs>
      {[60, 115, 170, 225].map((y) => <line key={y} x1="100" y1={y} x2="520" y2={y} stroke="#e5e9e4" strokeWidth="1" strokeDasharray="4 6" />)}
      {[300, 500].map((x) => <line key={x} x1={x} y1="60" x2={x} y2="280" stroke="#e5e9e4" strokeWidth="1" strokeDasharray="4 6" />)}
      <polygon points="100,280 300,60 500,60 500,280" fill="#e9efff" />
      <line x1="100" y1="280" x2="545" y2="280" stroke="#52645d" strokeWidth="2" markerEnd="url(#axis-arrow)" />
      <line x1="100" y1="280" x2="100" y2="35" stroke="#52645d" strokeWidth="2" markerEnd="url(#axis-arrow)" />
      <path d="M100 280 L300 60 L500 60" fill="none" stroke="#5675d6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="300" cy="60" r="5" fill="#5675d6" />
      <circle cx="500" cy="60" r="5" fill="#5675d6" />
      <line x1="300" y1="275" x2="300" y2="285" stroke="#52645d" strokeWidth="2" />
      <line x1="500" y1="275" x2="500" y2="285" stroke="#52645d" strokeWidth="2" />
      <line x1="95" y1="170" x2="105" y2="170" stroke="#52645d" strokeWidth="2" />
      <line x1="95" y1="60" x2="105" y2="60" stroke="#52645d" strokeWidth="2" />
      <text x="94" y="302" textAnchor="middle" fontSize="15" style={textStyle}>0</text>
      <text x="300" y="305" textAnchor="middle" fontSize="15" style={textStyle}>10</text>
      <text x="500" y="305" textAnchor="middle" fontSize="15" style={textStyle}>20</text>
      <text x="78" y="176" textAnchor="end" fontSize="15" style={textStyle}>10</text>
      <text x="78" y="66" textAnchor="end" fontSize="15" style={textStyle}>20</text>
      <text x="537" y="318" textAnchor="end" fontSize="16" fontWeight="600" style={textStyle}>t (s)</text>
      <text x="46" y="34" fontSize="16" fontWeight="600" style={textStyle}>v (m/s)</text>
      <text x="360" y="170" textAnchor="middle" fontSize="14" fill="#7384bb" style={textStyle}>área = deslocamento</text>
    </svg>
  );
}

function CircleTriangle() {
  return (
    <svg viewBox="0 0 640 350" role="img" aria-labelledby="circle-title" className="question-svg">
      <title id="circle-title">Triângulo retângulo inscrito em circunferência com AB como diâmetro</title>
      <circle cx="320" cy="175" r="130" fill="#fafbf8" stroke="#38534b" strokeWidth="2.4" />
      <line x1="190" y1="175" x2="450" y2="175" stroke="#93a39b" strokeWidth="1.8" strokeDasharray="6 5" />
      <polygon points="190,175 284,50 450,175" fill="#f0ebf8" stroke="#805daf" strokeWidth="2.8" strokeLinejoin="round" />
      <path d="M276 61 L287 70 L295 58" fill="none" stroke="#38534b" strokeWidth="2" />
      <circle cx="320" cy="175" r="4" fill="#38534b" />
      <circle cx="190" cy="175" r="4.5" fill="#805daf" />
      <circle cx="450" cy="175" r="4.5" fill="#805daf" />
      <circle cx="284" cy="50" r="4.5" fill="#805daf" />
      <text x="174" y="198" fontSize="18" fontWeight="650" style={textStyle}>A</text>
      <text x="458" y="198" fontSize="18" fontWeight="650" style={textStyle}>B</text>
      <text x="279" y="32" fontSize="18" fontWeight="650" style={textStyle}>C</text>
      <text x="333" y="197" fontSize="18" fontWeight="650" style={textStyle}>O</text>
      <text x="205" y="100" fontSize="16" fontWeight="600" fill="#805daf" style={textStyle} transform="rotate(-53 205 100)">6 cm</text>
      <text x="394" y="91" fontSize="16" fontWeight="600" fill="#805daf" style={textStyle} transform="rotate(37 394 91)">8 cm</text>
      <text x="318" y="158" textAnchor="middle" fontSize="14" fill="#7c8a84" style={textStyle}>diâmetro</text>
    </svg>
  );
}

function Molecule() {
  return (
    <svg viewBox="0 0 640 270" role="img" aria-labelledby="molecule-title" className="question-svg">
      <title id="molecule-title">Fórmula estrutural CH3 COOH</title>
      <text x="100" y="157" fontSize="34" fontWeight="500" style={textStyle}>CH<tspan baselineShift="sub" fontSize="22">3</tspan></text>
      <line x1="182" y1="143" x2="282" y2="143" stroke="#38534b" strokeWidth="3" />
      <text x="291" y="156" fontSize="36" fontWeight="500" style={textStyle}>C</text>
      <line x1="298" y1="118" x2="298" y2="72" stroke="#38534b" strokeWidth="3" />
      <line x1="311" y1="118" x2="311" y2="72" stroke="#38534b" strokeWidth="3" />
      <text x="291" y="56" fontSize="36" fontWeight="500" style={textStyle}>O</text>
      <line x1="326" y1="143" x2="409" y2="143" stroke="#38534b" strokeWidth="3" />
      <text x="420" y="156" fontSize="36" fontWeight="500" style={textStyle}>O</text>
      <text x="453" y="156" fontSize="36" fontWeight="500" style={textStyle}>H</text>
      <text x="320" y="226" textAnchor="middle" fontSize="14" fill="#84918c" style={textStyle}>ácido etanoico</text>
    </svg>
  );
}

function FoodChain() {
  const items = [
    { name: 'capim', x: 65, color: '#e5f2e8', stroke: '#71a17f' },
    { name: 'gafanhoto', x: 210, color: '#f2efdf', stroke: '#a89d58' },
    { name: 'sapo', x: 355, color: '#e5f2e8', stroke: '#71a17f' },
    { name: 'cobra', x: 500, color: '#f3eadf', stroke: '#a88960' },
    { name: 'gavião', x: 645, color: '#e8edf2', stroke: '#788d9c' },
  ];
  return (
    <svg viewBox="0 0 760 190" role="img" aria-labelledby="food-title" className="question-svg">
      <title id="food-title">Cadeia alimentar: capim, gafanhoto, sapo, cobra e gavião</title>
      <defs>
        <marker id="food-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#71847b" />
        </marker>
      </defs>
      {[140, 285, 430, 575].map((x) => <line key={x} x1={x} y1="88" x2={x + 48} y2="88" stroke="#71847b" strokeWidth="2" markerEnd="url(#food-arrow)" />)}
      {items.map((item) => (
        <g key={item.name}>
          <rect x={item.x - 57} y="52" width="114" height="72" rx="18" fill={item.color} stroke={item.stroke} strokeWidth="1.8" />
          <circle cx={item.x} cy="73" r="6" fill={item.stroke} opacity=".85" />
          <text x={item.x} y="103" textAnchor="middle" fontSize="16" fontWeight="600" style={textStyle}>{item.name}</text>
        </g>
      ))}
      <text x="380" y="158" textAnchor="middle" fontSize="13" fill="#7c8a84" style={textStyle}>sentido do fluxo de matéria e de energia →</text>
    </svg>
  );
}

function MapScale() {
  return (
    <svg viewBox="0 0 640 340" role="img" aria-labelledby="map-title" className="question-svg">
      <title id="map-title">Mapa esquemático com duas praças separadas por quatro centímetros</title>
      <defs>
        <clipPath id="map-clip"><rect x="35" y="25" width="570" height="250" rx="14" /></clipPath>
      </defs>
      <rect x="35" y="25" width="570" height="250" rx="14" fill="#f5f2e9" stroke="#ccd3ca" strokeWidth="1.6" />
      <g clipPath="url(#map-clip)">
        <path d="M-10 210 C120 140 150 260 275 185 S480 110 660 185 L660 260 L-10 260Z" fill="#dcebf0" />
        <path d="M-10 210 C120 140 150 260 275 185 S480 110 660 185" fill="none" stroke="#b5d5df" strokeWidth="4" />
        <path d="M55 80 L200 25 L280 275 M170 20 L215 275 M350 20 L325 275 M475 20 L535 275 M35 120 L605 80 M35 205 L605 155" fill="none" stroke="#fff" strokeWidth="11" />
        <path d="M55 80 L200 25 L280 275 M170 20 L215 275 M350 20 L325 275 M475 20 L535 275 M35 120 L605 80 M35 205 L605 155" fill="none" stroke="#d7d7ce" strokeWidth="1.2" />
        <path d="M65 38 L150 38 L130 92 L55 92Z M405 175 L485 160 L505 235 L420 250Z" fill="#dce9d7" />
        <path d="M260 70 L320 58 L338 112 L278 124Z M520 42 L590 42 L590 105 L535 105Z" fill="#e5dfd3" />
      </g>
      <line x1="155" y1="88" x2="455" y2="190" stroke="#3a8d9c" strokeWidth="2.4" strokeDasharray="7 5" />
      <g>
        <circle cx="155" cy="88" r="12" fill="#fff" stroke="#3a8d9c" strokeWidth="3" />
        <circle cx="155" cy="88" r="4" fill="#3a8d9c" />
        <rect x="105" y="45" width="100" height="27" rx="8" fill="#fff" opacity=".95" />
        <text x="155" y="64" textAnchor="middle" fontSize="14" fontWeight="650" style={textStyle}>Praça A</text>
      </g>
      <g>
        <circle cx="455" cy="190" r="12" fill="#fff" stroke="#3a8d9c" strokeWidth="3" />
        <circle cx="455" cy="190" r="4" fill="#3a8d9c" />
        <rect x="405" y="204" width="100" height="27" rx="8" fill="#fff" opacity=".95" />
        <text x="455" y="223" textAnchor="middle" fontSize="14" fontWeight="650" style={textStyle}>Praça B</text>
      </g>
      <rect x="272" y="113" width="70" height="30" rx="9" fill="#3a8d9c" />
      <text x="307" y="134" textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff" style={textStyle}>4 cm</text>
      <text x="38" y="310" fontSize="14" fontWeight="650" style={textStyle}>Escala 1:50.000</text>
      <g transform="translate(410 292)">
        <rect x="0" y="0" width="70" height="9" fill="#38534b" />
        <rect x="70" y="0" width="70" height="9" fill="#fff" stroke="#38534b" strokeWidth="1" />
        <text x="0" y="27" fontSize="12" style={textStyle}>0</text>
        <text x="140" y="27" textAnchor="end" fontSize="12" style={textStyle}>1 km</text>
      </g>
    </svg>
  );
}

function Fuvest2027Q12() {
  const bars = [
    { value: 126, x: 135, color: '#ffd62e', label: 'Extração e britamento de pedras para construção' },
    { value: 341, x: 235, color: '#f3a261', label: 'Administração pública em geral' },
    { value: 186, x: 335, color: '#ffe7a0', label: 'Construção de edifícios' },
    { value: 184, x: 435, color: '#a67c18', label: 'Cultivo de café' },
    { value: 601, x: 535, color: '#b3a58c', label: 'Obras de alvenaria' },
  ];
  const baseY = 325;
  const height = 250;
  return (
    <svg viewBox="0 0 720 600" role="img" aria-labelledby="fuvest-q12-title" className="question-svg question-svg-tall">
      <title id="fuvest-q12-title">Atividades com mais resgates: 126, 341, 186, 184 e 601</title>
      <text x="375" y="30" textAnchor="middle" fontSize="20" fontWeight="700" style={textStyle}>Atividades com mais resgates (CNAE)</text>
      {Array.from({ length: 8 }, (_, index) => {
        const value = index * 100;
        const y = baseY - (value / 700) * height;
        return <g key={value}><line x1="105" y1={y} x2="630" y2={y} stroke="#d5d7d3" strokeWidth="1.2" /><text x="88" y={y + 5} textAnchor="end" fontSize="14" style={textStyle}>{value}</text></g>;
      })}
      <text x="28" y="200" textAnchor="middle" fontSize="15" style={textStyle} transform="rotate(-90 28 200)">Resgates</text>
      {bars.map((bar) => {
        const barHeight = (bar.value / 700) * height;
        return <g key={bar.label}><rect x={bar.x} y={baseY - barHeight} width="66" height={barHeight} fill={bar.color} /><text x={bar.x + 33} y={baseY - barHeight - 10} textAnchor="middle" fontSize="15" fontWeight="700" style={textStyle}>{bar.value}</text></g>;
      })}
      <text x="368" y="360" textAnchor="middle" fontSize="15" style={textStyle}>Atividades</text>
      <g transform="translate(145 392)">
        {bars.map((bar, index) => <g key={bar.label} transform={`translate(0 ${index * 33})`}><rect x="0" y="0" width="20" height="20" rx="1.5" fill={bar.color} /><text x="30" y="15" fontSize="13.5" style={textStyle}>{bar.label}</text></g>)}
      </g>
      <text x="108" y="578" fontSize="12.5" fill="#65736c" style={textStyle}>*CNAE: Classificação Nacional de Atividades Econômicas.</text>
    </svg>
  );
}

function Fuvest2027Q21() {
  const periods = ['1550–1574', '1575–1599', '1600–1624', '1625–1649', '1650–1674', '1675–1699'];
  const series = [
    { name: 'Potosí (Andes)', color: '#247ca6', values: [50, 180, 150, 120, 90, 70] },
    { name: 'Nova Espanha (México)', color: '#ef8e22', values: [40, 100, 140, 160, 180, 210] },
  ];
  const x = (index) => 135 + index * 102;
  const y = (value) => 330 - ((value - 25) / 195) * 255;
  return (
    <svg viewBox="0 0 760 450" role="img" aria-labelledby="silver-title" className="question-svg question-svg-tall">
      <title id="silver-title">Produção estimada de prata entre 1550 e 1699 em Potosí e Nova Espanha</title>
      <text x="380" y="27" textAnchor="middle" fontSize="18" fontWeight="650" style={textStyle}>Produção estimada de prata (1550–1699)</text>
      <rect x="105" y="55" width="560" height="275" fill="#fff" stroke="#65736c" strokeWidth="1.2" />
      {[50, 75, 100, 125, 150, 175, 200].map((tick) => <g key={tick}><line x1="105" y1={y(tick)} x2="665" y2={y(tick)} stroke="#eef0ed" /><text x="92" y={y(tick) + 4} textAnchor="end" fontSize="12" style={textStyle}>{tick}</text></g>)}
      <text x="26" y="197" textAnchor="middle" fontSize="13" style={textStyle} transform="rotate(-90 26 197)">Produção estimada (toneladas métricas)</text>
      <text x="385" y="427" textAnchor="middle" fontSize="13" style={textStyle}>Períodos</text>
      {periods.map((period, index) => <g key={period}><line x1={x(index)} y1="330" x2={x(index)} y2="336" stroke="#65736c" /><text x={x(index)} y="351" textAnchor="end" fontSize="11.5" style={textStyle} transform={`rotate(-42 ${x(index)} 351)`}>{period}</text></g>)}
      {series.map((serie) => <g key={serie.name}>
        <polyline points={serie.values.map((value, index) => `${x(index)},${y(value)}`).join(' ')} fill="none" stroke={serie.color} strokeWidth="2.5" strokeLinejoin="round" />
        {serie.values.map((value, index) => <circle key={index} cx={x(index)} cy={y(value)} r="4.5" fill={serie.color} />)}
      </g>)}
      <g transform="translate(120 70)"><rect width="285" height="48" fill="#fff" stroke="#d4dad4" /><line x1="12" y1="14" x2="40" y2="14" stroke="#247ca6" strokeWidth="2.5" /><circle cx="26" cy="14" r="4" fill="#247ca6" /><text x="48" y="18" fontSize="12" style={textStyle}>Potosí (Andes)</text><line x1="12" y1="34" x2="40" y2="34" stroke="#ef8e22" strokeWidth="2.5" /><circle cx="26" cy="34" r="4" fill="#ef8e22" /><text x="48" y="38" fontSize="12" style={textStyle}>Nova Espanha (México)</text></g>
    </svg>
  );
}

function Fuvest2027Q22() {
  const Ship = ({ x, tilt = 0, fluid = false }) => (
    <g transform={`translate(${x} 0) rotate(${tilt} 150 220)`}>
      <path d="M45 177 H255 L237 292 H66 Z" fill="#aeb3b6" stroke="#4d595c" strokeWidth="2" />
      <path d="M73 193 H227 L216 274 H86 Z" fill="#f4f5f2" stroke="#6f797b" strokeWidth="1.4" />
      {fluid ? <path d="M79 225 Q119 246 151 252 Q190 259 222 211 L216 274 H86 Z" fill="#f5c51f" stroke="#d9a90d" strokeWidth="1.5" /> : <path d="M82 249 L103 224 L126 204 L151 190 L178 202 L202 225 L221 248 L216 274 H86 Z" fill="url(#grain-fill)" stroke="#d9a90d" strokeWidth="1.3" strokeLinejoin="round" />}
      <path d="M35 168 H265 M45 158 H255" stroke="#4d595c" strokeWidth="3" />
      {[55, 75, 95, 115, 135, 155, 175, 195, 215, 235, 255].map((cx) => <path key={cx} d={`M${cx} 158 V168`} stroke="#4d595c" strokeWidth="1.2" />)}
      <path d="M104 157 V103 H171 V157 M115 103 V79 H155 V103 M127 79 V56 H144 V79" fill="#f5f6f3" stroke="#4d595c" strokeWidth="2" />
      {[113, 129, 145, 159].map((cx) => <rect key={cx} x={cx} y="113" width="9" height="10" fill="#aab9bd" />)}
      {[113, 127, 141, 155].map((cx) => <rect key={cx} x={cx} y="132" width="8" height="7" fill="#c1cbca" />)}
      <path d="M105 129 H170 M105 145 H170 M121 80 V102 M150 80 V102" stroke="#7c8889" strokeWidth="1" />
      <path d="M73 157 V119 M62 157 V132 M224 157 V121 M238 157 V135 M73 119 L53 145 M224 121 L246 145 M73 119 L91 150 M224 121 L207 150" fill="none" stroke="#4d595c" strokeWidth="2" />
      <path d="M92 169 V157 M208 169 V157 M89 191 H213 M93 192 L87 265 M207 192 L215 265" stroke="#4d595c" strokeWidth="1.5" />
      {[105, 127, 150, 173, 195].map((cx) => <circle key={cx} cx={cx} cy="151" r="2.2" fill="#6f797b" />)}
    </g>
  );
  return (
    <svg viewBox="0 0 760 385" role="img" aria-labelledby="ships-title" className="question-svg question-svg-tall">
      <title id="ships-title">Navio com minério estável e navio inclinado com carga fluidificada</title>
      <defs><pattern id="grain-fill" width="9" height="9" patternUnits="userSpaceOnUse"><rect width="9" height="9" fill="#eeb92a" /><circle cx="2" cy="3" r="1" fill="#d99b16" /><circle cx="7" cy="7" r="1" fill="#f9d65a" /></pattern></defs>
      <text x="190" y="30" textAnchor="middle" fontSize="13.5" fontWeight="650" style={textStyle}>situação do navio e da carga logo</text>
      <text x="190" y="49" textAnchor="middle" fontSize="13.5" fontWeight="650" style={textStyle}>após o carregamento do minério</text>
      <text x="570" y="30" textAnchor="middle" fontSize="13.5" fontWeight="650" style={textStyle}>situação do navio e da carga</text>
      <text x="570" y="49" textAnchor="middle" fontSize="13.5" fontWeight="650" style={textStyle}>durante o transporte</text>
      <rect x="35" y="248" width="310" height="100" fill="#b8c8ef" />
      <rect x="415" y="248" width="310" height="100" fill="#b8c8ef" />
      <path d="M35 248 H345 M415 248 H725" stroke="#8ca9df" strokeWidth="2" />
      <Ship x={40} />
      <Ship x={420} tilt={-13} fluid />
    </svg>
  );
}

function Fuvest2027Q23() {
  const X = [1, .9986, .9954, .99, .9822, .973, .96, .9427, .9216, .8962, .8679, .835, .7986, .7597, .7186, .6732, .6213, .5722, .5322];
  const Y = [0, .062, .124, .186, .248, .31, .372, .434, .4958, .5571, .6176, .6769, .7346, .7903, .8435, .8936, .9394, .9761, 1];
  const project = (lon, lat) => {
    const a = Math.abs(lat); const i = Math.min(Math.floor(a / 5), 17); const t = (a - i * 5) / 5;
    const xf = X[i] + (X[i + 1] - X[i]) * t; const yf = Y[i] + (Y[i + 1] - Y[i]) * t;
    return [400 + .8487 * 140 * (lon * Math.PI / 180) * xf, 300 - 1.3523 * 140 * yf * (lat >= 0 ? 1 : -1)];
  };
  const pathFrom = (points, close = false) => points.map((point, index) => `${index ? 'L' : 'M'}${project(point[0], point[1]).join(',')}`).join('') + (close ? 'Z' : '');
  const outline = pathFrom([...Array.from({ length: 73 }, (_, i) => [-180 + i * 5, 90]), ...Array.from({ length: 37 }, (_, i) => [180, 90 - i * 5]), ...Array.from({ length: 73 }, (_, i) => [180 - i * 5, -90]), ...Array.from({ length: 37 }, (_, i) => [-180, -90 + i * 5])], true);
  const lines = [
    { lat: 66.5, label: 'Círculo Polar Ártico' }, { lat: 23.5, label: 'Trópico de Câncer' },
    { lat: 0, label: 'Equador' }, { lat: -23.5, label: 'Trópico de Capricórnio' },
    { lat: -66.5, label: 'Círculo Polar Antártico' },
  ];
  const porto = project(-35, -9); const luanda = project(13, -9);
  return (
    <svg viewBox="0 0 800 510" role="img" aria-labelledby="world-title" className="question-svg question-svg-tall">
      <title id="world-title">Mapa-múndi com Porto de Galinhas e Luanda sobre o paralelo 9 graus Sul</title>
      <path d={outline} fill="#abc9e8" stroke="#6e8799" strokeWidth="1.2" />
      <g fill="#f2eedb" stroke="#8f9b91" strokeWidth=".55">{WORLD_COUNTRIES.map((d, index) => <path key={index} d={d} />)}</g>
      {lines.map((line) => {
        const d = pathFrom(Array.from({ length: 73 }, (_, i) => [-180 + i * 5, line.lat]));
        const labelPoint = project(-178, line.lat);
        return <g key={line.label}><path d={d} fill="none" stroke={line.lat === 0 ? '#3e6078' : '#668298'} strokeWidth={line.lat === 0 ? '1.4' : '1'} strokeDasharray={line.lat === 0 ? '' : '5 3'} /><text x={Math.max(30, labelPoint[0] + 4)} y={labelPoint[1] - 4} fontSize="10.5" fill="#334f62" style={textStyle}>{line.label}</text></g>;
      })}
      <path d={pathFrom([[-35, -9], [13, -9]])} stroke="#b34f64" strokeWidth="2.5" />
      <circle cx={porto[0]} cy={porto[1]} r="4.5" fill="#b34f64" /><circle cx={luanda[0]} cy={luanda[1]} r="4.5" fill="#b34f64" />
      <text x={porto[0]} y={porto[1] + 15} textAnchor="middle" fontSize="10.5" fontWeight="650" style={textStyle}>Porto de</text>
      <text x={porto[0]} y={porto[1] + 27} textAnchor="middle" fontSize="10.5" fontWeight="650" style={textStyle}>Galinhas</text>
      <text x={luanda[0]} y={luanda[1] + 17} textAnchor="middle" fontSize="10.5" fontWeight="650" style={textStyle}>Luanda</text>
    </svg>
  );
}

export default function Diagram({ type }) {
  const diagrams = {
    ...LOTE03_DIAGRAMS,
    ...LOTE04_DIAGRAMS,
    ...LOTE05_DIAGRAMS,
    ...LOTE06_DIAGRAMS,
    ...RECREATED_DIAGRAMS,
    inclinedPlane: <InclinedPlane />,
    velocityGraph: <VelocityGraph />,
    circleTriangle: <CircleTriangle />,
    molecule: <Molecule />,
    foodChain: <FoodChain />,
    mapScale: <MapScale />,
    fuvest2027Q12: <Fuvest2027Q12 />,
    fuvest2027Q21: <Fuvest2027Q21 />,
    fuvest2027Q22: <Fuvest2027Q22 />,
    fuvest2027Q23: <Fuvest2027Q23 />,
  };
  return diagrams[type] || null;
}
