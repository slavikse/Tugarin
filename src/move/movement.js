const { player } = state;

export function moveTop() {
  player.y -= player.speed;
}

export function moveRight() {
  player.x += player.speed;
}

export function moveBottom() {
  player.y += player.speed;
}

export function moveLeft() {
  player.x -= player.speed;
}
