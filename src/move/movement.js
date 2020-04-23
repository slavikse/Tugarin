const { player } = state;

export default function movement(isKeysPressed) {
  if (isKeysPressed.KeyW) {
    player.y -= player.speed;
  }

  if (isKeysPressed.KeyD) {
    player.x += player.speed;
  }

  if (isKeysPressed.KeyS) {
    player.y += player.speed;
  }

  if (isKeysPressed.KeyA) {
    player.x -= player.speed;
  }
}
