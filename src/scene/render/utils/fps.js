const $frameTime = document.querySelector('.js-frame-time');

window.addEventListener('keydown', ({ code }) => {
  if (code === 'F1') {
    $frameTime.hidden = !$frameTime.hidden;
  }
});

const execution = {
  $frameTimeCount: $frameTime.querySelector('.js-frame-time-count'),
  executionTime: 0,

  start() {
    this.executionTime = performance.now();
  },

  end() {
    this.$frameTimeCount.textContent = String((performance.now() - this.executionTime).toFixed(2));
  },
};

export { execution };
