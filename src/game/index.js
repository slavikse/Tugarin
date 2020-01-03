import canvas from './canvas';
// TODO: пока так
import scene from './scene/scene';
import './control';

window.addEventListener('resize', render);
render();

function render() {
  const ctx = canvas();
  scene(ctx);
}
