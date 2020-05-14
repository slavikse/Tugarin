const $frameTime = document.querySelector('.js-frame-time');

window.addEventListener('keydown', ({ code }) => {
  if (code === 'F1') {
    $frameTime.hidden = !$frameTime.hidden;
  }
});

const execution = {
  $frameTimeCount: $frameTime.querySelector('.js-frame-time-count'),
  startFrameTime: 0,

  start() {
    this.startFrameTime = performance.now();
  },

  end() {
    const endFrameTime = performance.now() - this.startFrameTime;
    this.$frameTimeCount.textContent = String(endFrameTime.toFixed(2));

    return endFrameTime;
  },
};

export { execution };
