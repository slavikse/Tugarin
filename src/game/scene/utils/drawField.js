// TODO: расчертить сетку, чтибы было видно границы
export default function drawField(state) {
  Object.values(state.actors).forEach((actor) => {
    state.ctx.fillStyle = actor.color;
    state.ctx.fillRect(...actor.position, state.step, state.step);
  });
}
