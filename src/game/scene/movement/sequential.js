import { getColor, reset, hasActor } from './utils';
import { colors, size } from '../state';

export default function sequential(actor) {
  const rgbString = getColor(actor);

  if (rgbString === colors.apple.rgb) {
    actor.cells.push({ position: [-size, -size] });

    // TODO: создать яблоко в другом случайном месте
  } else if (rgbString === colors.wall.rgb) {
    reset(actor);
  } else {
    hasActor({ actor, rgbString });
  }
}
