const { scene } = state;

export default {
  W({ actor, value }) { actor.y -= value * scene.deltaTime; },
  A({ actor, value }) { actor.x -= value * scene.deltaTime; },
  S({ actor, value }) { actor.y += value * scene.deltaTime; },
  D({ actor, value }) { actor.x += value * scene.deltaTime; },
};
