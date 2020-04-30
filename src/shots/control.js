window.addEventListener('keydown', ({ code }) => handle({ code, isPressed: true }));

const keys = { ArrowUp: 'W', ArrowLeft: 'A', ArrowDown: 'S', ArrowRight: 'D' };

// todo
// npm i debounce

function handle({ code, isPressed }) {
  const key = keys[code];

  if (key && isPressed) {
    state.shot.addCell({ side: key });
  }
}
