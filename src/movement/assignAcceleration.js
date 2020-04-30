import { getDeltaTime, movementInDirection } from './utils';
import decelerationSpeed from './decelerationSpeed';

const { directionsSpeeds, keysPressed } = state.player;

export default function assignAcceleration(time) {
  const deltaTime = getDeltaTime(time);

  Object.entries(directionsSpeeds).forEach(([key, value]) => {
    if (keysPressed.indexOf(key) > -1) {
      movementInDirection[key]({ value, deltaTime });
    } else {
      decelerationSpeed({ key, value, deltaTime });
    }
  });
}
