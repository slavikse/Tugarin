import destroy from './destroy';
import { getDotIntersection } from './utils';

export default function addCell({ actor, side, otherCell }) {
  destroy(otherCell);

  const { x, y } = getDotIntersection({ actor, otherCell });
  otherCell.x = x;
  otherCell.y = y;

  actor.addCell({ type: 'guns', side, otherCell });
}
