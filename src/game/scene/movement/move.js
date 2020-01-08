import { actors } from '../state';
import redraw from './redraw';
import mode from './mode';

const fps = 5;
let moveTimeoutId;

window.addEventListener('resize', () => {
  clearTimeout(moveTimeoutId);
});

export default async function move() {
  await Promise.all(Object.values(actors).map(redraw));

  if (mode.type === 'game') {
    moveTimeoutId = setTimeout(move, 1000 / fps);
  } else {
    await move();
  }
}
