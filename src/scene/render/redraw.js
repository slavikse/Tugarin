import clearScene from './clearScene';
import drawActors from './drawActors';
import drawPlayer from './drawPlayer';
import { throttling } from './utils';
import processing from './processing';
import hasRestarted from './hasRestarted';

export default function redraw(time) {
  clearScene();

  drawActors('wall');
  drawActors('spike');
  drawActors('cell');

  drawPlayer();

  if (throttling(time)) {
    processing();
  }

  hasRestarted();
}
