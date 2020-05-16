const { ctx, scene, player: { cells, guns } } = state;

export default function drawPlayer() {
  Object.values(cells).forEach((cell) => {
    ctx.fillStyle = cell.color;
    ctx.fillRect(scene.center.x - cell.x, scene.center.y - cell.y, cell.width, cell.height);
  });

  guns.forEach((gun) => {
    ctx.fillStyle = gun.color;
    ctx.fillRect(scene.center.x - gun.x, scene.center.y - gun.y, gun.width, gun.height);
  });
}
