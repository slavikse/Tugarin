export default function clearScene() {
  const { clientWidth, clientHeight } = document.documentElement;

  state.ctx.fillStyle = state.scene.color;
  state.ctx.fillRect(0, 0, clientWidth, clientHeight);
}
