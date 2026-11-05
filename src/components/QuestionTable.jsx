import React from 'react';
import VectorTable from './VectorTable.jsx';

export function QuestionTable({ table }) {
  const cellData = (cell) => typeof cell === 'object' ? cell : { text: cell };
  const semanticTable = (
    <table aria-label={table.ariaLabel}>
      <thead>{table.headerRows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((rawCell, cellIndex) => { const cell = cellData(rawCell); return <th key={cellIndex} colSpan={cell.colSpan} rowSpan={cell.rowSpan} className={cell.className}>{cell.text}</th>; })}</tr>)}</thead>
      <tbody>{table.rows.map((rawRow, rowIndex) => { const row = Array.isArray(rawRow) ? { cells: rawRow } : rawRow; return <tr key={rowIndex} className={row.className}>{row.cells.map((rawCell, cellIndex) => { const cell = cellData(rawCell); return cell.header ? <th key={cellIndex} scope="row" className={cell.className}>{cell.text}</th> : <td key={cellIndex} className={cell.className}>{cell.text}</td>; })}</tr>; })}</tbody>
    </table>
  );
  if (table.vector) {
    return (
      <figure className={`data-table-figure vector-table-figure ${table.className || ''}`}>
        <div className="sr-only">{semanticTable}</div>
        <div className="table-scroll"><div className="vector-table-canvas" style={{ '--table-min-width': `${table.vector.minWidth}px` }}><VectorTable table={table} /></div></div>
        <span className="table-scroll-hint" aria-hidden="true">Deslize horizontalmente para ver todas as colunas →</span>
      </figure>
    );
  }
  return (
    <figure className={`data-table-figure ${table.className || ''}`}>
      <div className="table-scroll">{semanticTable}</div>
      <span className="table-scroll-hint" aria-hidden="true">Deslize horizontalmente para ver todas as colunas →</span>
      {table.footnotes && <figcaption>{table.footnotes.map((note, index) => <span key={index}>{note}</span>)}</figcaption>}
    </figure>
  );
}

