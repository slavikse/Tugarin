import hasIntersected from './hasIntersected';

const otherCells = [].concat(
  state.gun.cells,
  state.wall.cells,
  state.spike.cells,
);

export default function intersections() {
  const intersects = [];

  // todo пересечение других активных акторов
  Object.entries(state.player.cells).forEach(([side, actorCell]) => {
    otherCells.forEach((otherCell) => {
      const data = { actor: state.player, side, actorCell, otherCell };
      const isIntersect = hasIntersected(data);

      if (isIntersect) {
        intersects.push(data);
      }
    });
  });

  return intersects;
}
