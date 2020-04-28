import createCell from './createCell';

window.state.player = {
  x: 0,
  y: 0,
  isPlaying: false,
  keysPressed: [], // WASD
  directionsSpeeds: { W: 0, A: 0, S: 0, D: 0 },
  cells: [
    { x: 0, y: 0, width: state.blockSize, height: state.blockSize, isMain: true },
    // { x: size, y: size, size },
    // { x: 0, y: size },
    // { x: size, y: size * 2 },
    // { x: size, y: size * 3 },
    // { x: size * 2, y: size * 3 },
    // { x: size * -1, y: size },
  ],
};

state.player.cells.forEach((cell, index) => {
  state.player.cells[index] = createCell(cell);
});

export function addCell(cell) {
  state.player.cells.push(createCell(cell));
}
