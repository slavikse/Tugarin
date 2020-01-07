import colors from './colors';
import { createStatics, drawActor } from './statics';
import createActors from './actors';

const size = 20;

let ctx;
let statics;
let actors;

export function init(ctxRef) {
  ctx = ctxRef;

  const types = [
    { name: 'wall', count: 200 },
    { name: 'apple', count: 40 },
  ];

  statics = createStatics({ types, isWalls: true });
  actors = createActors();
};

export {
  size,
  ctx,
  colors,
  createStatics,
  drawActor,
  statics,
  actors,
};
