import { movementInDirection } from './utils';

const { player } = state;

export default function decelerationSpeed({ value, basicSpeed, key, deltaTime }) {
  let result = value - (basicSpeed * 2);

  if (result < 0) {
    result = 0;
  }

  movementInDirection[key]({ deltaTime, value: result });
  player.directionsSpeeds[key] = result;
}
