import { nanoid } from 'nanoid';

const size = 2 * 20;
const mainColor = '#0f0';
const color = '#090';

export default function createCell({ cell: { x, y }, isMain }) {
  return {
    x,
    y,
    id: nanoid(),
    type: 'player',
    width: size,
    height: size,
    color: isMain ? mainColor : color,
  };
}
