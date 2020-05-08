import { nanoid } from 'nanoid';
import { maxSpeed } from '../movement/const';
import { movementInDirection } from '../utils';

const type = 'shot';
const color = '#ff0';

window.state.shot = {
  addCell({ direction, playerSpeed }) { this.cells.push(createCell({ direction, playerSpeed })); },
  cells: [],
};

// todo рефакторинг

const { scene, player, shot } = state;
const size = 10;

// todo стрелять из блока оружия. т.е. координаты относительно этого самого блока.
function createCell({ direction, playerSpeed }) {
  return {
    id: nanoid(),
    type,
    x: scene.center.x + player.x + size,
    y: scene.center.y + player.y + size,
    direction,
    playerSpeed,
    size,
    color,
  };
}

// todo
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

    const { direction, playerSpeed } = cell;

    movementInDirection[direction]({
      actor: cell,
      value: playerSpeed + maxSpeed * 1.2,
    });
  });
});
