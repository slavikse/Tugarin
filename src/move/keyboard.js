import { moveTop, moveRight, moveBottom, moveLeft } from './movement';

window.addEventListener('keydown', ({ key }) => setKeyPressed({ key, isPressed: true }));
window.addEventListener('keyup', ({ key }) => setKeyPressed({ key, isPressed: false }));

const isKeysPressed = { w: false, a: false, s: false, d: false };

function setKeyPressed({ key, isPressed }) {
  if (['w', 'a', 's', 'd'].includes(key)) {
    isKeysPressed[key] = isPressed;
  }
}

const frameTime = 1000 / 60;
let prevTime = 0;
let stepTime = 0;

requestAnimationFrame(frame);

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

// todo clamp при передвижении наискосок
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
