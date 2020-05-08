const { ctx, scene } = state;

export default function clearScene() {
  const { clientWidth, clientHeight } = document.documentElement;

  ctx.fillStyle = scene.color;
  ctx.fillRect(0, 0, clientWidth, clientHeight);
}
