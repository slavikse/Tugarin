let ctx;

const actors = {
  human: {
    position: [100, 100],
    color: 'Chartreuse',
  },
  ai: {
    position: [0, 200],
    color: 'Crimson',
  },
};

const step = 20;
const size = [step, step];

// // TODO: много
// {
//   type: 'wall',
//   position: [0, 0],
//   color: 'Black',
// },
// // TODO: много
// {
//   type: 'apple',
//   position: [200, 200],
//   color: 'DarkOrange',
// }

// TODO: расположение стен.
// const wallsActors = {
//   color: 'Black',
//   walls: [

//   {
//     position: [0, 0],
//   },
//   ]
// };

// TODO: расчертить сетку, чтибы было видно границы
export default function scene(context) {
  ctx = context;

  Object.values(actors).forEach((actor) => {
    ctx.fillStyle = actor.color;
    ctx.fillRect(...actor.position, ...size);
  });
}

// TODO: проверка выхода за границы поля
// с помощью стен. пересечение со стеной или игроком - конец игры.

window.addEventListener('move-top', event => move(event, 'moveTop'));
window.addEventListener('move-left', event => move(event, 'moveLeft'));
window.addEventListener('move-bottom', event => move(event, 'moveBottom'));
window.addEventListener('move-right', event => move(event, 'moveRight'));

function setMovementSide(side) {
}

// TODO: выбор стороны, а змейка движется в эту сторону автоматически
// let selectedSide = 'move-bottom';
function move(event, side) {
  const actor = actors[event.detail.type];

  erase(actor);
  calc(actor, side);
  draw(actor);
}

function erase(actor) {
  ctx.fillStyle = '#333';
  ctx.fillRect(...actor.position, ...size);
}

const actions = {
  moveTop: ([x, y]) => ([x, y - step]),
  moveRight: ([x, y]) => ([x + step, y]),
  moveBottom: ([x, y]) => ([x, y + step]),
  moveLeft: ([x, y]) => ([x - step, y]),
};

function calc(actor, side) {
  actor.position = actions[side](actor.position);
}

function draw(actor) {
  ctx.fillStyle = actor.color;
  ctx.fillRect(...actor.position, ...size);
}
