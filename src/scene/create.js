const $scene = document.querySelector('.scene');

draw();
window.addEventListener('resize', draw);

function draw() {
  setSceneSize();
  configureContext();
}

function setSceneSize() {
  const { clientWidth, clientHeight } = document.documentElement;

  $scene.width = clientWidth;
  $scene.height = clientHeight;

  const { blockSize } = state.scene;
  state.scene.halfWidth = Math.round((clientWidth / blockSize) / 2) * blockSize;
  state.scene.halfHeight = Math.round((clientHeight / blockSize) / 2) * blockSize;

  state.scene.width = state.scene.halfWidth * 2;
  state.scene.height = state.scene.halfHeight * 2;
}

function configureContext() {
  state.ctx = $scene.getContext('2d', { alpha: false });
  state.ctx.imageSmoothingEnabled = false;
}
