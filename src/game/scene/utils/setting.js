export default function setting(state) {
  drawField(state);
  drawActors(state);
}

// TODO:
function drawField(state) {
}

function drawActors(state) {
  Object.values(state.actors).forEach((actor) => {
    state.ctx.fillStyle = actor.color;
    state.ctx.fillRect(...actor.position, state.step, state.step);
  });
}
