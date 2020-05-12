import { BASIC_SPEED } from './const';
import { movementInDirection } from '../utils';

const { player, player: { modifierKeys, directionsSpeeds } } = state;

export default function decelerationSpeed({ key, value }) {
  let speed = BASIC_SPEED * 1.9;

  if (modifierKeys.ShiftLeft) {
    speed *= 2;
  }

  let result = value - speed;

  if (result < 0) {
    result = 0;
  }

  directionsSpeeds[key] = result;
  movementInDirection[key]({ actor: player, value: result });
}
