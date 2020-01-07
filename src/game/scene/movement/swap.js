import { actions } from './utils';

// Последний занимает место предпоследнего и так до первого.
export default function swap(actor) {
  for (let i = actor.cells.length - 1; i > 0; i--) {
    actor.cells[i].position = actor.cells[i - 1].position;
  }

  const [cell] = actor.cells;
  cell.position = actions[actor.side](cell.position);
}
