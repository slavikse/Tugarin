import * as state from './state';
import { setting } from './utils';
import movement from './movement';

export default function scene(ctx) {
  Object.assign(state, { ctx });

  setting(state);
  movement(state);
}
