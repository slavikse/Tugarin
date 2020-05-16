import { nanoid } from 'nanoid';
import createCell from './createCell';

const kernelWidth = 30;
const kernelHeight = 30;
const kernelColor = '#050';

const shieldWidth = 5;
const shieldHeight = 5;
const shieldOffset = 0;
const shieldColor = '#0f0'; // todo transparent

window.state.player = {
  x: -1,
  y: -1,
  isPlaying: false,
  sidesPressed: { W: false, A: false, S: false, D: false },
  numberSidesPressed: 0,
  modifierKeys: { ShiftLeft: false },
  directionsSpeeds: { W: 0, A: 0, S: 0, D: 0 },
  intersectionSides: { W: false, A: false, S: false, D: false },
  addCell(data) { this[data.type].push(createCell(data)); },
  cells: {
    C: {
      id: nanoid(),
      type: 'player_kernel',
      x: 0,
      y: 0,
      width: kernelWidth,
      height: kernelHeight,
      color: kernelColor,
    },
    W: {
      id: nanoid(),
      type: 'player_shield',
      x: shieldOffset,
      y: shieldHeight + shieldOffset,
      width: kernelWidth + shieldOffset * 2,
      height: shieldHeight,
      color: shieldColor,
    },
    D: {
      id: nanoid(),
      type: 'player_shield',
      x: -kernelWidth - shieldOffset,
      y: shieldOffset,
      width: shieldWidth,
      height: kernelHeight + shieldOffset * 2,
      color: shieldColor,
    },
    S: {
      id: nanoid(),
      type: 'player_shield',
      x: shieldOffset,
      y: -kernelWidth - shieldOffset,
      width: kernelWidth + shieldOffset * 2,
      height: shieldHeight,
      color: shieldColor,
    },
    A: {
      id: nanoid(),
      type: 'player_shield',
      x: shieldWidth + shieldOffset,
      y: shieldOffset,
      width: shieldWidth,
      height: kernelHeight + shieldOffset * 2,
      color: shieldColor,
    },
  },
  // todo при столкновении с колючками и блоками - разрушать
  guns: [],
};
