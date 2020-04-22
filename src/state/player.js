const size = 2 * 7;
const color = '#f50';

window.state.player = {
  x: 0,
  y: 0,
  width: size,
  height: size,
  speed: 2 * 4,
  cells: [
    {
      x: 0,
      y: 0,
      color,
    },
    {
      x: size,
      y: size,
      color,
    },
    {
      x: 0,
      y: size,
      color,
    },
    {
      x: size,
      y: size * 2,
      color,
    },
  ],
};

setCoordinates();
window.addEventListener('resize', setCoordinates);

function setCoordinates() {
  const { clientWidth, clientHeight } = document.documentElement;

  state.player.x = Math.round(clientWidth / 2);
  state.player.y = Math.round(clientHeight / 2);
}
