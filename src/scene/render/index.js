import { hasRestarted } from './utils';
import redraw from './redraw';

const { scene, player } = state;

scene.tasks.push(() => {
  if (player.isPlaying) {
    redraw();
    hasRestarted();
  }
});
