import { fpsMeter } from '../utils';

requestAnimationFrame(gameLoop);

function gameLoop(time) {
  requestAnimationFrame(gameLoop);

  draws();
  fpsMeter(time);
}

function draws() {
  clearScene();
  drawWalls();
  drawPlayer();

  const cells = checkingIntersections();

  if (cells) {
    cells.forEach((cell) => {
      cell.color = '#f50';
    });
  }
}

function clearScene() {
  const { clientWidth, clientHeight } = document.documentElement;

  state.ctx.fillStyle = state.scene.color;
  state.ctx.fillRect(0, 0, clientWidth, clientHeight);
}

function drawWalls() {
  const { walls: { cells, width, height }, player } = state;

  cells.forEach((cell) => {
    state.ctx.fillStyle = cell.color;
    state.ctx.fillRect(cell.x - player.x, cell.y - player.y, width, height);
  });
}

function drawPlayer() {
  const { scene, player: { cells, width, height } } = state;
  const c = ['#0ff', '#f00'];

  cells.forEach((cell, index) => {
    state.ctx.fillStyle = index === 0 ? c[Math.round(Math.random() * (c.length - 1))] : cell.color;
    state.ctx.fillRect(scene.x - cell.x, scene.y - cell.y, width, height);
  });
}

function checkingIntersections() {
  return state.player.cells.filter((playerCell) => state.walls.cells
    .find((wallCell) => intersects(playerCell, wallCell)));
}

// Левый верхний и правый нижний углы первого (x0, y0) - (x1, y1)
// Левый верхний и правый нижний углы второго (x2, y2) - (x3, y3)
function intersects(playerCell, wallsCell) {
  const x0 = state.scene.x - playerCell.x;
  const y0 = state.scene.y - playerCell.y;

  const x1 = x0 + state.player.width;
  const y1 = y0 + state.player.height;

  const x2 = wallsCell.x - state.player.x;
  const y2 = wallsCell.y - state.player.y;

  const x3 = x2 + state.walls.width;
  const y3 = y2 + state.walls.height;

  // первый правее второго || первый левее второго
  const exp1 = x0 > x3 || x1 < x2;
  // первый ниже второго || первый выше второго
  const exp2 = y0 > y3 || y1 < y2;

  return !(exp1 || exp2);
}
