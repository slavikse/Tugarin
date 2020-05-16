import { BASIC_SPEED } from './const';
import { movement } from '../utils';

const { player } = state;

const deceleration = 2;
const fastDeceleration = 1.5;

export default function decelerationSpeed({ side, speed }) {
  let basicSpeed = BASIC_SPEED * deceleration;

  if (player.modifierKeys.ShiftLeft) {
    basicSpeed *= fastDeceleration;
  }

  let speedSlowed = speed - basicSpeed;

  if (speedSlowed < 0) {
    speedSlowed = 0;
  }

  player.directionsSpeeds[side] = speedSlowed;
  movement[side]({ actor: player, speed: speedSlowed });
}
