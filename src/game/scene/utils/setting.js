export default function setting(state) {
  drawScene(state);
  drawStaticActors(state);
  drawActors(state);
}

function drawScene(state) {
  const { innerWidth, innerHeight } = window;
  state.ctx.fillStyle = '#333';
  state.ctx.fillRect(0, 0, innerWidth, innerHeight);
}

function drawStaticActors(state) {
  state.staticActors.forEach((actors) => {
    state.ctx.fillStyle = actors.color;

    actors.items.forEach((item) => {
      state.ctx.fillRect(...item.position, state.size, state.size);
    });
  });
}

function drawActors(state) {
  Object.values(state.actors).forEach((actor) => {
    state.ctx.fillStyle = actor.color;
    state.ctx.fillRect(...actor.position, state.size, state.size);
  });
}
