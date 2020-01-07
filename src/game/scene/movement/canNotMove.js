import { actions } from './utils';
import { ctx } from '../state';

export default function canNotMove(actor) {
  const [cell] = actor.cells;
  const position = actions[actor.side](cell.position);

  const [r, g, b] = ctx.getImageData(...position, 1, 1).data;
  const rgbString = `rgb(${r},${g},${b})`;

  return actor.rgb === rgbString;
}
