import { ctx } from '../../state';

export default function getColor(actor) {
  const [cell] = actor.cells;
  const [r, g, b] = ctx.getImageData(...cell.position, 1, 1).data;

  return `${r},${g},${b}`;
}
