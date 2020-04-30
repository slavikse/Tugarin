window.state.scene = {
  x: 0,
  y: 0,
  deltaTime: performance.now(),
  color: '#000',
  tasks: [],
};

const { scene } = state;

setSceneCenter();
window.addEventListener('resize', setSceneCenter);

function setSceneCenter() {
  const { clientWidth, clientHeight } = document.documentElement;

  scene.x = Math.round(clientWidth / 2);
  scene.y = Math.round(clientHeight / 2);
}

requestAnimationFrame(gameLoop);

function gameLoop(time) {
  requestAnimationFrame(gameLoop);

  scene.tasks.forEach((task) => task(time));
}
