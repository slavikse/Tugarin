import { init } from './state';
import { canvas, setting } from './config';
import movement from './movement';

export { canvas };

export function scene(ctx) {
  init(ctx);

  setting();
  movement();
}
