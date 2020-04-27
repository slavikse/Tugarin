const { player } = state;

export default {
  W({ value, deltaTime }) { player.y -= value * deltaTime; },
  A({ value, deltaTime }) { player.x -= value * deltaTime; },
  S({ value, deltaTime }) { player.y += value * deltaTime; },
  D({ value, deltaTime }) { player.x += value * deltaTime; },
};
