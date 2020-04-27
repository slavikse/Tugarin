const $app = document.querySelector('.app');

export default function hasRestarted() {
  if (state.player.cells.length === 0) {
    $app.style.display = 'flex';
  }
}
