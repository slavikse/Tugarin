import { colors } from '../utils';

export default function getHuman({ size }) {
  return {
    name: 'human',
    side: 'right',
    sideDefault: 'right',
    color: colors.human.color,
    rgb: colors.human.rgb,
    cells: [
      { // Ведущая ячейка.
        position: [size * 3, size * 1],
        positionDefault: [size * 3, size * 1],
      },
      {
        position: [size * 2, size * 1],
        positionDefault: [size * 2, size * 1],
      },
      {
        position: [size * 1, size * 1],
        positionDefault: [size * 1, size * 1],
      },
    ],
  };
};
