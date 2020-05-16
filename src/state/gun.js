import { nanoid } from 'nanoid';

window.state.gun = {
  cells: [],
};

const size = 20;

for (let i = 0; i < 10; i++) {
  state.gun.cells.push({
    id: nanoid(),
    x: Math.round(i * 30 * Math.random()) + 1000,
    y: Math.round(i * 30 * Math.random()) + 800,
    type: 'gun',
    width: size,
    height: size,
    color: '#040',
  });
}
