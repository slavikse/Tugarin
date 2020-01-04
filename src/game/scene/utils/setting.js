export default function setting(state) {
  drawScene(state);

  state.statics.forEach((actor) => drawActors({ state, actor }));
  Object.values(state.actors).forEach((actor) => drawActors({ state, actor }));
}

function drawScene(state) {
  const { innerWidth, innerHeight } = window;
  state.ctx.fillStyle = state.colors.erase;
  state.ctx.fillRect(0, 0, innerWidth, innerHeight);
}

function drawActors({ state, actor }) {
  state.ctx.fillStyle = actor.color;

  actor.cells.forEach((cell) => {
    state.ctx.fillRect(...cell.position, state.size, state.size);
  });
}
