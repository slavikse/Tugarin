import { BASIC_SPEED } from './const';
import { movementInDirection } from '../utils';

const { player, player: { modifierKeys, directionsSpeeds } } = state;

export default function decelerationSpeed({ side, speed }) {
  let basicSpeed = BASIC_SPEED * 2;

  if (modifierKeys.ShiftLeft) {
    basicSpeed *= 2;
  }

  let speedResult = speed - basicSpeed;

  if (speedResult < 0) {
    speedResult = 0;
  }

  directionsSpeeds[side] = speedResult;
  movementInDirection[side]({ actor: player, speed: speedResult });
}
