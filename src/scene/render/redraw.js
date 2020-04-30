import clearScene from './clearScene';
import drawActors from './drawActors';
import drawPlayer from './drawPlayer';
import processing from './processing';

export default function redraw() {
  clearScene();

  drawActors('wall');
  drawActors('spike');
  drawActors('cell');
  drawActors('shot');

  drawPlayer();

  processing();
}
