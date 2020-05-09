const { scene, player } = state;

// Левый верхний и правый нижний углы первого (x0, y0) - (x1, y1)
// Левый верхний и правый нижний углы второго (x2, y2) - (x3, y3)
export default function hasIntersected({ playerCell, cell }) {
  const x0 = scene.center.x - playerCell.x;
  const y0 = scene.center.y - playerCell.y;

  const x1 = x0 + playerCell.size;
  const y1 = y0 + playerCell.size;

  const x2 = cell.x - player.x;
  const y2 = cell.y - player.y;

  const x3 = x2 + cell.size;
  const y3 = y2 + cell.size;

  // Первый правее Второго || Первый левее Второго.
  const exp1 = x0 > x3 || x1 < x2;
  // Первый ниже Второго || Первый выше Второго.
  const exp2 = y0 > y3 || y1 < y2;

  // Когда было пересечение, то все выражения должны быть false.
  return !(exp1 || exp2);
}
