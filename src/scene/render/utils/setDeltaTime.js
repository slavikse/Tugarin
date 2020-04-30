let previousTime = performance.now();

export default function setDeltaTime(time) {
  state.scene.deltaTime = (time - previousTime) / 1000;
  previousTime = time;
}
