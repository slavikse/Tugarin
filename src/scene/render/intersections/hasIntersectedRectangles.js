// Левый верхний и правый нижний углы первого (x0, y0) - (x1, y1)
// Левый верхний и правый нижний углы второго (x2, y2) - (x3, y3)
export default function hasIntersectedRectangles(playerCell, wallCell) {
  const x0 = state.scene.x - playerCell.x;
  const y0 = state.scene.y - playerCell.y;

  const x1 = x0 + state.player.width;
  const y1 = y0 + state.player.height;

  const x2 = wallCell.x - state.player.x;
  const y2 = wallCell.y - state.player.y;

  const x3 = x2 + state.wall.width;
  const y3 = y2 + state.wall.height;

  // Первый правее Второго || Первый левее Второго
  const exp1 = x0 > x3 || x1 < x2;
  // Первый ниже Второго || Первый выше Второго
  const exp2 = y0 > y3 || y1 < y2;

  return !(exp1 || exp2);
}
