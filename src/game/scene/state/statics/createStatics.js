import { ctx, size } from '..';
import colors from '../colors';
import { range } from '../../utils';

export default function createStatics({ types, isWalls }) {
  const width = Math.round(window.innerWidth / size);
  const height = Math.round(window.innerHeight / size);

  return types.reduce((actors, { name, count }) => {
    actors.push({
      name,
      rgb: colors[name].rgb,
      cells: Array(count).fill(0).map(() => {
        const cellRef = {
          position: [
            size * range(0, width),
            size * range(0, height),
          ],
        };

        if (isWalls) {
          return cellRef;
        } else {
          while (hasNotFreePlace({ cellRef, width, height }));
        }

        return cellRef;
      }),
    });

    return actors;
  }, []);
}

function hasNotFreePlace({ cellRef, width, height }) {
  cellRef.position = [
    size * range(0, width),
    size * range(0, height),
  ];

  const [r, g, b] = ctx.getImageData(...cellRef.position, 1, 1).data;
  const rgbString = `rgb(${r},${g},${b})`;

  return rgbString !== colors.erase.rgb;
}
