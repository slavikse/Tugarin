import './control';
import movement from './movement';

state.scene.tasks.push((time) => {
  if (state.player.isPlaying) {
    movement(time);
  }
});
