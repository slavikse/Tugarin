import { fps } from './utils';

let prevTimestamp = 0;

requestAnimationFrame(gameLoop);

function gameLoop() {
  requestAnimationFrame(gameLoop);

  const timestamp = performance.now();
  const deltaTime = (timestamp - prevTimestamp) / 1000;
  prevTimestamp = timestamp;

  fps.execution.start(timestamp);

  state.scene.deltaTime = deltaTime;
  state.scene.tasks.forEach((task) => task());

  const endTimestamp = performance.now();
  fps.execution.end(endTimestamp);
  fps.count(endTimestamp);
}
