const { scene } = state;

export function getIntersection({ actor, cell }) {
  const x = -Math.round(cell.x - actor.x - scene.center.x);
  const y = -Math.round(cell.y - actor.y - scene.center.y);

  return { x, y };
}

export function getSideIntersection({ x, y, actor, cell }) {
  const deviation = 3;
  let side = '';

  if (x >= -actor.size && x <= cell.size) {
    if (y >= cell.size - deviation && y <= cell.size) {
      side = 'W'; // ^
    }

    if (y >= -actor.size && y <= -actor.size + deviation) {
      side = 'S'; // _
    }
  }

  if (y >= -actor.size && y <= cell.size) {
    if (x >= -actor.size && x <= -actor.size + deviation) {
      side = 'D'; // ->
    }

    if (x >= cell.size - deviation && x <= cell.size) {
      side = 'A'; // <-
    }
  }

  // todo может заходить внутрь объекта и пересечением это не считается...
  console.log(side, `${x}, ${y}`);

  return side;
}
