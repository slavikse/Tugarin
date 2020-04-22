import { fpsMeter } from '../utils';

requestAnimationFrame(gameLoop);

function gameLoop(time) {
  requestAnimationFrame(gameLoop);

  draws();
  fpsMeter(time);
}

function draws() {
  clearScene();
  drawPlayer();
  drawWalls();
}

function clearScene() {
  const { clientWidth, clientHeight } = document.documentElement;

  state.ctx.fillStyle = state.scene.color;
  state.ctx.fillRect(0, 0, clientWidth, clientHeight);
}

function drawPlayer() {
  const {
    scene,
    player: { cells, width, height },
  } = state;

  cells.forEach((cell) => {
    state.ctx.fillStyle = cell.color;
    state.ctx.fillRect(scene.x - cell.x, scene.y - cell.y, width, height);
  });
}

function drawWalls() {
  const {
    walls: { cells, width, height },
    player,
  } = state;

  cells.forEach((cell) => {
    state.ctx.fillStyle = cell.color;
    state.ctx.fillRect(cell.x - player.x, cell.y - player.y, width, height);
  });
}
