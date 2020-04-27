const { player } = state;

export default {
  W({ deltaTime, value }) { player.y -= deltaTime * value; },
  A({ deltaTime, value }) { player.x -= deltaTime * value; },
  S({ deltaTime, value }) { player.y += deltaTime * value; },
  D({ deltaTime, value }) { player.x += deltaTime * value; },
};
