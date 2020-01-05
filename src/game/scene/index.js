import getState from './state';
import { setting } from './config';
import movement from './movement';

const size = 20;

const types = [
  { name: 'wall', count: 100 },
  { name: 'apple', count: 40 },
];

export default function scene(ctx) {
  const state = getState({ size, types });
  Object.assign(state, { ctx });

  setting(state);
  movement(state);
}
