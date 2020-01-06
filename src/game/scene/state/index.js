import getStatics from './statics';
import getActors from './actors';
import colors from './colors';

const size = 20;
const types = [
  { name: 'wall', count: 100 },
  { name: 'apple', count: 40 },
];

const state = {
  size,
  colors,
  statics: getStatics({ size, types }),
  actors: getActors({ size }),
};

export function initState(ctx) {
  Object.assign(state, { ctx });
};

export default state;
