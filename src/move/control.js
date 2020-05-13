window.addEventListener('keydown', ({ code }) => handle({ code, isPressed: true }));
window.addEventListener('keyup', ({ code }) => handle({ code, isPressed: false }));

const keys = { KeyW: 'W', KeyA: 'A', KeyS: 'S', KeyD: 'D' };
const { player: { modifierKeys, keysPressed } } = state;

function handle({ code, isPressed }) {
  if (modifierKeys[code] !== undefined) {
    modifierKeys[code] = isPressed;
  }

  const key = keys[code];

  if (key) {
    const keyIndex = keysPressed.indexOf(key);

    if (isPressed) {
      if (keyIndex === -1) {
        keysPressed.push(key);
      }
    } else if (keyIndex > -1) {
      keysPressed.splice(keyIndex, 1);
    }
  }
}
