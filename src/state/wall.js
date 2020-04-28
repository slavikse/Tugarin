import { nanoid } from 'nanoid';

const size = 2 * 8;
const color = '#822';

window.state.wall = {
  cells: [],
};

// todo стена не должна пропускать игрока.
// todo умная генерация
// todo не создавать блоки слишком близко с игроком.
for (let i = 0; i < 1000; i++) {
  state.wall.cells.push({
    id: nanoid(),
    x: Math.round(i * 20 * Math.random()) + 1000,
    y: Math.round(i * 20 * Math.random()) + 800,
    type: 'wall',
    width: size,
    height: size,
    color,
  });
}
