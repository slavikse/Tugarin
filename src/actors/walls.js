state.actors.walls = {
  width: state.blockSize,
  height: state.blockSize,
  cells: [],
};

for (let i = 0; i < 1; i++) {
  state.actors.walls.cells.push({
    x: state.blockSize * 50,
    y: state.blockSize * 35,
    mainColor: '#559',
  });
}
