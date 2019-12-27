'use strict';

import { remote } from 'electron';
import './game';
// import './neuron';

const $quit = document.querySelector('.quit');
$quit.addEventListener('click', () => remote.app.quit());
