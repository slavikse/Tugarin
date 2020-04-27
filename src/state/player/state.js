const size = 2 * 20;
const color = '#0a0';

// todo выделить главную ячейку. потеряв ее, игрок проиграет.
window.state.player = {
  x: 0,
  y: 0,
  width: size,
  height: size,
  isPlaying: false,
  keysPressed: [], // WASD
  directionsSpeeds: { W: 0, A: 0, S: 0, D: 0 },
  // todo умная генерация
  cells: [
    {
      x: 0,
      y: 0,
    },
    // {
    //   x: size,
    //   y: size,
    // },
    // {
    //   x: 0,
    //   y: size,
    // },
    // {
    //   x: size,
    //   y: size * 2,
    // },
    // {
    //   x: size,
    //   y: size * 3,
    // },
    // {
    //   x: size * 2,
    //   y: size * 3,
    // },
    // {
    //   x: size * -1,
    //   y: size,
    // },
  ],
};

state.player.cells.forEach((cell, index) => {
  state.player.cells[index] = {
    ...cell,
    id: index,
    color,
  };
});
