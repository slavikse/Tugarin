export default function destroyPlayerCell(playerCell) {
  const cellIndex = state.player.cells.findIndex((cell) => cell.id === playerCell.id);
  state.player.cells.splice(cellIndex, 1);
}
