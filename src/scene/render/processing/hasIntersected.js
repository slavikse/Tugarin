const { scene } = state;

// Левый верхний и правый нижний:
// углы (px0, py0) и (px1, py1)
// углы (cx2, cy2) и (cx3, cy3)
export default function hasIntersected({ actor, actorCell, otherCell }) {
  const px0 = scene.center.x - actorCell.x;
  const py0 = scene.center.y - actorCell.y;

  const px1 = px0 + actorCell.width;
  const py1 = py0 + actorCell.height;

  const cx2 = otherCell.x - actor.x;
  const cy2 = otherCell.y - actor.y;

  const cx3 = cx2 + otherCell.width;
  const cy3 = cy2 + otherCell.height;

  // Игрок правее Ячейки || Игрок левее Ячейки.
  const exp1 = px0 >= cx3 || px1 <= cx2;
  // Игрок ниже Ячейки || Игрок выше Ячейки.
  const exp2 = py0 >= cy3 || py1 <= cy2;

  // Когда было пересечение, то все выражения должны быть false.
  return !(exp1 || exp2);
}
