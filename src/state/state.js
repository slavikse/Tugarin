window.state = {
  ctx: {},
  blockSize: 20,
  scene: {
    // Удвоенные от половины размеров.
    width: -1,
    height: -1,

    // Кратные blockSize без остатка.
    halfWidth: -1,
    halfHeight: -1,

    mainColor: '#000',
  },
  actors: {
    player: {},
    walls: {},
    enemies: {},
  },
};
