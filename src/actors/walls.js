state.actors.walls = {
  width: 20,
  height: 20,
  cells: [],
};

for (let i = 0; i < 50; i++) {
  state.actors.walls.cells.push({
    x: Math.round(400 * i * Math.random()),
    y: Math.round(420 * i * Math.random()),
    mainColor: '#f00',
  });
}
