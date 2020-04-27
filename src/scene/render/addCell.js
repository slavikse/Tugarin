export default function addCell({ playerCell, cellCell }) {
  // todo при движении наискосок нужно считать углы.
  // const side = state.player.bitmaskSides[state.player.bitmask];
  // console.log('side', side, state.player.bitmask);

  // todo получается одно и тоже. не работает как надо для наискосок
  // const isTopSide = side === 'N'; // || side === 'NW' || side === 'NE';
  // const isRightSide = side === 'E'; // || side === 'NE' || side === 'SE';
  // const isBottomSide = side === 'S'; // || side === 'SE' || side === 'SW';
  // const isLeftSide = side === 'W'; // || side === 'SW' || side === 'NW';

  // const isHorizontal = cellCell.x - state.player.x > state.scene.x;
  // const isVertical = cellCell.y - state.player.y > state.scene.y;

  // const NW = isHorizontal === false && isVertical === false;
  // const NE = isHorizontal === true && isVertical === false;
  // const SE = isHorizontal === true && isVertical === true;
  // const SW = isHorizontal === false && isVertical === true;

  let cell;

  // if (isTopSide && (NW || NE)) {
  // if (isTopSide) {
  //   console.log('добавить наверх');
  //   cell = {
  //     x: playerCell.x,
  //     y: playerCell.y + state.cell.height,
  //   };
  //
  //   // } else if (isRightSide && (NE || SE)) {
  // } else if (isRightSide) {
  //   console.log('добавить вправо');
  //   cell = {
  //     x: playerCell.x - state.cell.width,
  //     y: playerCell.y,
  //   };
  //
  //   // } else if (isBottomSide && (SE || SW)) {
  // } else if (isBottomSide) {
  //   console.log('добавить вниз');
  //   cell = {
  //     x: playerCell.x,
  //     y: playerCell.y - state.cell.height,
  //   };
  //
  //   // } else if (isLeftSide && (NW || SW)) {
  // } else if (isLeftSide) {
  //   console.log('добавить влево');
  //   cell = {
  //     x: playerCell.x + state.cell.width,
  //     y: playerCell.y,
  //   };
  // }

  if (cell) {
    state.player.cells.push(cell);
  }
}
