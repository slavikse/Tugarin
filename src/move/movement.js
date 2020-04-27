import accelerationSpeed from './accelerationSpeed';
import assignAcceleration from './assignAcceleration';

const { player } = state;

export default function movement(time) {
  if (player.keysPressed.length > 0) {
    accelerationSpeed();
  }

  assignAcceleration(time);
}
