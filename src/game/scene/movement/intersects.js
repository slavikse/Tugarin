import { hasEdge, reset } from './utils';
import sequential from './sequential';

export default function intersects(actor) {
  if (hasEdge(actor)) {
    reset(actor);
  } else {
    sequential(actor);
  }
}
