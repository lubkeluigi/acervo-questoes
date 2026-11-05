import React from 'react';
import { Q44_AGRICULTURE_TRACES } from './q44AgricultureTrace.js';

const ink = { fontFamily: 'Arial, Helvetica, sans-serif', fill: '#171717' };
const magenta = '#b34db5';
const paleMagenta = '#e8c3e8';

function VerticalText({ x, y, children, anchor = 'start', size = 12, fill = '#171717', weight = 500 }) {
  return <g transform={`rotate(-90 ${x} ${y})`}><text x={x} y={y} textAnchor={anchor} fontSize={size} fontWeight={weight} style={{ ...ink, fill }}>{children}</text></g>;
}

function SubnutritionChart() {
  const countries = ['ARGÉLIA','ARÁBIA SAUDITA','EGITO','EMIRADOS ÁRABES UNIDOS','IRAQUE','JORDÂNIA','KUWAIT','LÍBANO','MARROCOS','OMÃ','TUNÍSIA','IÊMEN'];
  const recent = [2.5,4.5,5,3,15.5,16.3,2,10.8,5.3,9.5,3.5,41.5];
  const older = [7.8,4.8,5.7,4.8,22.3,9.8,2.7,7.3,6.1,12.1,4.4,26.3];
  const top = 150; const bottom = 565; const scale = (value) => bottom - value / 50 * (bottom - top);
  return <svg viewBox="0 0 520 590" role="img" aria-labelledby="q44-sub-title" className="question-svg">
    <title id="q44-sub-title">Evolução da subnutrição em países da África e do Oriente Médio</title>
    <text x="8" y="27" fontSize="23" fontWeight="700" style={ink}>Evolução da sub-nutrição</text>
    <rect x="10" y="42" width="18" height="18" fill={magenta} /><line x1="29" y1="51" x2="42" y2="51" stroke="#333" /><text x="47" y="56" fontSize="15" style={ink}>2019-2021</text>
    <rect x="10" y="69" width="18" height="18" fill={paleMagenta} stroke="#555" /><line x1="29" y1="78" x2="42" y2="78" stroke="#333" /><text x="47" y="83" fontSize="15" style={ink}>2000-2002</text>
    <text x="8" y="116" fontSize="15" style={ink}>Em porcentagem da população total</text>
    {[0,10,20,30,40,50].map((tick) => <g key={tick}><line x1="48" y1={scale(tick)} x2="505" y2={scale(tick)} stroke="#c8c8c8" strokeWidth=".8" /><text x="36" y={scale(tick)+5} textAnchor="end" fontSize="15" style={ink}>{tick}</text></g>)}
    {countries.map((country,index) => { const x=62+index*36.5; const center=x+13; return <g key={country}>
      <rect x={x} y={top} width="26" height={bottom-top} fill="#e7e7e7" stroke="#777" strokeWidth=".6" />
      <rect x={x} y={scale(recent[index])} width="26" height={bottom-scale(recent[index])} fill={magenta} />
      <rect x={x} y={scale(older[index])-4} width="26" height="8" fill={paleMagenta} stroke="#555" strokeWidth=".7" />
      <VerticalText x={center+4} y={top+12} anchor="end" size={11.5} weight={600}>{country}</VerticalText>
    </g>; })}
    <line x1="48" y1={bottom} x2="505" y2={bottom} stroke="#333" strokeWidth="1.3" />
  </svg>;
}

