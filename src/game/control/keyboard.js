'use strict';

import { createEvent } from './utils';

window.addEventListener('keydown', keydown);
window.addEventListener('keyup', keyup);

let isKeyNotPressed  = true;

function keydown({ keyCode }) {
  if (isKeyNotPressed) {
    isKeyNotPressed = false;
  } else {
    return;
  }

  const keyCodeW = 87;
  const keyCodeA = 65;
  const keyCodeS = 83;
  const keyCodeD = 68;

  if (keyCode === keyCodeW) {
    createEvent('move-top');
  } else if (keyCode === keyCodeA) {
    createEvent('move-left');
  } else if (keyCode === keyCodeS) {
    createEvent('move-bottom');
  } else if (keyCode === keyCodeD) {
    createEvent('move-right');
  }
}

function keyup() {
  isKeyNotPressed = true;
}
