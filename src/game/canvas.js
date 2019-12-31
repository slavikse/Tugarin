export default function canvas() {
  const $canvas = document.querySelector('.canvas');
  const { clientWidth, clientHeight } = document.documentElement;
  $canvas.width = clientWidth;
  $canvas.height = clientHeight;

  const ctx = $canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;

  return ctx;
}
