let state;

export default function movement(stateX) {
  state = stateX;

  window.addEventListener('movement', setMovement);
}

const actors = {
  human: {
    name: 'human',
    side: 'right',
  },
  ai: {
    name: 'ai',
    side: 'bottom',
  },
};

function setMovement(e) {
  actors[e.detail.name] = e.detail;
}

// TODO: вводить через команду запуска?
// train | game
const mode = 'game';
const iterationConstraint = 1000 / 15;
setTimeout(move, iterationConstraint);

function move() {
  // TODO: параллельно
  moveActor('human');
  moveActor('ai');

  if (mode === 'game') {
    setTimeout(move, iterationConstraint);
  } else {
    setImmediate(move);
  }
}

function moveActor(name) {
  erase(name);
  calc(name);

  // TODO: проверка выхода за границы поля с помощью сетки.
  // с помощью стен. пересечение со стеной или игроком - конец игры.

  // TODO: начало новой игры

  draw(name);
}

function erase(name) {
  const actor = state.actors[name];

  state.ctx.fillStyle = '#333';
  state.ctx.fillRect(...actor.position, state.step, state.step);
}

const actions = {
  top: ([x, y]) => [x, y - state.step],
  right: ([x, y]) => [x + state.step, y],
  bottom: ([x, y]) => [x, y + state.step],
  left: ([x, y]) => [x - state.step, y],
};

function calc(name) {
  const actor = state.actors[name];

  actor.position = actions[actors[name].side](actor.position);
}

function draw(name) {
  const actor = state.actors[name];

  state.ctx.fillStyle = actor.color;
  state.ctx.fillRect(...actor.position, state.step, state.step);
}
