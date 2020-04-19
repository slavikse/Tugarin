import { fpsMeter } from '../utils';

requestAnimationFrame(gameLoop);

function gameLoop(deltaTime) {
  requestAnimationFrame(gameLoop);

  draw();
  fpsMeter(deltaTime);
}

function draw() {
  const { clientWidth, clientHeight } = document.documentElement;

  drawScene({ clientWidth, clientHeight });
  drawPlayer({ clientWidth, clientHeight });
  drawWalls();
}

function drawScene({ clientWidth, clientHeight }) {
  state.ctx.fillStyle = state.scene.mainColor;
  state.ctx.fillRect(0, 0, clientWidth, clientHeight);
}

function drawPlayer({ clientWidth, clientHeight }) {
  const halfWidth = Math.round(clientWidth / 2);
  const halfHeight = Math.round(clientHeight / 2);

  const { cells, width, height } = state.actors.player;

  cells.forEach((cell) => {
    state.ctx.fillStyle = cell.mainColor;
    state.ctx.fillRect(halfWidth - cell.x, halfHeight - cell.y, width, height);
  });
}

function drawWalls() {
  const { cells, width, height } = state.actors.walls;
  const { center } = state.actors.player;

  cells.forEach((cell) => {
    state.ctx.fillStyle = cell.mainColor;
    state.ctx.fillRect(cell.x - center.x, cell.y - center.y, width, height);
  });
}
