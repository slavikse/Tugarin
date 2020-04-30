import { nanoid } from 'nanoid';

const color = '#040';

window.state.cell = {
  cells: [],
};

for (let i = 0; i < 1000; i++) {
  state.cell.cells.push({
    id: nanoid(),
    x: Math.round(i * 30 * Math.random()) + 1000,
    y: Math.round(i * 30 * Math.random()) + 800,
    type: 'cell',
    size: state.size,
    color,
  });
}
