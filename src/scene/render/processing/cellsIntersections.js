import hasIntersected from './hasIntersected';

export default function cellsIntersections() {
  return state.player.cells.map((playerCell) => {
    const wallCell = state.wall.cells.find((cell) => hasIntersected({ playerCell, cell }));
    const cellCell = state.cell.cells.find((cell) => hasIntersected({ playerCell, cell }));

    let intersected;

    if (wallCell) {
      intersected = { playerCell, cell: wallCell };
    } else if (cellCell) {
      intersected = { playerCell, cell: cellCell };
    }

    return intersected;
  }).filter(Boolean);
}
