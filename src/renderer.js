/* eslint-disable import/no-extraneous-dependencies */
import { remote } from 'electron';
import '.';

const $quit = document.querySelector('.quit');
$quit.addEventListener('click', () => remote.app.quit());
