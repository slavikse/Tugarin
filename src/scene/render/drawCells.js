export default function drawCells() {
  const { cell: { cells, width, height }, player } = state;

  cells.forEach((cell) => {
    state.ctx.fillStyle = cell.color;
    state.ctx.fillRect(cell.x - player.x, cell.y - player.y, width, height);
  });
}
