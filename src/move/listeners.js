window.addEventListener('keydown', ({ code }) => handle({ code, isPressed: true }));
window.addEventListener('keyup', ({ code }) => handle({ code, isPressed: false }));

function handle({ code, isPressed }) {
  if (['KeyW', 'KeyD', 'KeyS', 'KeyA'].includes(code)) {
    state.player.isKeysPressed[code] = isPressed;
  }
}
