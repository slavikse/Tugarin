import cellsIntersections from './cellsIntersections';
import addCellToPlayer from './addCellToPlayer';
import destroyCell from './destroyCell';

// todo пересечения для пуль, кроме игрока
export default function processing() {
  cellsIntersections().forEach(({ playerCell, cell }) => {
    if (cell.type === 'spike') {
      destroyCell(playerCell);
    } else if (cell.type === 'cell') {
      addCellToPlayer(cell);
    }
  });
}
