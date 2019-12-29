'use strict';

function scene(ctx) {
  ctx.fillStyle = 'green';
  ctx.fillRect(10, 10, 100, 50);

  ctx.fillStyle = 'red';
  ctx.fillRect(110, 60, 100, 50);
}

module.exports = scene;
