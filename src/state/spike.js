import { nanoid } from 'nanoid';

const color = '#822';

window.state.spike = {
  cells: [],
};

for (let i = 0; i < 200; i++) {
  state.spike.cells.push({
    id: nanoid(),
    x: Math.round(i * 50 * Math.random()) + 1000,
    y: Math.round(i * 50 * Math.random()) + 800,
    type: 'spike',
    width: state.blockSize,
    height: state.blockSize,
    color,
  });
}
