import { nanoid } from 'nanoid';

const type = 'wall';
const color = '#888';

window.state.wall = {
  cells: [],
};

// todo стена не должна пропускать игрока.

const size = 20;

for (let i = 0; i < 1000; i++) {
  state.wall.cells.push({
    id: nanoid(),
    x: Math.round(i * 30 * Math.random()) + 1000,
    y: Math.round(i * 30 * Math.random()) + 800,
    type,
    size,
    color,
  });
}
