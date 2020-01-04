import { movement } from './utils';

window.addEventListener('keydown', keydown);
window.addEventListener('keyup', keyup);

const humanKeyCodeW = 87;
const humanKeyCodeD = 68;
const humanKeyCodeS = 83;
const humanKeyCodeA = 65;

const aiKeyCodeArrowTop = 38;
const aiKeyCodeArrowRight = 39;
const aiKeyCodeArrowBottom = 40;
const aiKeyCodeArrowLeft = 37;

let isNotPressed  = true;

function keydown({ keyCode }) {
  if (isNotPressed) {
    isNotPressed = false;
  } else {
    return;
  }

  if (keyCode === humanKeyCodeW) {
    movement({ name: 'human', side: 'top' });
  } else if (keyCode === humanKeyCodeD) {
    movement({ name: 'human', side: 'right' });
  } else if (keyCode === humanKeyCodeS) {
    movement({ name: 'human', side: 'bottom' });
  } else if (keyCode === humanKeyCodeA) {
    movement({ name: 'human', side: 'left' });
  } else if (keyCode === aiKeyCodeArrowTop) {
    movement({ name: 'ai', side: 'top' });
  } else if (keyCode === aiKeyCodeArrowRight) {
    movement({ name: 'ai', side: 'right' });
  } else if (keyCode === aiKeyCodeArrowBottom) {
    movement({ name: 'ai', side: 'bottom' });
  } else if (keyCode === aiKeyCodeArrowLeft) {
    movement({ name: 'ai', side: 'left' });
  }
}

function keyup() {
  isNotPressed = true;
}
