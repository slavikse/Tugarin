import './control';
import accelerationSpeed from './accelerationSpeed';
import assignAcceleration from './assignAcceleration';

const { scene, player, player: { keysPressed } } = state;

scene.tasks.push(() => {
  if (player.isPlaying) {
    if (keysPressed.length > 0) {
      accelerationSpeed();
    }

    assignAcceleration();
  }
});
