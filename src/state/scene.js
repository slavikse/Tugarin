window.state.scene = {
  center: { x: 0, y: 0 },
  deltaTime: performance.now(),
  color: '#000',
  tasks: [],
};

window.addEventListener('resize', setCenter);
setCenter();

function setCenter() {
  const { clientWidth, clientHeight } = document.documentElement;

  state.scene.center.x = Math.round(clientWidth / 2);
  state.scene.center.y = Math.round(clientHeight / 2);
}
