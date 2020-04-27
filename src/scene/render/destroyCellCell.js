export default function destroyCellCell(cellCell) {
  const cellIndex = state.cell.cells.findIndex((cell) => cell.id === cellCell.id);
  state.cell.cells.splice(cellIndex, 1);
}
