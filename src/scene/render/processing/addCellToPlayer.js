import destroyCell from './destroyCell';

const { scene, player } = state;

export default function addCellToPlayer(cell) {
  destroyCell(cell);

  cell.x = -Math.round(cell.x - scene.x - player.x);
  cell.y = -Math.round(cell.y - scene.y - player.y);

  player.addCell(cell);
}
