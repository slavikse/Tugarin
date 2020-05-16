const { scene } = state;

export default {
  W({ actor, speed }) { actor.y -= speed * scene.deltaTime; },
  A({ actor, speed }) { actor.x -= speed * scene.deltaTime; },
  S({ actor, speed }) { actor.y += speed * scene.deltaTime; },
  D({ actor, speed }) { actor.x += speed * scene.deltaTime; },
};
