import clearScene from './clearScene';
import drawActors from './drawActors';
import drawPlayer from './drawPlayer';
import processing from './processing';
import './gameLoop';

const { scene, player } = state;
const actorsTypes = ['wall', 'spike', 'gun', 'shot'];

scene.tasks.push(() => {
  if (player.isPlaying) {
    clearScene();

    actorsTypes.forEach(drawActors);
    drawPlayer();

    processing();
  }
});
