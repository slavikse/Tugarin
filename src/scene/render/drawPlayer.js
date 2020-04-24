export default function drawPlayer() {
  const { scene, player: { cells, width, height } } = state;

  cells.forEach((cell) => {
    state.ctx.fillStyle = cell.color;
    state.ctx.fillRect(scene.x - cell.x, scene.y - cell.y, width, height);
  });
}
