import colors from './colors';
import { createStatics } from './statics';
import createActors from './actors';

export { colors };
export { createStatics };

export let statics;
export let actors;

export const size = 20;

export function initiate() {
  const types = [
    { name: 'wall', count: 200 },
    { name: 'apple', count: 50 },
  ];

  statics = createStatics(types);
  actors = createActors();
};
