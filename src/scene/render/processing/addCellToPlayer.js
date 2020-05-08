import destroyCell from './destroyCell';

const { scene, player } = state;

export default function addCellToPlayer(cell) {
  destroyCell(cell);

  cell.x = -Math.round(cell.x - scene.center.x - player.x);
  cell.y = -Math.round(cell.y - scene.center.y - player.y);

  player.addCell(cell);
}
