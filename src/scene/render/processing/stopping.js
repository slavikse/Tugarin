import { getIntersection, sidesIntersection } from '../utils';

const { player, player: { intersection } } = state;

export default function stopping({ actor, cell }) {
  const { x, y } = getIntersection({ actor, cell });
  sidesIntersection({ x, y, actor, cell });

  intersection.sides.forEach((side) => {
    player.directionsSpeeds[side] = 0;
  });
}
