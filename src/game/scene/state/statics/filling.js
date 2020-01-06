import { range } from '../../utils';

export default function filling({ statics, size }) {
  const width = Math.round(window.innerWidth / size);
  const height = Math.round(window.innerHeight / size);

  statics[statics.length - 1].cells.push({
    position: [
      size * range(0, width),
      size * range(0, height),
    ],
  });
}
