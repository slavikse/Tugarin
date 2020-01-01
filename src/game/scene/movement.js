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

async function move() {
  moveActor('human');
  moveActor('ai');

  if (mode === 'game') {
    setTimeout(move, iterationConstraint);
  } else {
    setImmediate(move);
  }
}

function moveActor(name) {
  const actor = state.actors[name];

  draw({ action: 'erase', actor });
  calc({ actor, name });
  canEdge(actor);
  draw({ action: 'draw', actor });
}

function draw({ action, actor }) {
  state.ctx.fillStyle = action === 'erase' ? '#333' : actor.color;
  state.ctx.fillRect(...actor.position, state.step, state.step);
}

const actions = {
  top: ([x, y]) => [x, y - state.step],
  right: ([x, y]) => [x + state.step, y],
  bottom: ([x, y]) => [x, y + state.step],
  left: ([x, y]) => [x - state.step, y],
};

function calc({ actor, name }) {
  actor.position = actions[actors[name].side](actor.position);
}

function canEdge(actor) {
  const [x, y] = actor.position;
  const { innerWidth, innerHeight } = window;

  if (x < 0 || y < 0 || x > innerWidth || y > innerHeight) {
    actor.position = actor.positionDefault;

    // TODO: событие окончания игры.
    console.log('end');
  }
}
