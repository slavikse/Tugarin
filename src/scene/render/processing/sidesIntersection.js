const { scene, player: { intersection } } = state;

export function getIntersection({ actor, cell }) {
  const x = -Math.round(cell.x - actor.x - scene.center.x);
  const y = -Math.round(cell.y - actor.y - scene.center.y);

  return { x, y };
}

export function sidesIntersection({ x, y, actor, cell }) {
  const isAxisX = hasAxis({ axis: x, actor, cell });

  W({ isAxisX, y, cell });
  S({ isAxisX, y, actor });

  const isAxisY = hasAxis({ axis: y, actor, cell });

  A({ isAxisY, x, cell });
  D({ isAxisY, x, actor });
}

function hasAxis({ axis, actor, cell }) {
  return axis >= -actor.size && axis <= cell.size;
}

const deviation = 5;

function W({ isAxisX, y, cell }) {
  const indexW = intersection.sides.indexOf('W');

  if (isAxisX && indexW === -1 && y >= cell.size - deviation && y <= cell.size) {
    intersection.sides.push('W');
  }
}

function S({ isAxisX, y, actor }) {
  const indexS = intersection.sides.indexOf('S');

  if (isAxisX && indexS === -1 && y >= -actor.size && y <= -actor.size + deviation) {
    intersection.sides.push('S');
  }
}

function A({ isAxisY, x, cell }) {
  const indexA = intersection.sides.indexOf('A');

  if (isAxisY && indexA === -1 && x >= cell.size - deviation && x <= cell.size) {
    intersection.sides.push('A');
  }
}

function D({ isAxisY, x, actor }) {
  const indexD = intersection.sides.indexOf('D');

  if (isAxisY && indexD === -1 && x >= -actor.size && x <= -actor.size + deviation) {
    intersection.sides.push('D');
  }
}
