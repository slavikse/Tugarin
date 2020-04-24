const $fps = document.querySelector('.js-fps');

window.addEventListener('keydown', ({ code }) => {
  if (code === 'F1') {
    $fps.hidden = !$fps.hidden;
  }
});

const measure = {
  $fpsCounter: document.querySelector('.fps .js-fps'),
  previousTime: 0,

  fps(time) {
    this.$fpsCounter.textContent = String(Math.round(1000 / (time - this.previousTime)));
    this.previousTime = time;
  },
};

const execution = {
  $fpsExecutionTime: document.querySelector('.fps .js-time'),
  executionTime: 0,

  start() {
    this.executionTime = performance.now();
  },

  end() {
    this.$fpsExecutionTime.textContent = String((performance.now() - this.executionTime).toFixed(2));
  },
};

export { measure, execution };
