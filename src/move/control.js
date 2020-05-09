window.addEventListener('keydown', ({ code }) => handle({ code, isPressed: true }));
window.addEventListener('keyup', ({ code }) => handle({ code, isPressed: false }));

const keys = { KeyW: 'W', KeyA: 'A', KeyS: 'S', KeyD: 'D' };
const { player: { keysPressed } } = state;

function handle({ code, isPressed }) {
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
