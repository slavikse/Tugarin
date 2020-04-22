window.state.scene = {
  x: 0,
  y: 0,
  color: '#000',
};

setCoordinates();
window.addEventListener('resize', setCoordinates);

function setCoordinates() {
  const { clientWidth, clientHeight } = document.documentElement;

  state.scene.x = Math.round(clientWidth / 2);
  state.scene.y = Math.round(clientHeight / 2);
}
