import state from '..';

export default function setting() {
  drawScene();

  state.statics.forEach(drawActors);
  Object.values(state.actors).forEach(drawActors);
}

function drawScene() {
  const { innerWidth, innerHeight } = window;

  state.ctx.fillStyle = state.colors.erase;
  state.ctx.fillRect(0, 0, innerWidth, innerHeight);
}

function drawActors(actor) {
  state.ctx.fillStyle = actor.color;

  actor.cells.forEach((cell) => {
    state.ctx.fillRect(...cell.position, state.size, state.size);
  });
}
