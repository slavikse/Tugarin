const $app = document.querySelector('.app');

export default function hasRestarted() {
  const [cell] = state.player.cells;

  if (!cell || !cell.isMain) {
    $app.style.display = 'flex';
  }
}
