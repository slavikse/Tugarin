import { nanoid } from 'nanoid';

window.state.spike = {
  cells: [],
};

const size = 20;

for (let i = 0; i < 10; i++) {
  state.spike.cells.push({
    id: nanoid(),
    x: Math.round(i * 50 * Math.random()) + 1000,
    y: Math.round(i * 50 * Math.random()) + 800,
    type: 'spike',
    width: size,
    height: size,
    color: '#822',
  });
}
