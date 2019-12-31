'use strict';

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
function scene(context) {
  ctx = context;

  Object.values(actors).forEach((actor) => {
    ctx.fillStyle = actor.color;
    ctx.fillRect(...actor.position, ...size);
  });
}

// TODO: проверка выхода за границы поля
// с помощью стен. пересечение со стеной или игроком - конец игры.

window.addEventListener('move-top', event => move(event, 'top'));
window.addEventListener('move-left', event => move(event, 'left'));
window.addEventListener('move-bottom', event => move(event, 'bottom'));
window.addEventListener('move-right', event => move(event, 'right'));

function move(event, type) {
  const actor = actors[event.detail.type];

  erase(actor);
  calc(actor, type);
  draw(actor);
}

function erase(actor) {
  ctx.fillStyle = '#333';
  ctx.fillRect(...actor.position, ...size);
}

const actions = {
  top: ([x, y]) => ([x, y - step]),
  right: ([x, y]) => ([x + step, y]),
  bottom: ([x, y]) => ([x, y + step]),
  left: ([x, y]) => ([x - step, y]),
};

function calc(actor, type) {
  actor.position = actions[type](actor.position);
}

function draw(actor) {
  ctx.fillStyle = actor.color;
  ctx.fillRect(...actor.position, ...size);
}

module.exports = scene;
