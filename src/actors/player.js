const mainColor = '#f50';

state.actors.player = {
  center: { x: 0, y: 0 },
  width: state.blockSize,
  height: state.blockSize,
  cells: [
    {
      x: 0,
      y: 0,
      mainColor,
    },
    {
      x: state.blockSize,
      y: state.blockSize,
      mainColor,
    },
    {
      x: 0,
      y: state.blockSize,
      mainColor,
    },
    {
      x: state.blockSize,
      y: state.blockSize * 2,
      mainColor,
    },
  ],
};
