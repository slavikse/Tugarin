import './accelerationLoop';

window.addEventListener('keydown', ({ code }) => handle({ code, isPressed: true }));
window.addEventListener('keyup', ({ code }) => handle({ code, isPressed: false }));

const { player } = state;

const sides = { KeyW: 'W', KeyA: 'A', KeyS: 'S', KeyD: 'D' };
const modifierKeys = { ShiftLeft: true };
const sidesPressed = [];

function handle({ code, isPressed }) {
  const side = sides[code];

  if (side) {
    player.sidesPressed[side] = isPressed;
    countingSides({ isPressed, side });
  }

  if (modifierKeys[code]) {
    player.modifierKeys[code] = isPressed;
  }
}

function countingSides({ isPressed, side }) {
  const sideIndex = sidesPressed.indexOf(side);

  if (isPressed) {
    if (sideIndex === -1) {
      sidesPressed.push(side);
    }
  } else if (sideIndex > -1) {
    sidesPressed.splice(sideIndex, 1);
  }

  player.numberSidesPressed = sidesPressed.length;
}
