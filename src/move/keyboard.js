import movement from './movement';

window.addEventListener('keydown', ({ code }) => setKeyPressed({ code, isPressed: true }));
window.addEventListener('keyup', ({ code }) => setKeyPressed({ code, isPressed: false }));

const isKeysPressed = { KeyW: false, KeyD: false, KeyS: false, KeyA: false };

function setKeyPressed({ code, isPressed }) {
  if (['KeyW', 'KeyD', 'KeyS', 'KeyA'].includes(code)) {
    isKeysPressed[code] = isPressed;
  }
}

const frameTime = 1000 / 60;
let prevTime = 0;
let stepTime = 0;

requestAnimationFrame(frame);

function frame(time) {
  requestAnimationFrame(frame);

  if (state.player.isPlaying) {
    stepTime += getDeltaTime(time);

    if (stepTime >= frameTime) {
      stepTime = 0;

      movement(isKeysPressed);
    }
  }
}

function getDeltaTime(time) {
  const deltaTime = time - prevTime;
  prevTime = time;

  return deltaTime;
}
