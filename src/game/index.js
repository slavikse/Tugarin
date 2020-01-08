import debounce from 'lodash.debounce';

import { canvas, scene } from './scene';
import './control';

const renderDebounced = debounce(render, 300);
window.addEventListener('resize', renderDebounced);

render();

function render() {
  scene(canvas());
}
