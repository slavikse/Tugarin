import { basicSpeed } from './const';
import { movementInDirection } from './utils';

const { player: { directionsSpeeds } } = state;

export default function decelerationSpeed({ key, value, deltaTime }) {
  let result = value - (basicSpeed * 2);

  if (result < 0) {
    result = 0;
  }

  directionsSpeeds[key] = result;
  movementInDirection[key]({ value: result, deltaTime });
}
