'use strict';

let ctx;

const actors = [
  {
    type: 'human',
    // x, y: [0, 0] - левый верхний угол.
    position: [100, 100],
    color: 'Chartreuse',
    colorDefault: 'DimGray',
  },
  {
    type: 'ai',
    position: [0, 200],
    color: 'Crimson',
    colorDefault: 'DimGray',
  },
  {
    type: 'wall',
    position: [0, 0],
    color: 'Black',
    colorDefault: 'Black',
  },
  {
    type: 'apple',
    position: [200, 200],
    color: 'DarkOrange',
    colorDefault: 'DarkOrange',
  }
];

// TODO: расположение стен.
// const walls = [];
const size = [50, 50];
const step = 50;

function scene(context) {
  ctx = context;
  init();
}

function init() {
  actors.forEach((actor) => {
    ctx.fillStyle = actor.color;
    ctx.fillRect(...actor.position, ...size);
  });
}

// TODO: проверка выхода за границы поля
// с помощью стен. пересечение со стеной или игроком - конец игры.

window.addEventListener('move-top', moveTop, true);
window.addEventListener('move-left', moveLeft, true);
window.addEventListener('move-bottom', moveBottom, true);
window.addEventListener('move-right', moveRight, true);

function moveTop(event) {
  movePlayer({ event, type: 'top' });
}

function moveLeft(event) {
  movePlayer({ event, type: 'left' });
}

function moveBottom(event) {
  movePlayer({ event, type: 'bottom' });
}

function moveRight(event) {
  movePlayer({ event, type: 'right' });
}

function movePlayer({ event, type }) {
  const actor = actors.find((actor) => actor.type === event.detail.type);

  eraseInPosition(actor);
  calculateNewPosition({ actor, type });
  drawInNewPosition(actor);
}

function eraseInPosition(actor) {
  ctx.fillStyle = actor.colorDefault;
  ctx.fillRect(...actor.position, ...size);
}

const moveActions = {
  top: ({ x, y }) => ([x, y - step]),
  right: ({ x, y }) => ([x + step, y]),
  bottom: ({ x, y }) => ([x, y + step]),
  left: ({ x, y }) => ([x - step, y]),
};

function calculateNewPosition({ actor, type }) {
  const [x, y] = actor.position;
  actor.position = moveActions[type]({ x, y });
}

function drawInNewPosition(actor) {
  ctx.fillStyle = actor.color;
  ctx.fillRect(...actor.position, ...size);
}

module.exports = scene;
