import intersections from './intersections';
import destroy from './destroy';
import addCell from './addCell';
import stopping from './stopping';

const { player } = state;

let previousIntersects = [];

export default function processing() {
  const intersects = intersections();

  if (intersects.length > 0) {
    intersects.forEach(({ actor, cell }) => {
      if (cell.type === 'spike') {
        destroy(actor);
      } else if (cell.type === 'cell') {
        addCell(cell);
      } else if (cell.type === 'wall') {
        stopping({ actor: player, cell });
      }
    });

    if (previousIntersects.length > 0) {
      const oldIntersects = previousIntersects.filter((prev) => !intersects
        .find((next) => prev.id === next.id));

      if (oldIntersects) {
        oldIntersects.forEach(stopping);
      }
    }
  } else {
    state.player.intersection.sides = [];
  }

  previousIntersects = intersects;
}
