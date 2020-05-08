const { ctx, scene, player: { cells } } = state;

export default function drawPlayer() {
  cells.forEach((cell) => {
    ctx.fillStyle = cell.color;
    ctx.fillRect(scene.center.x - cell.x, scene.center.y - cell.y, cell.size, cell.size);
  });
}
