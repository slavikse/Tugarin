import { nanoid } from 'nanoid';

const size = 2 * 20;
const color = '#040';

window.state.cell = {
  cells: [],
};

for (let i = 0; i < 1000; i++) {
  state.cell.cells.push({
    id: nanoid(),
    x: Math.round(i * 20 * Math.random()) + 1000,
    y: Math.round(i * 20 * Math.random()) + 800,
    type: 'cell',
    width: size,
    height: size,
    color,
  });
}
