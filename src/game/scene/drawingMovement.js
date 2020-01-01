let state;

export default function drawingMovement(stateX) {
  state = stateX;

  window.addEventListener('move-top', e => setMovement(e, 'moveTop'));
  window.addEventListener('move-left', e => setMovement(e, 'moveLeft'));
  window.addEventListener('move-bottom', e => setMovement(e, 'moveBottom'));
  window.addEventListener('move-right', e => setMovement(e, 'moveRight'));
}

// TODO: как устроить игру для двоих. мл vs игрок
const movement = {
  e: { detail: { type: 'human' } },
  side: 'moveRight',
};

function setMovement(e, side) {
  movement.e = e;
  movement.side = side;
}

// TODO: вводить через команду запуска?
// train | game
const mode = 'game';
const iterationConstraint = 1000 / 15;
setTimeout(move, iterationConstraint);

function move() {
  const actor = state.actors[movement.e.detail.type];

  erase(actor);
  calc(actor);

  // TODO: проверка выхода за границы поля
  // с помощью стен. пересечение со стеной или игроком - конец игры.

  // TODO: начало новой игры

  draw(actor);

  if (mode === 'game') {
    setTimeout(move, iterationConstraint);
  } else {
    setImmediate(move);
  }
}

function erase(actor) {
  state.ctx.fillStyle = '#333';
  state.ctx.fillRect(...actor.position, state.step, state.step);
}

const actions = {
  moveTop: ([x, y]) => [x, y - state.step],
  moveRight: ([x, y]) => [x + state.step, y],
  moveBottom: ([x, y]) => [x, y + state.step],
  moveLeft: ([x, y]) => [x - state.step, y],
};

function calc(actor) {
  actor.position = actions[movement.side](actor.position);
}

function draw(actor) {
  state.ctx.fillStyle = actor.color;
  state.ctx.fillRect(...actor.position, state.step, state.step);
}
