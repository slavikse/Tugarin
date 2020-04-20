// todo правила движения при столкновениях

const { center } = state.actors.player;

export function moveTop() {
  center.y -= state.blockSize;
}

export function moveRight() {
  center.x += state.blockSize;
}

export function moveBottom() {
  center.y += state.blockSize;
}

export function moveLeft() {
  center.x -= state.blockSize;
}
