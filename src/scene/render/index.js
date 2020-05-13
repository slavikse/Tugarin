import { fps, hasRestarted } from './utils';
import redraw from './redraw';

const { scene, player } = state;

scene.tasks.push(() => {
  if (player.isPlaying) {
    fps.execution.start();

    redraw();
    hasRestarted();

    fps.execution.end();
  }
});
