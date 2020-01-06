import colors from '../colors';

export default function getAi({ size }) {
  return {
    name: 'ai',
    side: 'left',
    sideDefault: 'left',
    color: colors.ai.color,
    rgb: colors.ai.rgb,
    cells: [
      { // Ведущая ячейка.
        position: [window.innerWidth - size * 3, size * 1],
        positionDefault: [window.innerWidth - size * 3, size * 1],
      },
      {
        position: [window.innerWidth - size * 2, size * 1],
        positionDefault: [window.innerWidth - size * 2, size * 1],
      },
      {
        position: [window.innerWidth - size * 1, size * 1],
        positionDefault: [window.innerWidth - size * 1, size * 1],
      },
    ],
  };
};
