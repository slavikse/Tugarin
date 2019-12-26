'use strict';

// import * as tf from '@tensorflow/tfjs';

// tf.setBackend('webgl');

// const a = tf.tensor([1, 2, 3, 4]);
// const b = tf.tensor([10, 20, 30, 40]);
// const y = a.add(b);
// y.print();

const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(0, 0, 150, 100);
