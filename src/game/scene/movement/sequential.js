import { getRGB, reset, hasActor } from './utils';
import { colors, size, createStatics, drawActor } from '../state';

export default function sequential(actor) {
  const rgbString = getRGB(actor);

  if (rgbString === colors.apple.rgb) {
    increaseActor(actor);
    addApple();
  } else if (rgbString === colors.wall.rgb) {
    reset(actor);
  } else {
    hasActor({ actor, rgbString });
  }
}

function increaseActor(actor) {
  actor.cells.push({ position: [-size, -size] });
}

function addApple() {
  const types = [{ name: 'apple', count: 1 }];
  createStatics({ types, isWalls: false }).forEach(drawActor);
}
