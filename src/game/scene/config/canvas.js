import { colors } from '../state';

export default function canvas() {
  const $canvas = document.querySelector('.canvas');
  const { clientWidth, clientHeight } = document.documentElement;

  $canvas.width = clientWidth;
  $canvas.height = clientHeight;

  const ctx = $canvas.getContext('2d', { alpha: false });
  ctx.imageSmoothingEnabled = false;

  ctx.fillStyle = colors.erase.rgb;
  ctx.fillRect(0, 0, clientWidth, clientHeight);

  return ctx;
}
