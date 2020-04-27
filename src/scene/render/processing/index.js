import cellsIntersections from './cellsIntersections';
import addingCellToPlayer from './addingCellToPlayer';
import destroyCell from './destroyCell';

export default function processing() {
  cellsIntersections().forEach(({ playerCell, cell }) => {
    if (cell.type === 'wall') {
      destroyCell(playerCell);
    } else if (cell.type === 'cell') {
      addingCellToPlayer({ playerCell, cell });
    }
  });
}
