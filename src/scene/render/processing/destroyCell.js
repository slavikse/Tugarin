export default function destroyCell(cell) {
  const cellTyped = state[cell.type];
  const cellIndex = cellTyped.cells.findIndex(({ id }) => id === cell.id);

  cellTyped.cells.splice(cellIndex, 1);
}
