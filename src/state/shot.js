import { nanoid } from 'nanoid';
import { MAX_SPEED } from '../move/const';
import { movement } from '../utils';

window.state.shot = {
  addCell(side) { this.cells.push(...addCell(side)); },
  cells: [],
};

const { scene, player, shot } = state;

const width = 10;
const height = 10;

function addCell(side) {
  return player.guns.filter((gun) => gun.side === side).map((gun) => {
    const cell = createCell({ side, gun });

    if (side === 'W') {
      cell.x += width / 2;
    } else if (side === 'D') {
      cell.y += height / 2;
    } else if (side === 'S') {
      cell.x += width / 2;
    } else if (side === 'A') {
      cell.y += height / 2;
    }

    return cell;
  });
}

function createCell({ side, gun }) {
  const x = scene.center.x + player.x - gun.x;
  const y = scene.center.y + player.y - gun.y;

  return {
    id: nanoid(),
    type: 'shot',
    x,
    y,
    width,
    height,
    side,
    speed: player.directionsSpeeds[side],
    color: '#ff0',
  };
}

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
