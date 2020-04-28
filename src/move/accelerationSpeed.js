import { basicSpeed, maxSpeed } from './const';

const { player } = state;

export default function accelerationSpeed() {
  player.keysPressed.forEach((key) => {
    let copiedMaxSpeed = maxSpeed;

    if (player.keysPressed.length === 2) {
      copiedMaxSpeed *= 0.85;
    }

    initialAcceleration(key);
    increaseSpeed({ key, copiedMaxSpeed });
  });
}

function initialAcceleration(key) {
  if (player.directionsSpeeds[key] === 0) {
    player.directionsSpeeds[key] = basicSpeed * 10;
  }
}

function increaseSpeed({ key, copiedMaxSpeed }) {
  const directionSpeed = player.directionsSpeeds[key];

  if (directionSpeed < copiedMaxSpeed) {
    player.directionsSpeeds[key] += basicSpeed;
  }

  if (directionSpeed > copiedMaxSpeed) {
    player.directionsSpeeds[key] = copiedMaxSpeed;
  }
}
