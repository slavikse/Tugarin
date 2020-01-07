import { ctx, size } from '../state';

export default function draw({ color, actor }) {
  ctx.fillStyle = color;

  actor.cells.forEach((cell) => {
    ctx.fillRect(...cell.position, size, size);
  });
}
