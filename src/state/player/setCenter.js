window.addEventListener('resize', setCenter);
setCenter();

function setCenter() {
  const { clientWidth, clientHeight } = document.documentElement;

  state.player.x = Math.round(clientWidth / 2);
  state.player.y = Math.round(clientHeight / 2);
}
