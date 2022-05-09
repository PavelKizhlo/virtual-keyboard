function pressKey(evt) {
    if (evt instanceof MouseEvent) {
        if (evt.target.classList.contains('key__text')) {
            evt.target.parentElement.parentElement.classList.add('key__pressed');

            simulatePress(evt);

            document.addEventListener('mouseup', classRemove);
        }
    };

    if (evt instanceof KeyboardEvent) {
        let pressedKey = document.querySelector(`.${evt.code}`);
        if (pressedKey) {
            pressedKey.classList.add('key__pressed');

            window.addEventListener('keyup', classRemove)
        }
    }
}

function classRemove(evt) {
    if (evt instanceof MouseEvent) {
        evt.target.parentElement.parentElement.classList.remove('key__pressed');
    }

    if (evt instanceof KeyboardEvent) {
        let pressedKey = document.querySelector(`.${evt.code}`);
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

export { pressKey };