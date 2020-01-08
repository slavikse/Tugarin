import canNotMove from './canNotMove';
import { colors } from '../state';
import { draw } from '../utils';
import { hasEdge, reset } from './utils';
import swap from './swap';
import sequential from './sequential';

export default async function redraw(actor) {
  await new Promise((resolve) => {
    setImmediate(async () => {
      if (canNotMove(actor)) {
        draw({ actor, rgb: colors.erase.rgb });
        reset(actor);
      } else {
        draw({ actor, rgb: colors.erase.rgb });
        swap(actor);

        if (hasEdge(actor)) {
          reset(actor);
        } else {
          sequential(actor);
        }

        draw({ actor, rgb: actor.rgb });
      }

      resolve();
    });
  });
}
