function draw() {
  const $scene = document.querySelector('.scene');
  const { clientWidth, clientHeight } = document.documentElement;

  $scene.width = clientWidth;
  $scene.height = clientHeight;

  state.ctx = $scene.getContext('2d', { alpha: false });
  state.ctx.imageSmoothingEnabled = false;
}

draw();

window.addEventListener('resize', draw);
