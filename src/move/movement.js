// todo правила движения при столкновениях

export function top() {
  state.actors.player.center.y += state.actors.player.step;
}

export function right() {
  state.actors.player.center.x -= state.actors.player.step;
}

export function bottom() {
  state.actors.player.center.y -= state.actors.player.step;
}

export function left() {
  state.actors.player.center.x += state.actors.player.step;
}
