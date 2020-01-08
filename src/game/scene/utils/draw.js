import { ctx } from '..';
import { colors, size } from '../state';

export default function draw({ actor, rgb = colors.erase.rgb }) {
  ctx.fillStyle = rgb;

  actor.cells.forEach((cell) => {
    ctx.fillRect(...cell.position, size, size);
  });
}
