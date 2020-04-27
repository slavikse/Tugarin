import accelerationSpeed from './accelerationSpeed';
import assignAcceleration from './assignAcceleration';

const { player } = state;

const basicSpeed = 20;
const maxSpeed = basicSpeed * 30;

export default function movement(time) {
  if (player.keysPressed.length > 0) {
    accelerationSpeed({ basicSpeed, maxSpeed });
  }

  assignAcceleration({ time, basicSpeed });
}
