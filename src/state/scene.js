window.state.scene = {
  center: { x: 0, y: 0 },
  deltaTime: performance.now(),
  color: '#000',
  tasks: [],
};

const { scene } = state;

setSceneCenter();
window.addEventListener('resize', setSceneCenter);

function setSceneCenter() {
  const { clientWidth, clientHeight } = document.documentElement;

  scene.center.x = Math.round(clientWidth / 2);
  scene.center.y = Math.round(clientHeight / 2);
}

requestAnimationFrame(gameLoop);

function gameLoop(time) {
  requestAnimationFrame(gameLoop);

  scene.tasks.forEach((task) => task(time));
}
