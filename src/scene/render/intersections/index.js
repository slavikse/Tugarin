import hasIntersected from './hasIntersected';

export default function intersections() {
  let cellsIntersected;

  state.player.cells.some((playerCell) => {
    const wallCell = state.wall.cells.find((cell) => hasIntersected({ playerCell, type: 'wall', cell }));
    const cellCell = state.cell.cells.find((cell) => hasIntersected({ playerCell, type: 'cell', cell }));

    if (wallCell) {
      // todo wallCell -> cell ?
      cellsIntersected = { playerCell, wallCell };
    } else if (cellCell) {
      // todo cellCell -> cell ?
      cellsIntersected = { playerCell, cellCell };
    }

    return cellsIntersected;
  });

  return cellsIntersected;
}
