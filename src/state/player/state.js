import createCell from './createCell';

const { size } = state;

window.state.player = {
  x: 0,
  y: 0,
  isPlaying: false,
  keysPressed: [], // WASD
  directionsSpeeds: { W: 0, A: 0, S: 0, D: 0 },
  addCell(cell) { this.cells.push(createCell(cell)); },
  cells: [
    { x: 0, y: 0, size, isMain: true },
    // { x: size, y: size, size },
    // { x: 0, y: size },
    // { x: size, y: size * 2 },
    // { x: size, y: size * 3 },
    // { x: size * 2, y: size * 3 },
    // { x: size * -1, y: size },
  ],
};

const { player: { cells } } = state;

cells.forEach((cell, index) => {
  cells[index] = createCell(cell);
});
