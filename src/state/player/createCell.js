import { nanoid } from 'nanoid';

const mainColor = '#0f0';
const color = '#050';

export default function createCell(cell) {
  cell.id = nanoid();
  cell.type = 'player';
  cell.color = cell.isMain ? mainColor : color;

  return cell;
}
