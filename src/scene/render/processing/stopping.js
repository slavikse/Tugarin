import { getIntersection, sidesIntersection } from './sidesIntersection';

const { player } = state;

export default function stopping({ actor, cell }) {
  const { x, y } = getIntersection({ actor, cell });
  sidesIntersection({ x, y, actor, cell });

  player.intersection.sides.forEach((side) => {
    player.directionsSpeeds[side] = 0;
  });
}
