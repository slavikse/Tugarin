import { getDeltaTime, movementInDirection } from './utils';
import decelerationSpeed from './decelerationSpeed';

const { player } = state;

export default function assignAcceleration({ time, basicSpeed }) {
  const deltaTime = getDeltaTime(time);

  console.log(player.keysPressed);

  Object.entries(player.directionsSpeeds).forEach(([key, value]) => {
    const isKeyPressed = player.keysPressed.indexOf(key) !== -1;

    if (isKeyPressed) {
      movementInDirection[key]({ deltaTime, value });
    } else {
      decelerationSpeed({ value, basicSpeed, key, deltaTime });
    }
  });

  console.log(player.directionsSpeeds);
}

// todo ускорение наискосок * 0.8, а когда не наискосок, возобновлять

// WA AS SD DW
// speed *= 0.8;
