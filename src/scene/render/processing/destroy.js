export default function destroy(otherCell) {
  const { cells } = state[otherCell.type];
  const index = cells.findIndex(({ id }) => id === otherCell.id);

  cells.splice(index, 1);
}
