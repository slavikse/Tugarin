import { fps, setDeltaTime, hasRestarted } from './utils';
import redraw from './redraw';

const { scene, player } = state;

scene.tasks.push((time) => {
  if (player.isPlaying) {
    fps.execution.start();

    setDeltaTime(time);
    redraw();
    hasRestarted();

    fps.execution.end();
    fps.measure.count(time);
  }
});
