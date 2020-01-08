import { getRGB, reset } from './utils';
import { colors, size, createStatics, actors } from '../state';
import { draw } from '../utils';

export default function sequential(actor) {
  const rgbString = getRGB(actor);

  if (rgbString === colors.apple.rgb) {
    increaseActor(actor);
    addApple();
  } else if (rgbString === colors.wall.rgb) {
    reset(actor);
  } else if (hasActor(rgbString)) {
    reset(actor);
  }
}

function increaseActor(actor) {
  actor.cells.push({ position: [-size, -size] });
}

function addApple() {
  const types = [{ name: 'apple', count: 1 }];
  createStatics(types).forEach((actor) => draw({ actor, rgb: actor.rgb }));
}

function hasActor(rgbString) {
  return Object.values(actors).find(({ rgb }) => rgb === rgbString);
}
