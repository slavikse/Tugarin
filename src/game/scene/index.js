import { initiate } from './state';
import { canvas, draws } from './config';
import movement from './movement';

export { canvas };
export let ctx;

export function scene(ctxRef) {
  ctx = ctxRef;

  initiate();
  draws();
  movement();
}
