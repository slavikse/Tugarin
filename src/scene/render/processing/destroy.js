export default function destroy(cell) {
  const { cells } = state[cell.type];
  const index = cells.findIndex(({ id }) => id === cell.id);

  cells.splice(index, 1);
}
