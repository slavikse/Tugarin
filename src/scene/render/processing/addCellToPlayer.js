import destroyCell from './destroyCell';

const { scene, player } = state;

export default function addCellToPlayer(cell) {
  destroyCell(cell);

  cell.x = -Math.round(cell.x - player.x - scene.center.x);
  cell.y = -Math.round(cell.y - player.y - scene.center.y);

  // todo как вычислить сторону? и нужно ли...
  // todo 10 - половина блока
  console.log(cell.x - player.cells[0].x - 10, cell.y - player.cells[0].y - 10);

  player.addCell(cell);
}
