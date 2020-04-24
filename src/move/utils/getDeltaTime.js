let prevTime = 0;

export default function getDeltaTime(time) {
  const deltaTime = time - prevTime;
  prevTime = time;

  return deltaTime;
}
