import clearScene from './clearScene';
import drawActors from './drawActors';
import drawPlayer from './drawPlayer';
import processing from './processing';

const actors = ['wall', 'spike', 'cell', 'shot'];

export default function redraw() {
  clearScene();

  actors.forEach(drawActors);
  drawPlayer();

  processing();
}