function CerealImportChart() {
  const countries = ['SÍRIA','IRÃ','EGITO','IRAQUE','TUNÍSIA','MARROCOS','ARGÉLIA','OMÃ','LÍBIA','LÍBANO','IÊMEN','ARÁBIA SAUDITA','KUWAIT','EMIRADOS ÁRABES UNIDOS','JORDÂNIA'];
  const values = [29.2,36.6,47.4,50,65.4,65.7,73.8,82.2,90.6,92.7,92.8,93.7,96.2,100,100];
  const labels = ['29,2%','36,6%','47,4%','50%','65,4%','65,7%','73,8%','82,2%','90,6%','92,7%','92,8%','93,7%','96,2%','100%','100%'];
  const top=90; const bottom=630; const scale=(value)=>bottom-value/100*(bottom-top);
  return <svg viewBox="0 0 520 655" role="img" aria-labelledby="q44-import-title" className="question-svg">
    <title id="q44-import-title">Dependência da importação de cereais</title>
    <text x="8" y="27" fontSize="22" fontWeight="700" style={ink}>Dependência da importação de cereais</text>
    <text x="8" y="52" fontSize="14" style={ink}>Em porcentagem no período de 3 anos (2018 a 2020)</text>
    {Array.from({length:11},(_,index)=>index*10).map((tick)=><g key={tick}><line x1="43" y1={scale(tick)} x2="510" y2={scale(tick)} stroke="#d0d0d0" strokeWidth=".7" /><text x="33" y={scale(tick)+4} textAnchor="end" fontSize="12" style={ink}>{tick}</text></g>)}
    {countries.map((country,index)=>{ const x=53+index*30.3; const center=x+11; return <g key={country}>
      <rect x={x} y={top} width="22" height={bottom-top} fill="#e5e5e5" stroke="#777" strokeWidth=".55" />
      <rect x={x} y={scale(values[index])} width="22" height={bottom-scale(values[index])} fill={magenta} />
      <VerticalText x={center+4} y={bottom-10} size={11.5} fill="#fff" weight={600}>{country}</VerticalText>
      <VerticalText x={center+4} y={scale(values[index])+12} anchor="end" size={11.5} fill="#fff" weight={600}>{labels[index]}</VerticalText>
    </g>; })}
    <line x1="43" y1={bottom} x2="510" y2={bottom} stroke="#333" strokeWidth="1.2" />
  </svg>;
}

const agricultureSeries = [
  { name: 'Marrocos', color: '#f056bd', dash: '' },
  { name: 'Egito', color: '#33cc33', dash: '10 4 2 4' },
  { name: 'Irã', color: '#000000', dash: '' },
  { name: 'Iraque', color: '#cc9933', dash: '10 6' },
  { name: 'Iêmen', color: '#0000ff', dash: '2 5' },
  { name: 'Argélia', color: '#ff0000', dash: '12 6' },
];

function AgricultureLegend({ series, x, y }) {
  return <g><line x1={x} y1={y} x2={x + 47} y2={y} stroke={series.color} strokeWidth="4" strokeDasharray={series.dash} strokeLinecap={series.name === 'Iêmen' ? 'round' : 'butt'} /><text x={x + 59} y={Number(y) + 7} fontSize="20" style={ink}>{series.name}</text></g>;
}

function AgricultureChart() {
  const x = (year) => 39.5 + (year - 1970) * (671 - 39.5) / 50;
  const y = (value) => 408 - value / 30 * (408 - 140);
  return <svg viewBox="0 0 696 490" role="img" aria-labelledby="q44-pib-title" className="question-svg chart-wide agriculture-chart">
    <title id="q44-pib-title">Participação do setor agrícola em porcentagem do PIB</title>
    <text x="5" y="28" fontSize="30" fontWeight="700" style={ink}>Participação do setor agrícola,</text>
    <text x="5" y="61" fontSize="30" fontWeight="700" style={ink}>em porcentagem do PIB</text>
    <path d="M34 140H671M40 140V408" fill="none" stroke="#111" strokeWidth="1.5" />
    {Array.from({ length: 11 }, (_, index) => 1970 + index * 5).map((year) => <g key={year}><line x1={x(year)} y1="132" x2={x(year)} y2="140" stroke="#111" /><text x={x(year)} y="125" textAnchor="middle" fontSize="20" style={ink}>{[1970, 2000, 2020].includes(year) ? year : String(year).slice(2)}</text></g>)}
    {[0, 5, 10, 15, 20, 25, 30].map((value) => <g key={value}><line x1="33" y1={y(value)} x2="40" y2={y(value)} stroke="#111" />{value % 10 === 0 && <text x="27" y={y(value) + 7} textAnchor="end" fontSize="20" style={ink}>{value}</text>}</g>)}
    {agricultureSeries.map((series) => <path key={series.name} d={Q44_AGRICULTURE_TRACES[series.name]} fill={series.color} fillRule="evenodd" />)}
    {agricultureSeries.slice(0, 3).map((series, index) => <AgricultureLegend key={series.name} series={series} x={[53, 239, 388][index]} y="437" />)}
    {agricultureSeries.slice(3).map((series, index) => <AgricultureLegend key={series.name} series={series} x={[53, 239, 388][index]} y="475" />)}
  </svg>;
}

