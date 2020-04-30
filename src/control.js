/* eslint-disable import/no-extraneous-dependencies */
import { remote } from 'electron';

const $app = document.querySelector('.app');

window.addEventListener('keydown', ({ code }) => {
  if (code === 'Escape') {
    if (['flex', ''].includes($app.style.display)) {
      $app.style.display = 'none';
    } else {
      $app.style.display = 'flex';
    }
  }
});

const $newGame = $app.querySelector('.menu .new-game');
$newGame.addEventListener('click', play);

window.addEventListener('keydown', ({ code }) => {
  if (code === 'Enter') {
    play();
  }
});

function play() {
  $app.style.display = 'none';
  state.player.isPlaying = true;
  // todo сброс некоторых статусов
}

const $quit = document.querySelector('.menu .quit');
$quit.addEventListener('click', () => remote.app.quit(), { once: true });

window.addEventListener('keydown', ({ code }) => {
  if (code === 'Escape') {
    state.player.isPlaying = !state.player.isPlaying;
  }
});
