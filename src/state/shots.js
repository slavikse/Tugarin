import { nanoid } from 'nanoid';
import { MAX_SPEED } from '../move/const';
import { movementInDirection } from '../utils';

const type = 'shot';
const color = '#ff0';

window.state.shot = {
  addCell({ direction, playerSpeed }) { this.cells.push(createCell({ direction, playerSpeed })); },
  cells: [],
};

const { scene, player, shot } = state;

// todo стрелять из блока оружия. т.е. координаты относительно этого самого блока.
function createCell({ direction, playerSpeed }) {
  return {
    id: nanoid(),
    type,
    x: scene.center.x + player.x + 15,
    y: scene.center.y + player.y + 15,
    direction,
    playerSpeed,
    size: 10,
    color,
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

    const { direction, playerSpeed } = cell;

    movementInDirection[direction]({
      actor: cell,
      speed: playerSpeed + MAX_SPEED * 1.2,
    });
  });
});
