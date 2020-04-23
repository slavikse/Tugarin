const { player } = state;

export default function movement(isKeysPressed) {
  if (isKeysPressed.w) {
    moveTop();
  }

  if (isKeysPressed.d) {
    moveRight();
  }

  if (isKeysPressed.s) {
    moveBottom();
  }

  if (isKeysPressed.a) {
    moveLeft();
  }
}

function moveTop() {
  player.y -= player.speed;
}

function moveRight() {
  player.x += player.speed;
}

function moveBottom() {
  player.y += player.speed;
}

function moveLeft() {
  player.x -= player.speed;
}
