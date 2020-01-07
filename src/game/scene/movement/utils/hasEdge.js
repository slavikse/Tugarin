export default function hasEdge(actor) {
  const [{ position: [x, y] }] = actor.cells;
  const { innerWidth, innerHeight } = window;

  return x < 0 || y < 0 || x > innerWidth || y > innerHeight;
}
