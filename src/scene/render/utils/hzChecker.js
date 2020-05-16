const $hertz = document.querySelector('.js-hertz');

const times = [];

hzChecker();

function hzChecker() {
  const prevTimestamp = performance.now();

  requestAnimationFrame(() => {
    const timestamp = performance.now();
    times.push(1000 / (timestamp - prevTimestamp));

    if (times.length <= 30) {
      hzChecker();
    } else {
      let sum = 0;
      let count = 0;

      for (let i = times.length - 1; i !== 10; i -= 1) {
        sum += Math.round(times[i]);
        count += 1;
      }

      state.hz = Math.round(sum / count);
      $hertz.textContent = String(state.hz);
    }
  });
}
