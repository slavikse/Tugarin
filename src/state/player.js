import { nanoid } from 'nanoid';

const mainColor = '#0f0';
const color = '#050';
const size = 40;

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
  cell.color = cell.isMain ? mainColor : color;

  return cell;
}
