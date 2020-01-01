import { createEvent } from './utils';

window.addEventListener('keydown', keydown);
window.addEventListener('keyup', keyup);

let isNotPressed  = true;

function keydown({ keyCode }) {
  if (isNotPressed) {
    isNotPressed = false;
  } else {
    return;
  }

  const keyCodeW = 87;
  const keyCodeA = 65;
  const keyCodeS = 83;
  const keyCodeD = 68;

  const keyCodeArrowTop = 38;
  const keyCodeArrowRight = 39;
  const keyCodeArrowBottom = 40;
  const keyCodeArrowLeft = 37;

  if (keyCode === keyCodeW || keyCode === keyCodeArrowTop) {
    createEvent('move-top');
  } else if (keyCode === keyCodeD || keyCode === keyCodeArrowRight) {
    createEvent('move-right');
  } else if (keyCode === keyCodeS || keyCode === keyCodeArrowBottom) {
    createEvent('move-bottom');
  } else if (keyCode === keyCodeA || keyCode === keyCodeArrowLeft) {
    createEvent('move-left');
  }
}

function keyup() {
  isNotPressed = true;
}
