import accelerationSpeed from './accelerationSpeed';
import assignAcceleration from './assignAcceleration';

const { scene, player } = state;

scene.tasks.push(() => {
  if (player.isPlaying) {
    if (player.numberSidesPressed > 0) {
      accelerationSpeed();
    }

    assignAcceleration();
  }
});
