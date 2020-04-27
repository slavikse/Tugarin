window.addEventListener('keydown', ({ code }) => handle({ code, isPressed: true }));
window.addEventListener('keyup', ({ code }) => handle({ code, isPressed: false }));

const keys = { KeyW: 'W', KeyA: 'A', KeyS: 'S', KeyD: 'D' };

function handle({ code, isPressed }) {
  const key = keys[code];

  if (key) {
    const keyIndex = state.player.keysPressed.indexOf(key);

    if (isPressed) {
      if (keyIndex === -1) {
        state.player.keysPressed.push(key);
      }
    } else {
      state.player.keysPressed.splice(keyIndex, 1);
    }
  }
}
