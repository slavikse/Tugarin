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
        draw({ rgb: colors.erase.rgb, actor });
        reset(actor);
      } else {
        draw({ rgb: colors.erase.rgb, actor });

        swap(actor);
        intersects(actor);

        draw({ rgb: actor.rgb, actor });
      }

      resolve();
    });
  });
}
