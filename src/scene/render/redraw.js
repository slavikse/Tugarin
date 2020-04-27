import clearScene from './clearScene';
import drawWalls from './drawWalls';
import drawCells from './drawCells';
import drawPlayer from './drawPlayer';
import intersections from './intersections';
import destroyPlayerCell from './destroyPlayerCell';
import destroyCellCell from './destroyCellCell';
import addCell from './addCell';

const $app = document.querySelector('.app');

export default function redraw() {
  clearScene();
  drawWalls();
  drawCells();
  drawPlayer();

  const cellsIntersected = intersections();

  // todo module
  if (cellsIntersected) {
    // todo wallCell -> cell ?
    if (cellsIntersected.wallCell) {
      // todo объединить destroyPlayerCell и destroyCellCell
      destroyPlayerCell(cellsIntersected.playerCell);
    } else if (cellsIntersected.cellCell) {
      destroyCellCell(cellsIntersected.cellCell);

      // todo добавлять относительно координат ячейки, с которой столкнулся
      addCell(cellsIntersected);
    }

    // todo module
    if (state.player.cells.length === 0) {
      console.log('game over');
      $app.style.display = 'flex';
    }
  }
}
