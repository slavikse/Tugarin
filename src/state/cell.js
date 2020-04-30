import { nanoid } from 'nanoid';

const type = 'cell';
const color = '#040';

window.state.cell = {
  cells: [],
};

const { cell, size } = state;

for (let i = 0; i < 1000; i++) {
  cell.cells.push({
    id: nanoid(),
    x: Math.round(i * 30 * Math.random()) + 1000,
    y: Math.round(i * 30 * Math.random()) + 800,
    type,
    size,
    color,
  });
}
