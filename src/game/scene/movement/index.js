import sideActor from './sideActor';
import move from './move';

export default async function movement() {
  window.addEventListener('movement', sideActor);

  await move();
}