function Fuvest2027Q44() {
  return <div className="chart-set"><SubnutritionChart /><CerealImportChart /><AgricultureChart /></div>;
}

function Banknote({ x, y, rotate = 0 }) {
  return <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
    <rect x="0" y="0" width="64" height="142" fill="#f4f4f4" stroke="#222" strokeWidth="2" />
    <rect x="6" y="6" width="52" height="130" fill="none" stroke="#777" strokeWidth=".8" />
    <text x="8" y="24" fontSize="20" fontWeight="700" style={ink}>80</text><text x="38" y="132" fontSize="20" fontWeight="700" style={ink}>80</text>
    <ellipse cx="33" cy="70" rx="17" ry="25" fill="#d4d4d4" stroke="#777" /><path d="M23 83Q33 58 44 83M19 99H49M18 106H47M18 42H48" fill="none" stroke="#888" strokeWidth="1" />
  </g>;
}

function Glass({ x, y }) {
  return <g transform={`translate(${x} ${y})`} fill="none" stroke="#222" strokeWidth="2">
    <path d="M5 15L15 137Q65 157 125 137L135 15" fill="#fff" /><ellipse cx="70" cy="15" rx="65" ry="12" fill="#fff" />
    <path d="M12 77Q70 91 128 77M15 137Q70 151 125 137M20 128Q70 140 120 128" />
    <ellipse cx="70" cy="77" rx="58" ry="9" fill="#e8e8e8" stroke="#555" strokeWidth="1.2" />
  </g>;
}

function Fuvest2027Q41() {
  return <svg viewBox="0 0 740 320" role="img" aria-labelledby="q41-title" className="question-svg">
    <title id="q41-title">Papel embebido em álcool e água sendo retirado do recipiente e colocado na chama</title>
    <defs><marker id="q41-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#222" /></marker></defs>
    <g transform="translate(10 50)"><Banknote x={68} y={5} rotate={-8} /><Glass x={20} y={105} /><path d="M100 20L155 -35M108 27L163 -28" stroke="#222" strokeWidth="2" /><line x1="139" y1="25" x2="139" y2="88" stroke="#222" strokeWidth="3" markerEnd="url(#q41-arrow)" /></g>
    <line x1="190" y1="185" x2="232" y2="185" stroke="#222" strokeWidth="3" markerEnd="url(#q41-arrow)" />
    <g transform="translate(250 50)"><Banknote x={68} y={5} rotate={-8} /><Glass x={20} y={105} /><path d="M100 20L155 -35M108 27L163 -28" stroke="#222" strokeWidth="2" /><line x1="139" y1="88" x2="139" y2="25" stroke="#222" strokeWidth="3" markerEnd="url(#q41-arrow)" /></g>
    <line x1="430" y1="185" x2="472" y2="185" stroke="#222" strokeWidth="3" markerEnd="url(#q41-arrow)" />
    <g transform="translate(515 62)"><Banknote x={40} y={45} rotate={-10} /><path d="M68 54L150 25M73 62L155 33" stroke="#222" strokeWidth="2" />
      {[0,1,2,3].map((index)=><path key={`l${index}`} d={`M${30-index*7} ${175-index*28}q-18 -12 -2 -27q13 -13 1 -27`} fill="none" stroke="#333" strokeWidth="2" />)}
      {[0,1,2].map((index)=><path key={`r${index}`} d={`M${115+index*6} ${175-index*35}q20 -13 4 -29q-12 -13 2 -28`} fill="none" stroke="#333" strokeWidth="2" />)}
    </g>
  </svg>;
}

export const LOTE04_DIAGRAMS = {
  fuvest2027Q41: <Fuvest2027Q41 />,
  fuvest2027Q44: <Fuvest2027Q44 />,
};
