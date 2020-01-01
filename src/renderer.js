import { remote } from 'electron';
import './game';
// import './ai';

const $quit = document.querySelector('.quit');
$quit.addEventListener('click', () => remote.app.quit());
