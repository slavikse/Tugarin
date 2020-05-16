import { nanoid } from 'nanoid';
import { MAX_SPEED } from '../move/const';
import { movement } from '../utils';

window.state.shot = {
  addCell(side) { this.cells.push(createCell(side)); },
  cells: [],
};

const { scene, player, shot } = state;

// todo стрелять из блока оружия. т.е. координаты относительно этого самого блока.
function createCell(side) {
  return {
    id: nanoid(),
    type: 'shot',
    x: scene.center.x + player.x + 15,
    y: scene.center.y + player.y + 15,
    width: 10,
    height: 10,
    side,
    speed: player.directionsSpeeds[side],
    color: '#ff0',
  };
}

// todo рефакторинг ?
scene.tasks.push(() => {
  shot.cells.forEach((cell, index, cells) => {
    const { clientWidth, clientHeight } = document.documentElement;

    if (
      cell.x < player.x
      || cell.y < player.y
      || cell.x > player.x + clientWidth
      || cell.y > player.y + clientHeight
    ) {
      cells.splice(index, 1);
      return;
    }

    const { side, speed } = cell;

    movement[side]({
      actor: cell,
      speed: speed + MAX_SPEED * 1.5,
    });
  });
});
