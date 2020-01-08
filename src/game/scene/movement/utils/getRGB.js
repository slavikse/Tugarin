import { ctx } from '../..';

export default function getRGB(actor) {
  const [cell] = actor.cells;
  const [r, g, b] = ctx.getImageData(...cell.position, 1, 1).data;

  return `rgb(${r},${g},${b})`;
}
