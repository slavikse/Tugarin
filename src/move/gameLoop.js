import movement from './movement';
import { getDeltaTime } from './utils';

const frameTime = 1000 / 60;
let stepTime = 0;

export default function gameLoop(time) {
  requestAnimationFrame(gameLoop);

  if (state.player.isPlaying) {
    nextFrame(time);
  }
}

function nextFrame(time) {
  stepTime += getDeltaTime(time);

  if (stepTime >= frameTime) {
    stepTime = 0;

    movement();
  }
}
