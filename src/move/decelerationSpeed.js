import { basicSpeed } from './const';
import { movementInDirection } from '../utils';

const { player, player: { directionsSpeeds } } = state;

export default function decelerationSpeed({ key, value }) {
  let result = value - (basicSpeed * 1.9);

  if (result < 0) {
    result = 0;
  }

  directionsSpeeds[key] = result;
  movementInDirection[key]({ actor: player, value: result });
}
