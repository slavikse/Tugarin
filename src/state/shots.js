import { nanoid } from 'nanoid';
import { movementInDirection } from '../utils';

const type = 'shot';
const color = '#cf0';

window.state.shot = {
  addCell({ side }) { this.cells.push(createCell(side)); },
  cells: [],
};

const { scene, shot, player } = state;
const size = state.size / 2;
const speed = 50;

// todo стрелять из блока оружия. т.е. координаты относильно него.
function createCell(side) {
  return {
    id: nanoid(),
    x: scene.x + player.x + (size / 2),
    y: scene.y + player.y + (size / 2),
    type,
    size,
    color,
    side,
  };
}

scene.tasks.push(() => {
  shot.cells.forEach((cell) => {
    movementInDirection[cell.side]({ actor: cell, value: size * speed });
  });
});
