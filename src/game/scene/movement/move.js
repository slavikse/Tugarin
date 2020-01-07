import { actors } from '../state';
import redraw from './redraw';
import mode from './mode';

const iterationConstraint = 1000 / 5;

export default async function move() {
  await Promise.all(Object.values(actors).map(redraw));

  if (mode.type === 'game') {
    setTimeout(move, iterationConstraint);
  } else {
    await move();
  }
}
