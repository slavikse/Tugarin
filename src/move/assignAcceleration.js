import { movement } from '../utils';
import decelerationSpeed from './decelerationSpeed';

const { player } = state;

export default function assignAcceleration() {
  Object.entries(player.directionsSpeeds).forEach(([side, speed]) => {
    if (player.sidesPressed[side]) {
      movement[side]({ actor: player, speed });
    } else if (speed > 0) {
      decelerationSpeed({ side, speed });
    }
  });
}
