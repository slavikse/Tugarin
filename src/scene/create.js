const $scene = document.querySelector('.scene');

window.addEventListener('resize', draw);
draw();

function draw() {
  setSceneSize();
  configureContext();
}

function setSceneSize() {
  const { clientWidth, clientHeight } = document.documentElement;

  $scene.width = clientWidth;
  $scene.height = clientHeight;

  $scene.focus();
}

function configureContext() {
  state.ctx = $scene.getContext('2d', { alpha: true });
  state.ctx.imageSmoothingEnabled = true;
}
