import { actors } from '../../state';
import { reset } from '../utils';

export default function hasActor({ actor, rgbString }) {
  const isActor = Object.values(actors)
    .find(({ rgb }) => rgb === rgbString);

  if (isActor) {
    reset(actor);
  }
}
