import hasIntersected from './hasIntersected';

const cells = [].concat(
  state.spike.cells,
  state.cell.cells,
  state.wall.cells,
);

export default function cellsIntersections() {
  const intersects = [];

  state.player.cells.forEach((playerCell) => {
    for (let i = 0; i < cells.length - 1; i += 1) {
      const isIntersect = hasIntersected({ playerCell, cell: cells[i] });

      if (isIntersect) {
        intersects.push({ playerCell, cell: cells[i] });
      }
    }
  });

  return intersects;
}
