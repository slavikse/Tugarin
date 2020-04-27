const size = 2 * 20;
const color = '#252';

window.state.cell = {
  width: size,
  height: size,
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

for (let i = 0; i < 100; i++) {
  state.cell.cells.push({
    id: i,
    x: Math.round(i * 20 * Math.random()) + 1000,
    y: Math.round(i * 20 * Math.random()) + 800,
    color,
  });
}
