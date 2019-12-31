// side: move-top | move-right | move-bottom | move-left
export default function createEvent(side) {
  // type: human | ai
  const type = { detail: { type: 'human' } };
  const event = new CustomEvent(side, type);

  window.dispatchEvent(event);
}
