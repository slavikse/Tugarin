import { getIntersection, getSideIntersection } from '../utils';

const { player } = state;

// todo с какой стороны замедлять скорость до 0?
export default function stopping(cell) {
  const { x, y } = getIntersection({ actor: player, cell });
  const side = getSideIntersection({ x, y, actor: player, cell });

  if (side.length === 1) {
    console.log(side, player.directionsSpeeds[side]);
    player.directionsSpeeds[side] = 0;
  }
}
