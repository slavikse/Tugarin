'use strict';

import canvas from './canvas';
import scene from './scene';
import './control';

function render() {
  const ctx = canvas();
  scene(ctx);
}

render();

window.addEventListener('resize', render);
