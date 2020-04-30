import hasIntersected from './hasIntersected';

const { player, spike, cell } = state;

export default function cellsIntersections() {
  return player.cells.map((playerCell) => {
    const spikeCell = spike.cells.find((c) => hasIntersected({ playerCell, cell: c }));
    const cellCell = cell.cells.find((c) => hasIntersected({ playerCell, cell: c }));

    let intersected;

    if (spikeCell) {
      intersected = { playerCell, cell: spikeCell };
    } else if (cellCell) {
      intersected = { playerCell, cell: cellCell };
    }

    return intersected;
  }).filter(Boolean);
}
