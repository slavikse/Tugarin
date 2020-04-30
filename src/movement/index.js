import './control';
import accelerationSpeed from './accelerationSpeed';
import assignAcceleration from './assignAcceleration';

const { scene: { tasks }, player, player: { keysPressed } } = state;

tasks.push((time) => {
  if (player.isPlaying) {
    if (keysPressed.length > 0) {
      accelerationSpeed();
    }

    assignAcceleration(time);
  }
});
