const { scene } = state;

export default function getDotIntersection({ actor, otherCell }) {
  const x = -Math.round(otherCell.x - actor.x - scene.center.x);
  const y = -Math.round(otherCell.y - actor.y - scene.center.y);

  return { x, y };
}
