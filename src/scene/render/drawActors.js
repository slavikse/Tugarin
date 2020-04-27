export default function drawActors(actor) {
  const { player, [actor]: { cells } } = state;

  cells.forEach((cell) => {
    state.ctx.fillStyle = cell.color;
    state.ctx.fillRect(cell.x - player.x, cell.y - player.y, cell.width, cell.height);
  });
}
