import hasIntersected from './hasIntersected';

const cells = [].concat(
  state.wall.cells,
  state.spike.cells,
  state.cell.cells,
);

export default function intersections() {
  const intersects = [];

  // todo пересечения только для игрока. враги тоже захотят
  state.player.cells.forEach((player) => {
    cells.forEach((cell) => {
      const isIntersect = hasIntersected({ actor: player, cell });

      if (isIntersect) {
        intersects.push({ actor: player, cell });
      }
    });
  });

  return intersects;
}
