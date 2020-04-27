window.state.scene = {
  x: 0,
  y: 0,
  color: '#000',
  tasks: [],
};

setSceneCenter();
window.addEventListener('resize', setSceneCenter);

function setSceneCenter() {
  const { clientWidth, clientHeight } = document.documentElement;

  state.scene.x = Math.round(clientWidth / 2);
  state.scene.y = Math.round(clientHeight / 2);
}

requestAnimationFrame(gameLoop);

function gameLoop(time) {
  requestAnimationFrame(gameLoop);
  state.scene.tasks.forEach((task) => task(time));
}
