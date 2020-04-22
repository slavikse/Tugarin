const { blockSize } = state.scene;
const mainColor = '#f50';

state.actors.player = {
  center: { x: 0, y: 0 },
  width: blockSize,
  height: blockSize,
  cells: [
    {
      x: 0,
      y: 0,
      mainColor,
    },
    {
      x: blockSize,
      y: blockSize,
      mainColor,
    },
    {
      x: 0,
      y: blockSize,
      mainColor,
    },
    {
      x: blockSize,
      y: blockSize * 2,
      mainColor,
    },
  ],
};
