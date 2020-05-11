import { hasIntersected } from '../utils';

const cells = [].concat(
  state.spike.cells,
  state.cell.cells,
  state.wall.cells,
);

export default function intersections() {
  const intersects = [];

  state.player.cells.forEach((player) => {
    for (let i = 0; i < cells.length - 1; i += 1) {
      const isIntersect = hasIntersected({ actor: player, cell: cells[i] });

      if (isIntersect) {
        intersects.push({ actor: player, cell: cells[i] });
      }
    }
  });

  return intersects;
}
