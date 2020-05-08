import cellsIntersections from './cellsIntersections';
import destroyCell from './destroyCell';
import addCellToPlayer from './addCellToPlayer';
import stoppingPlayer from './stoppingPlayer';

export default function processing() {
  cellsIntersections().forEach(({ playerCell, cell }) => {
    if (cell.type === 'spike') {
      destroyCell(playerCell);
    } else if (cell.type === 'cell') {
      addCellToPlayer(cell);
    } else if (cell.type === 'wall') {
      stoppingPlayer(cell);
    }
  });
}
