import { moveTop, moveRight, moveBottom, moveLeft } from './movement';

window.addEventListener('keydown', ({ key }) => setKeyPressed({ key, isPressed: true }));
window.addEventListener('keyup', ({ key }) => setKeyPressed({ key, isPressed: false }));

const isKeysPressed = { w: false, d: false, s: false, a: false };

function setKeyPressed({ key, isPressed }) {
  if (['w', 'd', 's', 'a'].includes(key)) {
    isKeysPressed[key] = isPressed;
  }
}

requestAnimationFrame(frame);

const frameTime = 1000 / 24;
let prevTime = 0;
let stepTime = 0;

function frame(time) {
  requestAnimationFrame(frame);

  stepTime += getDeltaTime(time);

  if (stepTime >= frameTime) {
    stepTime = 0;

    movement();
  }
}

function getDeltaTime(time) {
  const deltaTime = time - prevTime;
  prevTime = time;

  return deltaTime;
}

function movement() {
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
