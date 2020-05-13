import { movementInDirection } from '../utils';
import decelerationSpeed from './decelerationSpeed';

const { player, player: { directionsSpeeds, keysPressed } } = state;

export default function assignAcceleration() {
  Object.entries(directionsSpeeds).forEach(([side, speed]) => {
    if (keysPressed.indexOf(side) > -1) {
      movementInDirection[side]({ actor: player, speed });
    } else if (speed > 0) {
      decelerationSpeed({ side, speed });
    }
  });
}
