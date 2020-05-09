import { movementInDirection } from '../utils';
import decelerationSpeed from './decelerationSpeed';

const { player, player: { directionsSpeeds, keysPressed } } = state;

export default function assignAcceleration() {
  Object.entries(directionsSpeeds).forEach(([key, value]) => {
    if (keysPressed.indexOf(key) > -1) {
      movementInDirection[key]({ actor: player, value });
    } else {
      decelerationSpeed({ key, value });
    }
  });
}
