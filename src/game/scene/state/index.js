import getStatics from './statics';
import getActors from './actors';
import { colors } from './utils';

export default function getState({ size, types }) {
  return {
    size,
    statics: getStatics({ size, types }),
    actors: getActors({ size }),
    colors,
  };
};
