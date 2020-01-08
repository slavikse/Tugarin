import { actors } from '../state';
import move from './move';

export default function movement() {
  window.addEventListener('movement', sideActor);

  // await
  move();
}

function sideActor({ detail: { name, side } }) {
  actors[name].side = side;
}
