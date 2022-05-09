function classRemove() {
    if (this instanceof MouseEvent) {
        this.target.parentElement.parentElement.classList.remove('key__pressed');
    }

    if (this instanceof KeyboardEvent) {
        let pressedKey = document.querySelector(`.${this.code}`);
        pressedKey.classList.remove('key__pressed');
    }
}

function simulatePress(evt) {
    let key = evt.target.parentElement.parentElement;
    let currentValue = evt.target.innerHTML;

    if (!key.classList.contains('func')) {
        document.querySelector('#textarea').value += currentValue;
    }
}

function pressKey(evt) {
    window.removeEventListener('mouseup', this.classRemove);
    // window.removeEventListener('keyup', this.classRemove);
    this.classRemove = classRemove.bind(evt);

    if (evt instanceof MouseEvent) {
        if (evt.target.classList.contains('key__text')) {
            let pressedKey = evt.target.parentElement.parentElement;
            pressedKey.classList.add('key__pressed');

            simulatePress(evt);

            window.addEventListener('mouseup', this.classRemove);
        }
    }

    if (evt instanceof KeyboardEvent) {
        let pressedKey = document.querySelector(`.${evt.code}`);
        if (pressedKey) {
            pressedKey.classList.add('key__pressed');

            window.addEventListener('keyup', this.classRemove);
        }
    }
}

window.addEventListener('keydown', (evt) => {
    let pressedKey = document.querySelector(`.${evt.code}`);
    let currentLang = pressedKey.querySelector(':not(.hidden)>:not(.hidden)');
    let char = currentLang.querySelector(':not(.hidden)');
    // console.log(char)
    if (pressedKey && !pressedKey.classList.contains('func')) {
        document.querySelector('#textarea').value += char.innerHTML;
    }
})

export { pressKey };
