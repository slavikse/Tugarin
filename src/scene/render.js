import { fpsMeter } from '../utils';

requestAnimationFrame(gameLoop);

function gameLoop(deltaTime) {
  requestAnimationFrame(gameLoop);

  draws();
  fpsMeter(deltaTime);
}

function draws() {
  clearScene();
  drawPlayer();
  drawWalls();
}

function clearScene() {
  const { clientWidth, clientHeight } = document.documentElement;

  state.ctx.fillStyle = state.scene.mainColor;
  state.ctx.fillRect(0, 0, clientWidth, clientHeight);
}

function drawPlayer() {
  const { cells, width, height } = state.actors.player;
  const { halfWidth, halfHeight } = state.scene;

  cells.forEach((cell) => {
    state.ctx.fillStyle = cell.mainColor;
    state.ctx.fillRect(halfWidth - cell.x, halfHeight - cell.y, width, height);
  });
}

function drawWalls() {
  const { center } = state.actors.player;
  const { cells, width, height } = state.actors.walls;

  cells.forEach((cell) => {
    state.ctx.fillStyle = cell.mainColor;
    state.ctx.fillRect(cell.x - center.x, cell.y - center.y, width, height);
  });
}
