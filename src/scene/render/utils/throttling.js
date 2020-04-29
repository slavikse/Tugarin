const fpsTimeLock = 1000 / 30;
let previousTime = 0;
let deltaTimeLock = 0;

export default function throttling(time) {
  deltaTimeLock += time - previousTime;
  previousTime = time;

  if (deltaTimeLock >= fpsTimeLock) {
    deltaTimeLock = 0;
    return true;
  }

  return false;
}
