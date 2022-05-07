import { createPage } from './create-elements.js';
import { pressKey } from './press.js';

createPage();

let keyboard = document.querySelector('.keyboard');

keyboard.addEventListener('mousedown', pressKey);
window.addEventListener('keydown', pressKey);

// window.addEventListener('keydown', (e) => {
//     console.log(e.code)
// });
