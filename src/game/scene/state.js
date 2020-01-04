export const size = 20;

export const colors = {
  wall: {
    color: 'black', // #000000
    rgb: '0,0,0',
  },
  apple: {
    color: 'darkOrange', // #FF8C00
    rgb: '255,140,0',
  },
  human: {
    color: 'chartreuse', // #7FFF00
    rgb: '127,255,0',
  },
  ai: {
    color: 'crimson', // #DC143C
    rgb: '220,20,60',
  },
  erase: '#333',
};

// TODO: случайное размещение
// TODO: функция на экспорт для создания яблока с случайном месте.
// предусмотреть: может создаваться прямо в игроке
export const statics = [
  {
    name: 'wall',
    color: colors.wall.color,
    rgb: colors.wall.rgb,
    cells: [
      { position: [size, size] },
    ],
  },
  {
    name: 'apple',
    color: colors.apple.color,
    rgb: colors.apple.rgb,
    cells: [
      { position: [size * 8, size * 12] },
    ],
  },
  {
    name: 'apple',
    color: colors.apple.color,
    rgb: colors.apple.rgb,
    cells: [
      { position: [size * 6, size * 8] },
    ],
  },
  {
    name: 'apple',
    color: colors.apple.color,
    rgb: colors.apple.rgb,
    cells: [
      { position: [size * 5, size * 10] },
    ],
  },
];

export const actors = {
  human: {
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
  },
  ai: {
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
  },
};
