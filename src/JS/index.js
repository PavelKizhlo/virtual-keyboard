import { createPage } from './create-elements.js';
import { pressKey } from './press.js';
import { changeLayout, caseSwich, capsLockSwich } from './swich.js'

let lang = localStorage.getItem('lang');

if (lang === 'eng') {
    createPage();
}

if (lang === 'rus') {
    createPage();
    changeLayout();
};


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

    if ((evt.code === 'Enter')) {
        textarea.value += '\n';
    }

    if ((evt.code === 'Space')) {
        textarea.value += ' ';
    }

    if ((evt.code === 'Tab')) {
        evt.preventDefault();
        textarea.value += '    ';
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
        capsLockSwich();
    }
})

window.addEventListener('keyup', (evt) => {
    if (evt.code === 'CapsLock') {
        capsLockSwich();
    }
})

function changeLang(...codes) {
    let pressed = new Set();

    window.addEventListener('keydown', (evt) => {
        pressed.add(evt.code);

        for (let code of codes) {
            if (!pressed.has(code)) {
                return;
            }
        }

        pressed.clear();

        changeLayout();
    });

    window.addEventListener('keyup', (evt) => {
        pressed.delete(evt.code);
    });
}

changeLang('Space', 'ControlLeft')