import state, { initState } from './state';
import { setting } from './config';
import movement from './movement';

export function scene(ctx) {
  initState(ctx);

  setting();
  movement();
}

export default state;
