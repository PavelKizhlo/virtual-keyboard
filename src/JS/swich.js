function changeLayout() {
    let keysEng = document.querySelectorAll('.eng');
    keysEng.forEach(key => key.classList.toggle('hidden'));

    let keysRus = document.querySelectorAll('.rus');
    keysRus.forEach(key => key.classList.toggle('hidden'));
}

function caseSwich() {
    let ShiftLeft = document.querySelector('.ShiftLeft');
    let ShiftRight = document.querySelector('.ShiftRight');

    let keysDown = document.querySelectorAll('.case-down');
    keysDown.forEach(key => key.classList.toggle('hidden'));

    let keysUp = document.querySelectorAll('.case-up');
    keysUp.forEach(key => key.classList.toggle('hidden'));

    ShiftLeft.addEventListener('mouseup', caseSwich);
    ShiftRight.addEventListener('mouseup', caseSwich);
}

function capsLockSwich(evt) {
    // let capsLock = document.querySelector('.CapsLock');
    // capsLock.classList.toggle('key__pressed')

    let alphabetDownCase = document.querySelectorAll('.alphabet>.eng>.case-down, .alphabet>.rus>.case-down');
    alphabetDownCase.forEach(key => key.classList.toggle('hidden'));

    let alphabetUpCase = document.querySelectorAll('.alphabet>.eng>.case-up, .alphabet>.rus>.case-up');
    alphabetUpCase.forEach(key => key.classList.toggle('hidden'));
}

export { changeLayout, caseSwich, capsLockSwich } 