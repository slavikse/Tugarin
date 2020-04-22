const size = 2 * 8;

window.state.walls = {
  width: size,
  height: size,
  cells: [],
};

// todo
for (let i = 0; i < 100; i++) {
  state.walls.cells.push({
    x: Math.round(((i * 120 * Math.random()) / size) / 2) * size,
    y: Math.round(((i * 120 * Math.random()) / size) / 2) * size,
    color: '#559',
  });
}
