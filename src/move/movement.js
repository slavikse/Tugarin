const { center } = state.actors.player;
const { blockSize } = state.scene;

export function moveTop() {
  center.y -= blockSize;
}

export function moveRight() {
  center.x += blockSize;
}

export function moveBottom() {
  center.y += blockSize;
}

export function moveLeft() {
  center.x -= blockSize;
}
