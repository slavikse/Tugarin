import { canvas, scene } from './scene';
import './control';

window.addEventListener('resize', render);
render();

function render() {
  scene(canvas());
}
