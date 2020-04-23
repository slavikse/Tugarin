const size = 2 * 7;
const color = '#0a0';

window.state.player = {
  isPlaying: false,
  x: 0,
  y: 0,
  width: size,
  height: size,
  speed: 2 * 2,
  cells: [
    {
      id: 0,
      x: 0,
      y: 0,
      color,
    },
    {
      id: 1,
      x: size,
      y: size,
      color,
    },
    {
      id: 2,
      x: 0,
      y: size,
      color,
    },
    {
      id: 3,
      x: size,
      y: size * 2,
      color,
    },
    {
      id: 4,
      x: size,
      y: size * 3,
      color,
    },
    {
      id: 5,
      x: size * 2,
      y: size * 3,
      color,
    },
    {
      id: 6,
      x: size * -1,
      y: size,
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

window.addEventListener('keydown', ({ key }) => {
  if (key === 'Escape') {
    state.player.isPlaying = !state.player.isPlaying;
  }
});
