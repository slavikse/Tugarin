import './create';
import './render';

let previousTime = performance.now();
setTimeout(gameLoop, 5);

function gameLoop() {
  setTimeout(gameLoop, 5);

  const time = performance.now();
  const deltaTime = (time - previousTime) / 1000;
  previousTime = time;

  state.scene.deltaTime = deltaTime;
  state.scene.tasks.forEach((task) => task());
}

// todo можно ли рисовать и просчитывать в разных циклах???
// для отрисовки rAF. для физики setTimeout
