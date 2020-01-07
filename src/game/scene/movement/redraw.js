import { colors } from '../state';
import canNotMove from './canNotMove';
import draw from './draw';
import { reset } from './utils';
import swap from './swap';
import intersects from './intersects';

export default async function redraw(actor) {
  await new Promise((resolve) => {
    setImmediate(async () => {
      if (canNotMove(actor)) {
        draw({ color: colors.erase, actor });
        reset(actor);
      } else {
        draw({ color: colors.erase, actor });

        swap(actor);
        intersects(actor);

        draw({ color: actor.color, actor });
      }

      resolve();
    });
  });
}
