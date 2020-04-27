export default function drawPlayer() {
  const { scene, player: { cells } } = state;

  cells.forEach((cell) => {
    state.ctx.fillStyle = cell.color;
    state.ctx.fillRect(scene.x - cell.x, scene.y - cell.y, cell.width, cell.height);
  });
}
