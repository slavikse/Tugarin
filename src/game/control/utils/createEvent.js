'use strict';

export default function createEvent(action) {
  // type: human | ai
  const type = { detail: { type: 'human' } };
  const event = new CustomEvent(action, type);

  window.dispatchEvent(event);
}
