let state;

export default function movement(stateRef) {
  state = stateRef;

  window.addEventListener('movement', setSideActor);
}

function setSideActor({ detail: { name, side } }) {
  state.actors[name].side = side;
}

// train | game
let mode = 'game';

const $mode = document.querySelector('.mode');
$mode.addEventListener('click', () => {
  mode = mode === 'game' ? 'train' : 'game';
});

const iterationConstraint = 1000 / 5;
setTimeout(move, iterationConstraint);

async function move() {
  await Promise.all(Object.values(state.actors).map(moveActor));

  if (mode === 'game') {
    setTimeout(move, iterationConstraint);
  } else {
    move();
  }
}

async function moveActor(actor) {
  await new Promise((resolve) => {
    setImmediate(async () => {
      draw({ color: state.colors.erase, actor });
      swap(actor);

      if (hasEdge(actor)) {
        reset(actor);
      } else {
        hasIntersects(actor);
      }

      draw({ color: actor.color, actor });
      resolve();
    });
  });
}

function draw({ color, actor }) {
  state.ctx.fillStyle = color;

  actor.cells.forEach((cell) => {
    state.ctx.fillRect(...cell.position, state.size, state.size);
  });
}

const actions = {
  top: ([x, y]) => [x, y - state.size],
  right: ([x, y]) => [x + state.size, y],
  bottom: ([x, y]) => [x, y + state.size],
  left: ([x, y]) => [x - state.size, y],
};

// Последний занимает место предпоследнего.
function swap(actor) {
  for (let i = actor.cells.length - 1; i > 0; i--) {
    actor.cells[i].position = actor.cells[i - 1].position;
  }

  const [cell] = actor.cells;
  cell.position = actions[actor.side](cell.position);
}

function hasEdge(actor) {
  const [{ position: [x, y] }] = actor.cells;
  const { innerWidth, innerHeight } = window;

  return x < 0 || y < 0 || x > innerWidth || y > innerHeight;
}

// TODO: событие окончания игры для обучения
function reset(actor) {
  actor.side = actor.sideDefault;
  actor.cells = actor.cells.slice(0, 3);

  actor.cells.forEach((cell) => {
    cell.position = cell.positionDefault;
  });
}

function hasIntersects(actor) {
  const [cell] = actor.cells;
  const [r, g, b] = state.ctx.getImageData(...cell.position, 1, 1).data;
  const rgbString = `${r},${g},${b}`;

  const isStaticActor = state.statics
    .find(({ rgb }) => rgb === rgbString);

  const isActor = Object.values(state.actors)
    .find(({ rgb }) => rgb === rgbString);

  if (isStaticActor) {
    if (rgbString === state.colors.apple.rgb) {
      console.log('+1');
      // TODO: увеличение змейки в размерах.
      // TODO: создать яблоко в другом случайном месте
    } else {
      reset(actor);
    }
  } else if (isActor) {
    // TODO: когда оба сталкиваются главной ячейкой - проиграли оба.
    console.log('isActor', rgbString, isActor);
    reset(actor);
  }
}
