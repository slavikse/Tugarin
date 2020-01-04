import canvas from './canvas';
import scene from './scene';
import './control';

window.addEventListener('resize', render);
render();

function render() {
  const ctx = canvas();
  scene(ctx);
}
