/* eslint-disable import/no-extraneous-dependencies */
import { remote } from 'electron';

import './state';
import './scene';
import './move';

const $container = document.querySelector('.container');
const $newGame = $container.querySelector('.start-menu .new-game');

window.addEventListener('keydown', ({ key }) => {
  if (key === 'Escape') {
    if (['flex', ''].includes($container.style.display)) {
      $container.style.display = 'none';
    } else {
      $container.style.display = 'flex';
    }
  }
});

$newGame.addEventListener('click', newGame);
window.addEventListener('keydown', ({ key }) => {
  if (key === 'Enter') {
    newGame();
  }
});

function newGame() {
  $container.style.display = 'none';
  state.player.isPlaying = true;
  // todo сброс некоторых статусов
}

const $quit = document.querySelector('.start-menu .quit');
$quit.addEventListener('click', () => remote.app.quit(), { once: true });

// window.addEventListener('keyup', ({ code }) => {
//   // todo для горячих клавиш делать отмену stopPropagation
//   console.log(code);
// }, true);
