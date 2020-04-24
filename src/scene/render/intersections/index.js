import hasIntersectedRectangles from './hasIntersectedRectangles';

export default function intersections() {
  return state.player.cells.filter((playerCell) => state.wall.cells
    .find((wallCell) => hasIntersectedRectangles(playerCell, wallCell)));
}
