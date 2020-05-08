import { basicSpeed, maxSpeed } from './const';

const { player: { keysPressed, directionsSpeeds } } = state;

export default function accelerationSpeed() {
  let copiedMaxSpeed = maxSpeed;

  if (keysPressed.length === 2) {
    copiedMaxSpeed *= 0.85;
  }

  keysPressed.forEach((key) => {
    initialAcceleration(key);
    increaseSpeed({ key, copiedMaxSpeed });
  });
}

function initialAcceleration(key) {
  if (directionsSpeeds[key] === 0) {
    directionsSpeeds[key] = basicSpeed * 9;
  }
}

function increaseSpeed({ key, copiedMaxSpeed }) {
  const directionSpeed = directionsSpeeds[key];

  if (directionSpeed < copiedMaxSpeed) {
    directionsSpeeds[key] += basicSpeed;
  }

  if (directionsSpeeds[key] > copiedMaxSpeed) {
    directionsSpeeds[key] = copiedMaxSpeed;
  }
}
