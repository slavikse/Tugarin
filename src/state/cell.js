const size = 2 * 20;
const color = '#252';

window.state.cell = {
  cells: [],
};

for (let i = 0; i < 50; i++) {
  state.cell.cells.push({
    id: i,
    type: 'cell',
    x: Math.round(i * 20 * Math.random()) + 1000,
    y: Math.round(i * 20 * Math.random()) + 800,
    width: size,
    height: size,
    color,
  });
}
