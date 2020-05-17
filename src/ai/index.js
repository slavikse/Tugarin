import * as tf from '@tensorflow/tfjs';
import hasIntersected from '../scene/render/processing/hasIntersected';

const model = tf.sequential();
model.add(tf.layers.dense({ inputShape: [3], units: 1 }));
model.add(tf.layers.dense({ units: 4, activation: 'sigmoid' }));
model.compile({ optimizer: 'adam', loss: 'meanSquaredError' });

setTimeout(ai, 500);

async function ai() {
  const { x, y } = state.player;

  state.ctx.fillStyle = '#f00';
  state.ctx.fillRect(x + 40, y - 60, 150, 150);

  const otherCells = [].concat(
    // state.gun.cells,
    state.wall.cells,
    // state.spike.cells,
  );

  const intersects = [];

  Object.entries({
    D: {
      // как в fillRect выше
      x: state.scene.center.x - (x + 40),
      y: state.scene.center.y - (y - 60),
      type: 'search',
      width: 150,
      height: 150,
    },
  }).forEach(([side, actorCell]) => {
    otherCells.forEach((otherCell) => {
      const data = { actor: state.player, side, actorCell, otherCell };
      const isIntersect = hasIntersected(data);

      if (isIntersect) {
        intersects.push(data);
      }
    });
  });

  let inputs = [];
  let labels = [];

  intersects.forEach((cell) => {
    // todo известно сторона - right
    // console.log(cell.otherCell);

    // top right bottom left
    // todo 1 2 3 4
    inputs.push(x, y, 2); // todo вход
    labels.push(0, 1, 0, 0); // todo описание (оценка входа)
  });

  // todo случайная сторона
  if (inputs.length === 0) {
    inputs = [0, 0, 0];
    labels = [0, 0, 0, 0];
  }

  await model.fit(tf.tensor2d([inputs]), tf.tensor2d([labels]));
  // todo что на входе
  const [s1, s2, s3, s4] = await model.predict(tf.tensor2d([[x, y, 2]])).data();
  console.log(s1, s2, s3, s4);

  setTimeout(ai, 500);
}
