import movement from './movement';

window.addEventListener('keydown', ({ key }) => setKeyPressed({ key, isPressed: true }), true);
window.addEventListener('keyup', ({ key }) => setKeyPressed({ key, isPressed: false }), true);

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

  if (state.player.isPlaying) {
    stepTime += getDeltaTime(time);

    if (stepTime >= frameTime) {
      stepTime = 0;

      // console.log('movement', isKeysPressed);

      movement(isKeysPressed);
    }
  }
}

function getDeltaTime(time) {
  const deltaTime = time - prevTime;
  prevTime = time;

  return deltaTime;
}
