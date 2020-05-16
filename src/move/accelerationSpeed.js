import { BASIC_SPEED, MAX_SPEED } from './const';

const { player } = state;

const accelerationObliquely = 0.7;
const slowAcceleration = 0.5;
const basicAcceleration = 5;

export default function accelerationSpeed() {
  let basicSpeed = BASIC_SPEED;
  let maxSpeed = MAX_SPEED;

  if (player.numberSidesPressed === 2) {
    basicSpeed *= accelerationObliquely;
    maxSpeed *= accelerationObliquely;
  }

  if (player.modifierKeys.ShiftLeft) {
    basicSpeed *= slowAcceleration;
    maxSpeed *= slowAcceleration;
  }

  Object.entries(player.sidesPressed).forEach(([side, isPressed]) => {
    if (isPressed && !player.intersectionSides[side]) {
      acceleration({ side, basicSpeed });
      increaseSpeed({ side, basicSpeed, maxSpeed });
    }
  });
}

function acceleration({ side, basicSpeed }) {
  if (player.directionsSpeeds[side] === 0) {
    player.directionsSpeeds[side] = basicSpeed * basicAcceleration;
  }
}

function increaseSpeed({ side, basicSpeed, maxSpeed }) {
  const directionSpeed = player.directionsSpeeds[side];

  if (directionSpeed < maxSpeed) {
    player.directionsSpeeds[side] += basicSpeed;
  }

  if (player.directionsSpeeds[side] > maxSpeed) {
    player.directionsSpeeds[side] = maxSpeed;
  }
}
