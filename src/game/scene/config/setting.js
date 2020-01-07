import { statics, drawActor, actors, ctx, colors } from '../state';

export default function setting() {
  drawScene();

  statics.forEach(drawActor);
  Object.values(actors).forEach(drawActor);
}

function drawScene() {
  const { innerWidth, innerHeight } = window;

  ctx.fillStyle = colors.erase.rgb;
  ctx.fillRect(0, 0, innerWidth, innerHeight);
}
