import { moveTop, moveRight, moveBottom, moveLeft } from './movement';

const keyCodeW = 87;
const keyCodeD = 68;
const keyCodeS = 83;
const keyCodeA = 65;

let isPressed = false;

window.addEventListener('keydown', movement);

function movement({ keyCode }) {
  if (isPressed) {
    return;
  }

  if ([keyCodeW, keyCodeD, keyCodeS, keyCodeA].includes(keyCode)) {
    isPressed = true;
  }

  if (keyCode === keyCodeW) {
    moveTop();
  } else if (keyCode === keyCodeD) {
    moveRight();
  } else if (keyCode === keyCodeS) {
    moveBottom();
  } else if (keyCode === keyCodeA) {
    moveLeft();
  }
}

window.addEventListener('keyup', idle);

function idle() {
  isPressed = false;
}
