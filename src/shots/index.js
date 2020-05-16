window.addEventListener('keydown', ({ code }) => handle({ code, isPressed: true }));
window.addEventListener('keyup', ({ code }) => handle({ code, isPressed: false }));

const sides = { ArrowUp: 'W', ArrowLeft: 'A', ArrowDown: 'S', ArrowRight: 'D' };
const sidesPressed = [];

function handle({ code, isPressed }) {
  const side = sides[code];

  if (side) {
    const keyIndex = sidesPressed.indexOf(side);

    if (isPressed) {
      if (keyIndex === -1) {
        sidesPressed.push(side);
        state.shot.addCell(side);
      }
    } else if (keyIndex > -1) {
      sidesPressed.splice(keyIndex, 1);
    }
  }
}
