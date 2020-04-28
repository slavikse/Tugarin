import hasIntersected from './hasIntersected';

export default function cellsIntersections() {
  return state.player.cells.map((playerCell) => {
    const spikeCell = state.spike.cells.find((cell) => hasIntersected({ playerCell, cell }));
    const cellCell = state.cell.cells.find((cell) => hasIntersected({ playerCell, cell }));

    let intersected;

    if (spikeCell) {
      intersected = { playerCell, cell: spikeCell };
    } else if (cellCell) {
      intersected = { playerCell, cell: cellCell };
    }

    return intersected;
  }).filter(Boolean);
}
