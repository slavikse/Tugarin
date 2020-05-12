import { nanoid } from 'nanoid';

const mainColor = '#0f0';
const color = '#050';
const size = 30;

window.state.player = {
  x: 0,
  y: 0,
  size,
  isPlaying: false,
  keysPressed: [], // WASD
  modifierKeys: { ShiftLeft: false },
  directionsSpeeds: { W: 0, A: 0, S: 0, D: 0 },
  intersection: { sides: [] },
  addCell(cell) { this.cells.push(createCell(cell)); },
  cells: [
    // todo type main | gun
    { x: 0, y: 0, size, isMain: true },
    // { x: size, y: size, size },
    // { x: 0, y: size },
    // { x: size, y: size * 2 },
    // { x: size, y: size * 3 },
    // { x: size * 2, y: size * 3 },
    // { x: size * -1, y: size },
  ],
};

window.addEventListener('resize', setCenter);
setCenter();

function setCenter() {
  const { clientWidth, clientHeight } = document.documentElement;

  state.player.x = Math.round(clientWidth / 2);
  state.player.y = Math.round(clientHeight / 2);
}

const { player: { cells } } = state;

cells.forEach((cell, index) => {
  cells[index] = createCell(cell);
});

function createCell(cell) {
  cell.id = nanoid();
  cell.type = 'player';
  // todo type
  cell.color = cell.isMain ? mainColor : color;

  return cell;
}
