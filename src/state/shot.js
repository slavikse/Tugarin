import { nanoid } from 'nanoid';
import { MAX_SPEED } from '../move/const';
import { movement } from '../utils';

window.state.shot = {
  addCell(side) { this.cells.push(...createCell(side)); },
  cells: [],
};

const { scene, player, shot } = state;

function createCell(side) {
  return player.guns.filter((gun) => gun.side === side).map((gun) => {
    const width = 10;
    const height = 10;

    const cell = {
      id: nanoid(),
      type: 'shot',
      x: 0,
      y: 0,
      width,
      height,
      side,
      speed: player.directionsSpeeds[side],
      color: '#ff0',
    };

    const x = scene.center.x + player.x - gun.x;
    const y = scene.center.y + player.y - gun.y;

    if (side === 'W') {
      cell.x = x + width / 2;
      cell.y = y;
    } else if (side === 'D') {
      cell.x = x;
      cell.y = y + height / 2;
    } else if (side === 'S') {
      cell.x = x + width / 2;
      cell.y = y;
    } else if (side === 'A') {
      cell.x = x;
      cell.y = y + height / 2;
    }

    return cell;
  });
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
