import { nanoid } from 'nanoid';

// todo rename. apple?
const type = 'cell';
const color = '#040';

window.state.cell = {
  cells: [],
};

const size = 20;

for (let i = 0; i < 1000; i++) {
  state.cell.cells.push({
    id: nanoid(),
    x: Math.round(i * 30 * Math.random()) + 1000,
    y: Math.round(i * 30 * Math.random()) + 800,
    type,
    size,
    color,
  });
}
