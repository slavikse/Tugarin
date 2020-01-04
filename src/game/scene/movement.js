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
  await Promise.all(Object.values(state.actors).map(redraw));

  if (mode === 'game') {
    setTimeout(move, iterationConstraint);
  } else {
    move();
  }
}

async function redraw(actor) {
  await new Promise((resolve) => {
    setImmediate(async () => {
      draw({ color: state.colors.erase, actor });

      swap(actor);
      intersects(actor);

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

// TODO: запретить поворот в обратном направлении
// Последний занимает место предпоследнего и так до первого.
function swap(actor) {
  for (let i = actor.cells.length - 1; i > 0; i--) {
    actor.cells[i].position = actor.cells[i - 1].position;
  }

  const [cell] = actor.cells;
  cell.position = actions[actor.side](cell.position);
}

function intersects(actor) {
  if (hasEdge(actor)) {
    reset(actor);
  } else {
    sequential(actor);
  }
}

function hasEdge(actor) {
  const [{ position: [x, y] }] = actor.cells;
  const { innerWidth, innerHeight } = window;

  return x < 0 || y < 0 || x > innerWidth || y > innerHeight;
}

// TODO: событие окончания игры для сбора данных для обучения
function reset(actor) {
  actor.side = actor.sideDefault;
  actor.cells = actor.cells.slice(0, 3);

  actor.cells.forEach((cell) => {
    cell.position = cell.positionDefault;
  });
}

function sequential(actor) {
  const rgbString = getColor(actor);

  if (rgbString === state.colors.apple.rgb) {
    actor.cells.push({ position: [-state.size, -state.size] });

    // TODO: создать яблоко в другом случайном месте
  } else if (rgbString === state.colors.wall.rgb) {
    reset(actor);
  } else {
    hasActor({ actor, rgbString });
  }
}

function getColor(actor) {
  const [cell] = actor.cells;
  const [r, g, b] = state.ctx.getImageData(...cell.position, 1, 1).data;

  return `${r},${g},${b}`;
}

function hasActor({ actor, rgbString }) {
  const isActor = Object.values(state.actors)
    .find(({ rgb }) => rgb === rgbString);

  if (isActor) {
    // TODO: когда сталкиваются главной ячейкой (направляющей) - проиграли оба.
    console.log('isActor', rgbString, isActor);
    reset(actor);
  }
}
