window.addEventListener('keydown', keydown, true);

const keyCodeW = 87;
const keyCodeA = 65;
const keyCodeS = 83;
const keyCodeD = 68;

function keydown({ keyCode }) {
  if (keyCode === keyCodeW) {
    console.log('W');
  } else if (keyCode === keyCodeA) {
    console.log('A');
  } else if (keyCode === keyCodeS) {
    console.log('S');
  } else if (keyCode === keyCodeD) {
    console.log('D');
  }
}
