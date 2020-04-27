const { player } = state;

export default function accelerationSpeed({ basicSpeed, maxSpeed }) {
  player.keysPressed.forEach((key) => {
    if (player.directionsSpeeds[key] === 0) {
      player.directionsSpeeds[key] = basicSpeed * 8;
    }

    if (player.directionsSpeeds[key] < maxSpeed) {
      player.directionsSpeeds[key] += basicSpeed;

      if (player.directionsSpeeds[key] > maxSpeed) {
        player.directionsSpeeds[key] = maxSpeed;
      }
    }
  });
}
