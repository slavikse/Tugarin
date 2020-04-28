import destroyCell from './destroyCell';
import { addCell } from '../../../state/player/state';

export default function addCellToPlayer(cell) {
  destroyCell(cell);

  const x = -Math.round(cell.x - state.scene.x - state.player.x);
  const y = -Math.round(cell.y - state.scene.y - state.player.y);

  addCell({ x, y });
}
