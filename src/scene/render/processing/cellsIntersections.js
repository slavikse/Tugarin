import hasIntersected from './hasIntersected';

export default function cellsIntersections() {
  return state.player.cells.map((playerCell) => {
    const wallCell = state.wall.cells.find((cell) => hasIntersected({ playerCell, cell }));
    const cellCell = state.cell.cells.find((cell) => hasIntersected({ playerCell, cell }));

    let intersected;

    if (wallCell) {
      intersected = { cell: wallCell, playerCell };
    } else if (cellCell) {
      intersected = { cell: cellCell, playerCell };
    }

    return intersected;
  }).filter(Boolean);
}
