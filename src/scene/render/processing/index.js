import intersections from './intersections';
import addCell from './addCell';
import hasGameOver from './hasGameOver';

const { player } = state;

export default function processing() {
  // todo пока под игрока
  player.intersectionSides = { W: false, A: false, S: false, D: false };

  intersections().forEach(({ actor, side, actorCell, otherCell }) => {
    actor.intersectionSides[side] = true;

    if (otherCell.type === 'gun') {
      addCell({ actor, side, otherCell });
    } else if (otherCell.type === 'wall') {
      stopping({ actor, side });
    } else if (otherCell.type === 'spike') {
      destroy({ actorCell });
    }
  });
}

function stopping({ actor, side }) {
  actor.directionsSpeeds[side] = 0;
}

function destroy({ actorCell }) {
  if (actorCell.type === 'player_kernel') {
    hasGameOver();
  }
}
