import { createPage } from './create-elements.js';
import { pressKey } from './press.js';
import { changeLayout, caseSwich, capsLockSwich } from './swich.js'

createPage();

const keyboard = document.querySelector('.keyboard');
const textarea = document.querySelector('#textarea');
const fn = document.querySelector('.Fn');
const ShiftLeft = document.querySelector('.ShiftLeft');
const ShiftRight = document.querySelector('.ShiftRight');
const capsLock = document.querySelector('.CapsLock');
const ctrl = document.querySelector('.ControlLeft');
const space = document.querySelector('.Space');

textarea.focus();
textarea.addEventListener('blur', () => textarea.focus());
textarea.addEventListener('keypress', (evt) => {
    evt.preventDefault();
})

keyboard.addEventListener('mousedown', pressKey);
window.addEventListener('keydown', pressKey);

fn.addEventListener('click', changeLayout);

ShiftLeft.addEventListener('mousedown', caseSwich);
ShiftRight.addEventListener('mousedown', caseSwich);

window.addEventListener('keydown', (evt) => {
    if (evt.code === 'ShiftLeft' || evt.code === 'ShiftRight') {
        caseSwich(evt);
    }
})

window.addEventListener('keyup', (evt) => {
    if (evt.code === 'ShiftLeft' || evt.code === 'ShiftRight') {
        caseSwich(evt);
    }
})

capsLock.addEventListener('click', capsLockSwich);

window.addEventListener('keydown', (evt) => {
    if (evt.code === 'CapsLock') {
        capsLockSwich(evt);
    }
})

window.addEventListener('keyup', (evt) => {
    if (evt.code === 'CapsLock') {
        capsLockSwich(evt);
    }
})

window.addEventListener('keydown', controlHandler)

function controlHandler(evt) {
    window.removeEventListener('keyup', removeControlHandler);
    if (evt.code === 'ControlLeft') {
        window.addEventListener('keydown', spaceHandler)
    }
}

function spaceHandler(evt) {
    if (evt.code === 'Space') {
        // console.log(evt.getModifierState('Space'))
        changeLayout();
        // window.removeEventListener('keydown', spaceHandler)
    }

    window.addEventListener('keyup', removeControlHandler)
}

function removeControlHandler(evt) {
    if (evt.code === 'ControlLeft') {
        window.removeEventListener('keydown', spaceHandler)
    }
}