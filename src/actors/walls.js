state.actors.walls = {
  width: state.scene.blockSize,
  height: state.scene.blockSize,
  cells: [],
};

for (let i = 0; i < 100; i++) {
  state.actors.walls.cells.push({
    x: Math.round(((i * 120 * Math.random()) / state.scene.blockSize) / 2) * state.scene.blockSize,
    y: Math.round(((i * 120 * Math.random()) / state.scene.blockSize) / 2) * state.scene.blockSize,
    mainColor: '#559',
  });
}
