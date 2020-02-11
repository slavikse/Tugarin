import colors from '../colors';
import { size } from '..';

export default function createAI() {
  return {
    name: 'ai',
    side: 'bottom',
    sideDefault: 'bottom',
    rgb: colors.ai.rgb,
    cells: [
      { // Ведущая ячейка.
        position: [size * 1, size * 4],
        positionDefault: [size * 1, size * 4],
      },
      {
        position: [size * 1, size * 3],
        positionDefault: [size * 1, size * 3],
      },
      {
        position: [size * 1, size * 2],
        positionDefault: [size * 1, size * 2],
      },
    ],
  };
};
