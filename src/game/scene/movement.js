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
      draw({ action: 'erase', actor });
      calc(actor);

      if(hasEdge(actor)) {
        // TODO: событие для накопления данных для обучения.
        reset(actor);
      } else {
        // TODO: вот тут проверить цвет пикселя?
        await hasIntersects(actor);
      }

      draw({ action: 'draw', actor });

      resolve();
    });
  });
}

function draw({ action, actor }) {
  state.ctx.fillStyle = action === 'erase' ? '#333' : actor.color;
  state.ctx.fillRect(...actor.position, state.size, state.size);
}

const actions = {
  top: ([x, y]) => [x, y - state.size],
  right: ([x, y]) => [x + state.size, y],
  bottom: ([x, y]) => [x, y + state.size],
  left: ([x, y]) => [x - state.size, y],
};

function calc(actor) {
  actor.position = actions[actor.side](actor.position);
}

function hasEdge(actor) {
  const [x, y] = actor.position;
  const { innerWidth, innerHeight } = window;

  return x < 0 || y < 0 || x > innerWidth || y > innerHeight;
}

function reset(actor) {
  actor.side = actor.sideDefault;
  actor.position = actor.positionDefault;
}

async function hasIntersects(actor) {
  await new Promise((resolve) => {
    setImmediate(() => {
      const [r, g, b] = state.ctx.getImageData(...actor.position, 1, 1).data;
      const rgbString = `${r},${g},${b}`;

      // TODO: будет срабатывать, когда змейка будет состоять из 3х ячеек
      const isActor = Object.values(state.actors)
        .find(({ rgb }) => rgb === rgbString);

      const isStaticActor = state.staticActors
        .find(({ rgb }) => rgb === rgbString);

      if (isActor) {
        console.log('isActor', rgbString, isActor)
        // TODO: событие окончания игры.
        // reset(actor);
      } else if (isStaticActor) {
        console.log('isStaticActor', rgbString, isStaticActor);
        // TODO: событие окончания игры.
        // reset(actor);
      }

      resolve();
    });
  });
}
