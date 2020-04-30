export default {
  W({ actor, value }) { actor.y -= value * state.scene.deltaTime; },
  A({ actor, value }) { actor.x -= value * state.scene.deltaTime; },
  S({ actor, value }) { actor.y += value * state.scene.deltaTime; },
  D({ actor, value }) { actor.x += value * state.scene.deltaTime; },
};
