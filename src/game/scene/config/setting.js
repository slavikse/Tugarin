import { ctx, statics, actors, colors, size } from '../state';

export default function setting() {
  drawScene();

  statics.forEach(drawActors);
  Object.values(actors).forEach(drawActors);
}

function drawScene() {
  const { innerWidth, innerHeight } = window;

  ctx.fillStyle = colors.erase;
  ctx.fillRect(0, 0, innerWidth, innerHeight);
}

function drawActors(actor) {
  ctx.fillStyle = actor.color;

  actor.cells.forEach((cell) => {
    ctx.fillRect(...cell.position, size, size);
  });
}
