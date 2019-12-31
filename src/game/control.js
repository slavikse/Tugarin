'use strict';

window.addEventListener('keydown', keydown, true);
window.addEventListener('keyup', keyup, true);

window.addEventListener('gamepadconnected', gamepadLoop, true);
window.addEventListener('gamepaddisconnected', gamepadLoopStop, true);

let isKeysNotPressed  = true;

// TODO: выбор стороны, а змейка движется в эту сторону автоматически

function keydown({ keyCode }) {
  if (isKeysNotPressed) {
    isKeysNotPressed = false;
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
  isKeysNotPressed = true;
}

function createEvent(action) {
  // type: human | ai
  const type = { detail: { type: 'human' } };
  const event = new CustomEvent(action, type);

  window.dispatchEvent(event);
}

let gamepadLoopId;
let isGamepadPressed = false;

function gamepadLoop() {
  gamepadLoopId = requestAnimationFrame(gamepadLoop);
  const [{ axes: [x, y] }] = navigator.getGamepads();

  if (
    x > -1 && x < 1
    && y > -1 && y < 1
  ) {
    isGamepadPressed = false;
    return;
  } else if (isGamepadPressed) {
    return;
  }

  isGamepadPressed = true;

  if (y === -1) {
    createEvent('move-top');
  } else if (x === 1) {
    createEvent('move-right');
  } else if (y === 1) {
    createEvent('move-bottom');
  } else if (x === -1) {
    createEvent('move-left');
  }
}

function gamepadLoopStop() {
  cancelAnimationFrame(gamepadLoopId);
}
