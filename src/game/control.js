'use strict';

window.addEventListener('keydown', keydown, true);

const keyCodeW = 87;
const keyCodeA = 65;
const keyCodeS = 83;
const keyCodeD = 68;

// TODO: общение с scene через события
function keydown({ keyCode }) {
  if (keyCode === keyCodeW) {
    // TODO: создавать событие о перемещении.
    console.log('W');
  } else if (keyCode === keyCodeA) {
    console.log('A');
  } else if (keyCode === keyCodeS) {
    console.log('S');
  } else if (keyCode === keyCodeD) {
    console.log('D');
  }
}
