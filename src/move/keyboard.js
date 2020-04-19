import { top, right, bottom, left } from './movement';

const keyCodeW = 87;
const keyCodeD = 68;
const keyCodeS = 83;
const keyCodeA = 65;

let isPressed = false;

function move({ keyCode }) {
  if (isPressed) {
    return;
  }

  if ([keyCodeW, keyCodeD, keyCodeS, keyCodeA].includes(keyCode)) {
    isPressed = true;
  }

  if (keyCode === keyCodeW) {
    top();
  } else if (keyCode === keyCodeD) {
    right();
  } else if (keyCode === keyCodeS) {
    bottom();
  } else if (keyCode === keyCodeA) {
    left();
  }
}

function stop() {
  isPressed = false;
}

window.addEventListener('keydown', move);
window.addEventListener('keyup', stop);
