import { fps } from './utils';
import redraw from './redraw';

export default function gameLoop(time) {
  requestAnimationFrame(gameLoop);

  if (state.player.isPlaying) {
    fps.execution.start();

    redraw();

    fps.execution.end();
    fps.measure.fps(time);
  }
}
