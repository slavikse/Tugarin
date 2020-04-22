window.state = {
  ctx: {},

  scene: {
    blockSize: 7 * 2,

    // Будут вычислены кратные blockSize без остатка.
    halfWidth: -1,
    halfHeight: -1,

    // Будут вычислены удвоенные от половины размеров.
    width: -1,
    height: -1,

    mainColor: '#000',
  },

  actors: {
    player: {},
    walls: {},
    enemies: {},
  },
};
