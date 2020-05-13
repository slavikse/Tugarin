import destroy from './destroy';
import { getIntersection } from './sidesIntersection';

const { player } = state;

export default function addCell(cell) {
  destroy(cell);

  const { x, y } = getIntersection({ actor: player, cell });

  cell.x = x;
  cell.y = y;

  player.addCell(cell);
}
