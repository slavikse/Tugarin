const size = 2 * 8;

window.state.walls = {
  width: size,
  height: size,
  cells: [],
};

// todo
for (let i = 0; i < 100; i++) {
  state.walls.cells.push({
    id: i,
    x: Math.round(i * 20 * Math.random()) + 1000,
    y: Math.round(i * 20 * Math.random()) + 800,
    // x: 1900,
    // y: 1400,
    color: '#559',
  });
}
