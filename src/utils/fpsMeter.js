const $fps = document.querySelector('.fps .fps-counter');
let prevTime = 0;

export default function fpsMeter(time) {
  $fps.textContent = String(Math.round(1000 / (time - prevTime)));
  prevTime = time;
}
