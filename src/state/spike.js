import { nanoid } from 'nanoid';

const type = 'spike';
const color = '#822';

window.state.spike = {
  cells: [],
};

const { spike, size } = state;

for (let i = 0; i < 200; i++) {
  spike.cells.push({
    id: nanoid(),
    x: Math.round(i * 50 * Math.random()) + 1000,
    y: Math.round(i * 50 * Math.random()) + 800,
    type,
    size,
    color,
  });
}
