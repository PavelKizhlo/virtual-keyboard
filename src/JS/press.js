function pressKey(evt) {
    if (evt instanceof MouseEvent) {
        if (evt.target.classList.contains('key__text')) {
            evt.target.parentElement.classList.add('key__pressed');

            document.addEventListener('mouseup', () => {
                evt.target.parentElement.classList.remove('key__pressed');
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
    }
}

export { pressKey };