import clearScene from './clearScene';
import drawWalls from './drawWalls';
import drawPlayer from './drawPlayer';
import intersections from './intersections';

export default function redraw() {
  clearScene();
  drawWalls();
  drawPlayer();

  const playerCells = intersections();

  // todo разрушение
  if (playerCells) {
    playerCells.forEach((playerCell) => {
      playerCell.color = '#f50';
    });
  }
}
