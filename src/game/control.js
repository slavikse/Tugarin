'use strict';

window.addEventListener('keydown', keydown, true);

function keydown({ keyCode }) {
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

function createEvent(action) {
  // type: human | ai
  const type = { detail: { type: 'human' } };
  const event = new CustomEvent(action, type);

  window.dispatchEvent(event);
}
