const milliseconds = 1000;
let previousDeltaTime = 0;

const $fps = document.querySelector('.fps');

export default function fpsMeter(deltaTime) {
  $fps.textContent = String(Math.round(milliseconds / (deltaTime - previousDeltaTime)));
  previousDeltaTime = deltaTime;
}
