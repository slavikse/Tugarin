import { ctx, size } from '..';

export default function drawActors(actor) {
  ctx.fillStyle = actor.rgb;

  actor.cells.forEach((cell) => {
    ctx.fillRect(...cell.position, size, size);
  });
}
