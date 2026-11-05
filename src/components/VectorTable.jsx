import React, { useId } from 'react';

const THEMES = {
  income: {
    headerFill: '#704b91', headerText: '#ffffff', headerGrid: '#ffffff', headerWeight: 600,
    bodyFill: '#ffffff', firstColumnFill: '#ffffff', bodyText: '#15131a', grid: '#795b94',
    bodyVerticalLines: false, groupBold: true, outerBorder: false,
    headerFontSize: 14, bodyFontSize: 15, bodyAlign: 'center', firstColumnAlign: 'left',
  },
  mining: {
    headerFill: '#b7b7b7', headerText: '#171717', headerGrid: '#3c3c3c', headerWeight: 500,
    bodyFill: '#ffffff', firstColumnFill: '#e8e8e8', bodyText: '#1d1d1d', grid: '#454545',
    bodyVerticalLines: true, groupBold: false, outerBorder: true,
    headerFontSize: 16, bodyFontSize: 14, bodyAlign: 'left', firstColumnAlign: 'left',
  },
  nuclear: {
    headerFill: '#ffffff', headerText: '#191919', headerGrid: '#3f3f3f', headerWeight: 500,
    bodyFill: '#ffffff', firstColumnFill: '#ffffff', bodyText: '#1d1d1d', grid: '#454545',
    bodyVerticalLines: true, groupBold: false, outerBorder: true,
    headerFontSize: 16, bodyFontSize: 15, bodyAlign: 'left', firstColumnAlign: 'left',
  },
};

const cellData = (cell) => typeof cell === 'object' ? cell : { text: cell };

