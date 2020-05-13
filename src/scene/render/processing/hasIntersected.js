const { scene, player } = state;

// Левый верхний и правый нижний:
// углы игрока (px0, py0) и (px1, py1)
// углы ячейки (cx2, cy2) и (cx3, cy3)
export default function hasIntersected({ actor, cell }) {
  const px0 = scene.center.x - actor.x;
  const py0 = scene.center.y - actor.y;

  const px1 = px0 + actor.size;
  const py1 = py0 + actor.size;

  const cx2 = cell.x - player.x;
  const cy2 = cell.y - player.y;

  const cx3 = cx2 + cell.size;
  const cy3 = cy2 + cell.size;

  // Игрок правее Ячейки || Игрок левее Ячейки.
  const exp1 = px0 >= cx3 || px1 <= cx2;
  // Игрок ниже Ячейки || Игрок выше Ячейки.
  const exp2 = py0 >= cy3 || py1 <= cy2;

  // Когда было пересечение, то все выражения должны быть false.
  return !(exp1 || exp2);
}
