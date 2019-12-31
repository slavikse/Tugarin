'use strict';

import { createEvent } from './utils';

window.addEventListener('gamepadconnected', gamepadLoop);
window.addEventListener('gamepaddisconnected', gamepadLoopStop);

// move-top | move-right | move-bottom | move-left
// TODO: выбор стороны, а змейка движется в эту сторону автоматически
// let selectedSide = 'move-bottom';

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
