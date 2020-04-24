window.addEventListener('keydown', ({ code }) => {
  if (code === 'Escape') {
    state.player.isPlaying = !state.player.isPlaying;
  }
});
