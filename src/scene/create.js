const $scene = document.querySelector('.scene');

function draw() {
  setSceneSize();
  configureContext();
}

function setSceneSize() {
  const { clientWidth, clientHeight } = document.documentElement;

  $scene.width = clientWidth;
  $scene.height = clientHeight;

  state.scene.halfWidth = Math.round((clientWidth / state.blockSize) / 2) * state.blockSize;
  state.scene.halfHeight = Math.round((clientHeight / state.blockSize) / 2) * state.blockSize;

  state.scene.width = state.scene.halfWidth * 2;
  state.scene.height = state.scene.halfHeight * 2;
}

function configureContext() {
  state.ctx = $scene.getContext('2d', { alpha: false });
  state.ctx.imageSmoothingEnabled = false;
}

draw();
window.addEventListener('resize', draw);
