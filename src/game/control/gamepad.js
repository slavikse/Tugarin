import { movement } from './utils';

window.addEventListener('gamepadconnected', loop);
window.addEventListener('gamepaddisconnected', loopStop);

let loopId;
let isPressed = false;

function loop() {
  loopId = requestAnimationFrame(loop);
  const [{ axes: [x, y] }] = navigator.getGamepads();

  if (x !== -1 && x !== 1 && y !== -1 && y !== 1) {
    isPressed = false;
    return;
  } else if (isPressed) {
    return;
  }

  isPressed = true;

  if (y === -1) {
    movement({ name: 'human', side: 'top' });
  } else if (x === 1) {
    movement({ name: 'human', side: 'right' });
  } else if (y === 1) {
    movement({ name: 'human', side: 'bottom' });
  } else if (x === -1) {
    movement({ name: 'human', side: 'left' });
  }
}

function loopStop() {
  cancelAnimationFrame(loopId);
}
