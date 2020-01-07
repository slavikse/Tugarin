import { size } from '../state';
import colors from './colors';
import { range } from '../utils';

export default function getStatics(types) {
  const width = Math.round(window.innerWidth / size);
  const height = Math.round(window.innerHeight / size);

  return types.reduce((actors, { name, count }) => {
    actors.push({
      name,
      color: colors[name].color,
      rgb: colors[name].rgb,
      cells: Array(count).fill(0).map(() => ({
        position: [
          size * range(0, width),
          size * range(0, height),
        ],
      })),
    });

    return actors;
  }, []);
}
