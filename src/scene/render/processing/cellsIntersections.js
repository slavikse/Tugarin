import hasIntersected from './hasIntersected';

const { player, spike, cell, wall } = state;

export default function cellsIntersections() {
  return player.cells.map((playerCell) => {
    const spikeCell = spike.cells.find((c) => hasIntersected({ playerCell, cell: c }));
    const cellCell = cell.cells.find((c) => hasIntersected({ playerCell, cell: c }));
    const wallCell = wall.cells.find((c) => hasIntersected({ playerCell, cell: c }));

    let intersected;

    if (spikeCell) {
      intersected = { playerCell, cell: spikeCell };
    } else if (cellCell) {
      intersected = { playerCell, cell: cellCell };
    } else if (wallCell) {
      intersected = { playerCell, cell: wallCell };
    }

    return intersected;
  }).filter(Boolean);
}
