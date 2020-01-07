// train | game
const $mode = document.querySelector('.mode');
const mode = { type: 'game' };

$mode.addEventListener('click', () => {
  mode.type = mode.type === 'game' ? 'train' : 'game';
});

export default mode;
