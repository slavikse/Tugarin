const $frameTime = document.querySelector('.js-frame-time');
const $fps = document.querySelector('.js-fps');

window.addEventListener('keydown', ({ code }) => {
  if (code === 'F1') {
    $frameTime.hidden = !$frameTime.hidden;
  }
});

const execution = {
  $frameTimeCount: $frameTime.querySelector('.js-frame-time-count'),
  prevTimestamp: 0,

  start(timestamp) {
    this.prevTimestamp = timestamp;
  },

  end(timestamp) {
    this.$frameTimeCount.textContent = String((timestamp - this.prevTimestamp).toFixed(2));
  },
};

let prevTimestamp = 0;

function count(timestamp) {
  const fps = 1000 / (timestamp - prevTimestamp);
  prevTimestamp = timestamp;

  $fps.textContent = String(Math.round(fps));
}

export { execution, count };
