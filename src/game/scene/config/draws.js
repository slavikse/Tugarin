import { statics, actors } from '../state';
import { draw } from '../utils';

export default function draws() {
  statics.forEach((actor) => draw({ actor, rgb: actor.rgb }));
  Object.values(actors).forEach((actor) => draw({ actor, rgb: actor.rgb }));
}
