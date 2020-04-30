import clearScene from './clearScene';
import drawActors from './drawActors';
import drawPlayer from './drawPlayer';
import processing from './processing';
import { hasRestarted } from './utils';

export default function redraw() {
  clearScene();

  drawActors('wall');
  drawActors('spike');
  drawActors('cell');

  drawPlayer();

  processing();
  hasRestarted();
}
