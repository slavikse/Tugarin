import { setting } from './utils';
import movement from './movement';

const size = 20;

const colors = {
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
const statics = [
  {
    name: 'wall',
    color: colors.wall.color,
    rgb: colors.wall.rgb,
    cells: [
      { position: [size * 0, size * 0] },
    ],
  },
  {
    name: 'apple',
    color: colors.apple.color,
    rgb: colors.apple.rgb,
    cells: [
      { position: [size * 10, size * 15] },
    ],
  },
];

const actors = {
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

export default function scene(ctxRef) {
  const state = {
    ctx: ctxRef,
    size,
    colors,
    statics,
    actors,
  };

  setting(state);
  movement(state);
}
