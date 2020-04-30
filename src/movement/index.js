import './control';
import accelerationSpeed from './accelerationSpeed';
import assignAcceleration from './assignAcceleration';

const { player } = state;

state.scene.tasks.push((time) => {
  if (state.player.isPlaying) {
    if (player.keysPressed.length > 0) {
      accelerationSpeed();
    }

    assignAcceleration(time);
  }
});
