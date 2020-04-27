const size = 2 * 8;
const color = '#822';

window.state.wall = {
  width: size,
  height: size,
  cells: [],
};

// todo стена не должна пропускать игрока.

// todo умная генерация
// todo не создавать блоки слишком близко с игроком.
for (let i = 0; i < 20; i++) {
  state.wall.cells.push({
    id: i,
    x: Math.round(i * 20 * Math.random()) + 1000,
    y: Math.round(i * 20 * Math.random()) + 800,
    color,
  });
}
