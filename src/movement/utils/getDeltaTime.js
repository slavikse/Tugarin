let previousTime = 0;

export default function getDeltaTime(time) {
  const deltaTime = (time - previousTime) / 1000;
  previousTime = time;

  return deltaTime;
}
