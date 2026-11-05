import React from 'react';

const ink = { fontFamily: 'Arial, Helvetica, sans-serif', fill: '#171717' };

function SpirometryChart() {
  const left = 70, right = 610, top = 25, bottom = 370;
  const x = (time) => left + time / 8 * (right - left);
  const y = (volume) => bottom - volume / 7 * (bottom - top);
  const curve = (rate) => Array.from({ length: 81 }, (_, index) => {
    const time = index / 10;
    const volume = 6.4 * (1 - Math.exp(-rate * time));
    return `${index ? 'L' : 'M'}${x(time).toFixed(1)},${y(volume).toFixed(1)}`;
  }).join(' ');
  return <svg viewBox="0 0 650 450" role="img" aria-labelledby="q62-spirometry-title" className="question-svg question-svg-tall">
    <title id="q62-spirometry-title">Volume expirado em litros em função do tempo para os pacientes A e B</title>
    {Array.from({ length: 8 }, (_, index) => index + 1).map((volume) => <line key={`h${volume}`} x1={left} y1={y(volume)} x2={right} y2={y(volume)} stroke="#666" strokeWidth=".75" />)}
    {Array.from({ length: 9 }, (_, index) => index).map((time) => <line key={`v${time}`} x1={x(time)} y1={top} x2={x(time)} y2={bottom} stroke="#666" strokeWidth=".75" />)}
    <rect x={left} y={top} width={right-left} height={bottom-top} fill="none" stroke="#222" strokeWidth="1.3" />
    {Array.from({ length: 8 }, (_, index) => index + 1).map((volume) => <text key={`yl${volume}`} x={left-12} y={y(volume)+5} textAnchor="end" fontSize="15" style={ink}>{volume}</text>)}
    <text x={left-12} y={bottom+5} textAnchor="end" fontSize="15" style={ink}>0</text>
    {[0,2,4,6,8].map((time) => <text key={`xl${time}`} x={x(time)} y={bottom+25} textAnchor="middle" fontSize="15" style={ink}>{time}</text>)}
    <text x={(left+right)/2} y="425" textAnchor="middle" fontSize="18" style={ink}>Tempo (s)</text>
    <g transform="rotate(-90 25 200)"><text x="25" y="200" textAnchor="middle" fontSize="18" style={ink}>Volume (L)</text></g>
    <path d={curve(1.8)} fill="none" stroke="#ed1c24" strokeWidth="3" strokeLinecap="round" />
    <path d={curve(.95)} fill="none" stroke="#27279c" strokeWidth="3" strokeDasharray="7 5" strokeLinecap="round" />
    <text x={x(.75)} y={y(6.25)} fontSize="18" fontWeight="700" style={{...ink,fill:'#ed1c24'}}>A</text>
    <text x={x(1.75)} y={y(4.9)} fontSize="18" fontWeight="700" style={{...ink,fill:'#27279c'}}>B</text>
  </svg>;
}

const side = 50;
const h = side * Math.sqrt(3) / 2;
const pointString = (points) => points.map(([x,y]) => `${x},${y}`).join(' ');
function triangleCells() {
  const cells = [];
  for (let row = 0; row < 6; row += 1) {
    for (let index = 0; index <= row; index += 1) {
      cells.push({ type: 'up', row, index, points: [[150-row*side/2+index*side,20+row*h],[150-(row+1)*side/2+index*side,20+(row+1)*h],[150-(row+1)*side/2+(index+1)*side,20+(row+1)*h]] });
    }
    for (let index = 0; index < row; index += 1) {
      cells.push({ type: 'down', row, index, points: [[150-row*side/2+index*side,20+row*h],[150-row*side/2+(index+1)*side,20+row*h],[150-(row+1)*side/2+(index+1)*side,20+(row+1)*h]] });
    }
  }
  return cells;
}
const boardCells = triangleCells();
const sameCell = (cell, type, row, index) => cell.type === type && cell.row === row && cell.index === index;

function TriangleBoard({ painted }) {
  return <g>
    {boardCells.map((cell,index) => <polygon key={index} points={pointString(cell.points)} fill={painted.some(([type,row,cellIndex]) => sameCell(cell,type,row,cellIndex)) ? '#f4eb19' : '#fff'} stroke="#666" strokeWidth=".75" />)}
    <g fill="none" stroke="#b04b59" strokeWidth="1">
      <path d="M150 20V280" /><path d="M0 280L225 150" /><path d="M300 280L75 150" />
    </g>
    <path d="M150 20L0 280H300Z" fill="none" stroke="#333" strokeWidth="1.2" />
    <line x1="0" y1="280" x2="300" y2="280" stroke="#273e9b" strokeWidth="2" />
  </g>;
}

function RotationBoards() {
  return <svg viewBox="0 0 680 310" role="img" aria-labelledby="q67-board-title" className="question-svg">
    <title id="q67-board-title">Duas pinturas equivalentes do tabuleiro triangular, relacionadas por rotação de 120 graus</title>
    <g transform="translate(20 0)"><TriangleBoard painted={[["up",2,1],["down",4,0]]} /></g>
    <g transform="translate(360 0)"><TriangleBoard painted={[["down",2,1],["up",4,3]]} /></g>
  </svg>;
}

export const LOTE06_DIAGRAMS = {
  fuvest2027Q62: <SpirometryChart />,
  fuvest2027Q67: <RotationBoards />,
};
