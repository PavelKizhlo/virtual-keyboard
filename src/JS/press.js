function classRemove() {
  if (this instanceof MouseEvent) {
    let pressedKey = this.target.parentElement.parentElement;

    if (pressedKey.dataset.code !== 'CapsLock') {
      pressedKey.classList.remove('key__pressed');
    }
  }

  if (this instanceof KeyboardEvent) {
    let pressedKey = document.querySelector(`.${this.code}`);
    pressedKey.classList.remove('key__pressed');
  }
}

function simulatePress(evt) {
  let textarea = document.querySelector('#textarea');
  let key = evt.target.parentElement.parentElement;
  let currentValue = evt.target.innerHTML;

  if (!key.classList.contains('func')) {
    textarea.value += currentValue;
  }

  if (key.dataset.code === 'Space') {
    textarea.value += ' ';
  }

  if (key.dataset.code === 'Backspace') {
    textarea.value = textarea.value.slice(0, -1);
  }

  if (key.dataset.code === 'Enter') {
    textarea.value += '\n';
  }

  if (key.dataset.code === 'Tab') {
    textarea.value += '    ';
  }
}

function pressKey(evt) {
  window.removeEventListener('mouseup', this.classRemove);
  // window.removeEventListener('keyup', this.classRemove);
  this.classRemove = classRemove.bind(evt);

  if (evt instanceof MouseEvent) {
    if (evt.target.classList.contains('key__text')) {
      let pressedKey = evt.target.parentElement.parentElement;
      // console.log(pressedKey)
      if (pressedKey.dataset.code !== 'CapsLock') {
        pressedKey.classList.add('key__pressed');
      }

      simulatePress(evt);

      window.addEventListener('mouseup', this.classRemove);
    }
  }

  if (evt instanceof KeyboardEvent) {
    let pressedKey = document.querySelector(`.${evt.code}`);
    if (pressedKey) {
      if (pressedKey.dataset.code !== 'CapsLock') {
        pressedKey.classList.add('key__pressed');
      }

      window.addEventListener('keyup', this.classRemove);
    }
  }
}

window.addEventListener('keydown', (evt) => {
  let pressedKey = document.querySelector(`.${evt.code}`);
  let currentLang = pressedKey.querySelector(':not(.hidden)>:not(.hidden)');
  let char = currentLang.querySelector(':not(.hidden)');

  if (pressedKey && !pressedKey.classList.contains('func')) {
    document.querySelector('#textarea').value += char.innerHTML;
  }
});

export { pressKey };