function estimatedWidth(text, fontSize) {
  const width = [...text].reduce((total, character) => {
    if (character === ' ') return total + fontSize * .28;
    if (/[iljI.,;:'!|]/.test(character)) return total + fontSize * .3;
    if (/[A-Z0-9À-Ý]/.test(character)) return total + fontSize * .59;
    return total + fontSize * .51;
  }, 0);
  return width * 1.12;
}

function wrapText(value, maxWidth, fontSize) {
  const output = [];
  String(value ?? '').split('\n').forEach((explicitLine) => {
    const words = explicitLine.split(/\s+/).filter(Boolean);
    if (!words.length) { output.push(''); return; }
    let line = '';
    words.forEach((word) => {
      const candidate = line ? `${line} ${word}` : word;
      if (line && estimatedWidth(candidate, fontSize) > maxWidth) { output.push(line); line = word; }
      else line = candidate;
    });
    if (line) output.push(line);
  });
  return output;
}

function layoutRows(rows, widths, heights, startY, zone) {
  const occupied = new Set();
  const cells = [];
  rows.forEach((rawRow, rowIndex) => {
    const row = Array.isArray(rawRow) ? { cells: rawRow } : rawRow;
    let columnIndex = 0;
    row.cells.forEach((rawCell) => {
      while (occupied.has(`${rowIndex}:${columnIndex}`)) columnIndex += 1;
      const cell = cellData(rawCell);
      const colSpan = cell.colSpan || 1;
      const rowSpan = cell.rowSpan || 1;
      for (let r = rowIndex; r < rowIndex + rowSpan; r += 1) {
        for (let c = columnIndex; c < columnIndex + colSpan; c += 1) occupied.add(`${r}:${c}`);
      }
      const x = widths.slice(0, columnIndex).reduce((sum, width) => sum + width, 0);
      const y = startY + heights.slice(0, rowIndex).reduce((sum, height) => sum + height, 0);
      const width = widths.slice(columnIndex, columnIndex + colSpan).reduce((sum, value) => sum + value, 0);
      const height = heights.slice(rowIndex, rowIndex + rowSpan).reduce((sum, value) => sum + value, 0);
      cells.push({ ...cell, zone, rowClass: row.className || '', rowIndex, columnIndex, colSpan, rowSpan, x, y, width, height });
      columnIndex += colSpan;
    });
  });
  return cells;
}

function VectorText({ cell, theme }) {
  const isHeader = cell.zone === 'header';
  const isGroup = cell.rowClass.includes('table-group-row');
  const horizontalPadding = cell.padding ?? (isHeader ? 12 : 10);
  const verticalPadding = 6;
  let fontSize = cell.fontSize || (isHeader ? theme.headerFontSize : theme.bodyFontSize);
  let lineHeight = fontSize * 1.28;
  let lines = wrapText(cell.text, Math.max(10, cell.width - horizontalPadding * 2), fontSize);
  while (lines.length * lineHeight > cell.height - verticalPadding * 2 && fontSize > 9) {
    fontSize -= .5;
    lineHeight = fontSize * 1.28;
    lines = wrapText(cell.text, Math.max(10, cell.width - horizontalPadding * 2), fontSize);
  }
  const align = cell.align || (isHeader ? 'center' : cell.columnIndex === 0 ? theme.firstColumnAlign : theme.bodyAlign);
  const x = align === 'left' ? cell.x + horizontalPadding : align === 'right' ? cell.x + cell.width - horizontalPadding : cell.x + cell.width / 2;
  const anchor = align === 'left' ? 'start' : align === 'right' ? 'end' : 'middle';
  const firstBaseline = cell.y + (cell.height - lines.length * lineHeight) / 2 + fontSize;
  const weight = cell.fontWeight || (isHeader ? theme.headerWeight : isGroup && theme.groupBold ? 700 : 400);
  return (
    <text className={isHeader ? 'vector-table-header-text' : 'vector-table-body-text'} x={x} y={firstBaseline} textAnchor={anchor} fontFamily="Arial, Helvetica, sans-serif" fontSize={fontSize} fontWeight={weight} fill={isHeader ? theme.headerText : theme.bodyText}>
      {lines.map((line, index) => <tspan x={x} dy={index === 0 ? 0 : lineHeight} key={index}>{line}</tspan>)}
    </text>
  );
}

export default function VectorTable({ table }) {
  const reactId = useId().replace(/:/g, '');
  const config = table.vector;
  const theme = THEMES[config.theme];
  const widths = config.widths;
  const width = widths.reduce((sum, value) => sum + value, 0);
  const headerHeights = config.headerHeights;
  const bodyHeights = config.rowHeights || table.rows.map(() => config.rowHeight);
  const headerHeight = headerHeights.reduce((sum, value) => sum + value, 0);
  const bodyHeight = bodyHeights.reduce((sum, value) => sum + value, 0);
  const tableHeight = headerHeight + bodyHeight;
  const headerCells = layoutRows(table.headerRows, widths, headerHeights, 0, 'header');
  const bodyCells = layoutRows(table.rows, widths, bodyHeights, headerHeight, 'body');
  const footnoteLines = (table.footnotes || []).map((note) => wrapText(note, width, 12));
  const footnotesHeight = footnoteLines.length ? 17 + footnoteLines.reduce((sum, lines) => sum + lines.length * 15 + 3, 0) : 0;
  const height = tableHeight + footnotesHeight;
  let footnoteY = tableHeight + 18;
  return (
    <svg className="vector-table" viewBox={`0 0 ${width} ${height}`} role="img" aria-labelledby={`${reactId}-title ${reactId}-desc`} shapeRendering="geometricPrecision" textRendering="geometricPrecision">
      <title id={`${reactId}-title`}>{table.ariaLabel}</title>
      <desc id={`${reactId}-desc`}>Tabela com os dados apresentados no enunciado.</desc>
      <g>
        {headerCells.map((cell, index) => <rect className="vector-table-header-cell" key={index} x={cell.x} y={cell.y} width={cell.width} height={cell.height} fill={theme.headerFill} stroke={theme.headerGrid} strokeWidth="1.2" />)}
        {bodyCells.map((cell, index) => <rect className="vector-table-body-cell" key={index} x={cell.x} y={cell.y} width={cell.width} height={cell.height} fill={cell.columnIndex === 0 ? theme.firstColumnFill : theme.bodyFill} stroke={theme.bodyVerticalLines ? theme.grid : 'none'} strokeWidth="1.1" />)}
        {!theme.bodyVerticalLines && bodyHeights.map((_, index) => {
          const y = headerHeight + bodyHeights.slice(0, index + 1).reduce((sum, value) => sum + value, 0);
          return <line className="vector-table-row-rule" key={index} x1="0" y1={y} x2={width} y2={y} stroke={theme.grid} strokeWidth="1.25" />;
        })}
        {theme.outerBorder && <rect className="vector-table-outer-border" x="0.6" y="0.6" width={width - 1.2} height={tableHeight - 1.2} fill="none" stroke={theme.grid} strokeWidth="1.2" />}
      </g>
      <g>{[...headerCells, ...bodyCells].map((cell, index) => <VectorText key={index} cell={cell} theme={theme} />)}</g>
      {footnoteLines.map((lines, noteIndex) => {
        const startY = footnoteY;
        footnoteY += lines.length * 15 + 3;
        return <text key={noteIndex} x="0" y={startY} fontFamily="Arial, Helvetica, sans-serif" fontSize="12" fontStyle={noteIndex === 0 ? 'italic' : 'normal'} fill="#4b4b4b">{lines.map((line, index) => <tspan x="0" dy={index === 0 ? 0 : 15} key={index}>{line}</tspan>)}</text>;
      })}
    </svg>
  );
}
