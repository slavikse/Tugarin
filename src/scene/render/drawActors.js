export default function drawActors(actor) {
  const { ctx, player, [actor]: { cells } } = state;

  cells.forEach((cell) => {
    ctx.fillStyle = cell.color;
    ctx.fillRect(cell.x - player.x, cell.y - player.y, cell.width, cell.height);
  });
}
