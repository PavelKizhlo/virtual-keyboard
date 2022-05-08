function changeLayout() {
    let keysEng = document.querySelectorAll('.eng');
    keysEng.forEach(key => key.classList.toggle('hidden'));

    let keysRus = document.querySelectorAll('.rus');
    keysRus.forEach(key => key.classList.toggle('hidden'));
}

function caseSwich(evt) {
    // window.removeEventListener('keyup', caseSwich)

    let ShiftLeft = document.querySelector('.ShiftLeft');
    let ShiftRight = document.querySelector('.ShiftRight');

    let keysDown = document.querySelectorAll('.case-down');
    keysDown.forEach(key => key.classList.toggle('hidden'));

    let keysUp = document.querySelectorAll('.case-up');
    keysUp.forEach(key => key.classList.toggle('hidden'));

    ShiftLeft.addEventListener('mouseup', caseSwich);
    ShiftRight.addEventListener('mouseup', caseSwich);

    // window.addEventListener('keyup', caseSwich)
    // window.addEventListener('keyup', (evt) => {
    if (evt.code === 'ShiftLeft' || evt.code === 'ShiftRight') {
        window.addEventListener('keyup', caseSwich)
    }
    // })
    console.log(evt)
}

export { changeLayout, caseSwich } 