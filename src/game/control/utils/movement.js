// detail:
// actor: human | ai
// side: top | right | bottom | left
export default function movement(detail) {
  const event = new CustomEvent('movement', { detail });
  window.dispatchEvent(event);
}
