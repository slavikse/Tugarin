const cells = {
  guns: {
    color: '#f00',
  },
};

export default function createCell({ type, side, otherCell }) {
  return {
    ...otherCell,
    ...cells[type],
    type,
    side,
  };
}
