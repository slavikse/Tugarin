import { getDeltaTime, movementInDirection } from './utils';
import decelerationSpeed from './decelerationSpeed';

const { player } = state;

export default function assignAcceleration(time) {
  const deltaTime = getDeltaTime(time);

  Object.entries(player.directionsSpeeds).forEach(([key, value]) => {
    const isKeyPressed = player.keysPressed.indexOf(key) !== -1;

    if (isKeyPressed) {
      movementInDirection[key]({ value, deltaTime });
    } else {
      decelerationSpeed({ key, value, deltaTime });
    }
  });
}
