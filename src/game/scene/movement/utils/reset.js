// TODO: событие окончания игры для сбора данных для обучения
//   actor проиграл - противоположный игрок - выиграл
export default function reset(actor) {
  actor.side = actor.sideDefault;
  actor.cells = actor.cells.slice(0, 3);

  actor.cells.forEach((cell) => {
    cell.position = cell.positionDefault;
  });
}
