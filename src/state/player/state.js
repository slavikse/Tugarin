const size = 2 * 8;
const color = '#0a0';

window.state.player = {
  isPlaying: false,
  isKeysPressed: { KeyW: false, KeyD: false, KeyS: false, KeyA: false },
  x: 0,
  y: 0,
  width: size,
  height: size,
  speed: 2 * 2,
  // todo умная генерация
  cells: [
    {
      x: 0,
      y: 0,
    },
    {
      x: size,
      y: size,
    },
    {
      x: 0,
      y: size,
    },
    {
      x: size,
      y: size * 2,
    },
    {
      x: size,
      y: size * 3,
    },
    {
      x: size * 2,
      y: size * 3,
    },
    {
      x: size * -1,
      y: size,
    },
  ],
};

state.player.cells.forEach((cell, index) => {
  state.player.cells[index] = {
    ...cell,
    id: index,
    type: 'player',
    color,
  };
});
