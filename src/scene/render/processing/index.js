import intersections from './intersections';
import destroy from './destroy';
import addCell from './addCell';
import stopping from './stopping';

export default function processing() {
  intersections().forEach(({ actor, cell }) => {
    if (cell.type === 'spike') {
      destroy(actor);
    } else if (cell.type === 'cell') {
      addCell(cell);
    } else if (cell.type === 'wall') {
      stopping(cell);
    }
  });
}
