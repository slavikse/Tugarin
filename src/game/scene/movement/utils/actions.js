import { size } from '../../state';

export default {
  top: ([x, y]) => [x, y - size],
  right: ([x, y]) => [x + size, y],
  bottom: ([x, y]) => [x, y + size],
  left: ([x, y]) => [x - size, y],
};
