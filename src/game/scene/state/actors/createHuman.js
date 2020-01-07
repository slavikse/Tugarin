import colors from '../colors';
import { size } from '..';

export default function createHuman() {
  return {
    name: 'human',
    side: 'right',
    sideDefault: 'right',
    rgb: colors.human.rgb,
    cells: [
      { // Ведущая ячейка.
        position: [size * 4, size * 1],
        positionDefault: [size * 4, size * 1],
      },
      {
        position: [size * 3, size * 1],
        positionDefault: [size * 3, size * 1],
      },
      {
        position: [size * 2, size * 1],
        positionDefault: [size * 2, size * 1],
      },
    ],
  };
};
