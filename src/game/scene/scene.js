import { setting } from './utils';
import movement from './movement';

const size = 20;

const actors = {
  human: {
    name: 'human',
    side: 'right',
    sideDefault: 'right',
    position: [size * 5, size * 5],
    positionDefault: [size * 5, size * 5],
    // #7FFF00 -> 127,255,0
    color: 'chartreuse',
    rgb: '127,255,0',
  },
  ai: {
    name: 'ai',
    side: 'left',
    sideDefault: 'left',
    position: [window.innerWidth - size * 5, size * 10],
    positionDefault: [window.innerWidth - size * 5, size * 10],
    // #DC143C -> 220,20,60
    color: 'crimson',
    rgb: '220,20,60',
  },
};

// TODO: случайное размещение
const staticActors = [
  {
    name: 'wall',
    // #000000 -> 0,0,0
    color: 'black',
    rgb: '0,0,0',
    items: [
      { position: [size * 0, size * 0] },
    ],
  },
  {
    name: 'apple',
    // #FF8C00 -> 255,140,0
    color: 'darkOrange',
    rgb: '255,140,0',
    items: [
      { position: [size * 10, size * 15] },
    ],
  },
];

export default function scene(ctxRef) {
  const state = {
    ctx: ctxRef,
    actors,
    staticActors,
    size,
  };

  setting(state);
  movement(state);
}
