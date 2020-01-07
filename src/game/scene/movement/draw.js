import { ctx, size } from '../state';

export default function draw({ rgb, actor }) {
  ctx.fillStyle = rgb;

  actor.cells.forEach((cell) => {
    ctx.fillRect(...cell.position, size, size);
  });
}
