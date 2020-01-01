import { drawField } from './utils';
import drawingMovement from './drawingMovement';

const actors = {
  human: {
    position: [100, 100],
    color: 'Chartreuse',
  },
  ai: {
    position: [0, 200],
    color: 'Crimson',
  },
};

// // TODO: много
// {
//   type: 'wall',
//   position: [0, 0],
//   color: 'Black',
// },
// // TODO: много
// {
//   type: 'apple',
//   position: [200, 200],
//   color: 'DarkOrange',
// }

// TODO: расположение стен.
// const wallsActors = {
//   color: 'Black',
//   walls: [

//   {
//     position: [0, 0],
//   },
//   ]
// };

export default function scene(context) {
  const state = { ctx: context, actors, step: 20 };

  drawField(state);
  drawingMovement(state);
}
