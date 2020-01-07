import colors from './colors';
import getStatics from './getStatics';
import getActors from './actors';

export const size = 20;

const types = [
  { name: 'wall', count: 100 },
  { name: 'apple', count: 40 },
];

const statics = getStatics(types);
const actors = getActors();

export { statics, actors, colors };

let ctx = {};

export function init(ctxRef) {
  ctx = ctxRef;
};

export { ctx };
