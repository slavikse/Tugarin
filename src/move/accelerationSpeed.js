import { BASIC_SPEED, MAX_SPEED } from './const';

const { player: { keysPressed, modifierKeys, intersection, directionsSpeeds } } = state;

export default function accelerationSpeed() {
  let maxSpeed = MAX_SPEED;

  if (keysPressed.length === 2) {
    maxSpeed *= 0.85;
  }

  if (modifierKeys.ShiftLeft) {
    maxSpeed *= 0.5;
  }

  keysPressed.forEach((key) => {
    if (!intersection.sides.includes(key)) {
      initialAcceleration(key);
      increaseSpeed({ key, maxSpeed });
    }
  });
}

function initialAcceleration(key) {
  if (directionsSpeeds[key] === 0) {
    directionsSpeeds[key] = BASIC_SPEED * 7;
  }
}

function increaseSpeed({ key, maxSpeed }) {
  const directionSpeed = directionsSpeeds[key];

  if (directionSpeed < maxSpeed) {
    directionsSpeeds[key] += BASIC_SPEED;
  }

  if (directionsSpeeds[key] > maxSpeed) {
    directionsSpeeds[key] = maxSpeed;
  }
}
