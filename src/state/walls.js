const size = 2 * 8;
const color = '#559';

window.state.wall = {
  width: size,
  height: size,
  cells: [],
};

// todo умная генерация
for (let i = 0; i < 100; i++) {
  state.wall.cells.push({
    id: i,
    type: 'wall',
    x: Math.round(i * 20 * Math.random()) + 1000,
    y: Math.round(i * 20 * Math.random()) + 800,
    color,
  });
}
