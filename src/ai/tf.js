import * as tf from '@tensorflow/tfjs';
// import { movement } from '../game/control';

const a = tf.tensor([1, 2, 3, 4]);
const b = tf.tensor([10, 20, 30, 40]);
const y = a.add(b);

y.print();

// movement({ name: 'ai', side: 'right' });
