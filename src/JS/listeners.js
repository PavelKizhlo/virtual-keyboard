import { pressKey } from './press.js';
import { changeLayout, caseSwich, capsLockSwich } from './swich.js';

function addWindowListeners() {
  let pressed = new Set();

  window.addEventListener('mousedown', pressKey);
  window.addEventListener('keydown', pressKey);

  window.addEventListener('keydown', (evt) => {
    if (evt.code === 'ShiftLeft' || evt.code === 'ShiftRight') {
      caseSwich(evt);
    }

    if (evt.code === 'CapsLock') {
      capsLockSwich();
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
  });

  window.addEventListener('keyup', (evt) => {
    if (evt.code === 'ShiftLeft' || evt.code === 'ShiftRight') {
      caseSwich(evt);
    }

    if (evt.code === 'CapsLock') {
      capsLockSwich();
    }

    pressed.delete(evt.code);
  });

  window.addEventListener('keydown', (evt) => {
    pressed.add(evt.code);

    if (!pressed.has('AltLeft') || !pressed.has('ControlLeft')) {
      return;
    }

    pressed.clear();

    changeLayout();
  });
}

function addKeyListeners() {
  const textarea = document.querySelector('#textarea');
  const fn = document.querySelector('.Fn');
  const ShiftLeft = document.querySelector('.ShiftLeft');
  const ShiftRight = document.querySelector('.ShiftRight');
  const capsLock = document.querySelector('.CapsLock');

  textarea.focus();
  textarea.addEventListener('blur', () => textarea.focus());
  textarea.addEventListener('keypress', (evt) => {
    evt.preventDefault();
  });

  fn.addEventListener('click', changeLayout);

  ShiftLeft.addEventListener('mousedown', caseSwich);
  ShiftRight.addEventListener('mousedown', caseSwich);

  capsLock.addEventListener('click', capsLockSwich);
}

export { addWindowListeners, addKeyListeners };
