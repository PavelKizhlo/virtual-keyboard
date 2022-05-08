function pressKey(evt) {
    if (evt instanceof MouseEvent) {
        if (evt.target.classList.contains('key__text')) {
            evt.target.parentElement.parentElement.classList.add('key__pressed');

            // simulatePress(evt);

            document.addEventListener('mouseup', () => {
                evt.target.parentElement.parentElement.classList.remove('key__pressed');
            })
        }
    };

    if (evt instanceof KeyboardEvent) {
        let pressedKey = document.querySelector(`.${evt.code}`);
        if (pressedKey) {
            pressedKey.classList.add('key__pressed');

            window.addEventListener('keyup', () => {
                pressedKey.classList.remove('key__pressed');
            })
        }
        // console.log(evt)
    }
}

// function simulatePress(evt) {
// let keyDown = new KeyboardEvent('keydown', { code: evt.target.parentElement.dataset.code });
// window.dispatchEvent(keyDown);

// console.log(keyDown)

// document.querySelector('#textarea').value += 'x';
// }

export { pressKey };