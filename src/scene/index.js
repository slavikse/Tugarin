import './create';
import './render';

requestAnimationFrame(gameLoop);

function gameLoop(time) {
  requestAnimationFrame(gameLoop);
  state.scene.tasks.forEach((task) => task(time));
}
