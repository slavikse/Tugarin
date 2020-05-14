import './create';
import './render';
import { fps } from './render/utils';

const fpsInterval = 1000 / 200;
let previousTimestamp = 0;

setTimeout(frame, fpsInterval);

function frame() {
  const timestamp = performance.now();

  requestAnimationFrame(() => {
    const deltaTime = (timestamp - previousTimestamp) / 1000;
    previousTimestamp = timestamp;

    fps.execution.start();
    gameLoop(deltaTime);
    const executionTime = fps.execution.end();

    setTimeout(frame, fpsInterval - (executionTime + deltaTime));
  });
}

function gameLoop(deltaTime) {
  state.scene.deltaTime = deltaTime;
  state.scene.tasks.forEach((task) => task());
}
