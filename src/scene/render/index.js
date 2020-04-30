import { fps } from './utils';
import redraw from './redraw';

state.scene.tasks.push((time) => {
  if (state.player.isPlaying) {
    fps.execution.start();

    redraw(time);

    fps.execution.end();
    fps.measure.count(time);
  }
});
