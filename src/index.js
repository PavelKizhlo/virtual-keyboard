class Key {
    constructor(name, isFunctional, code) {
        this.name = name;
        this.isFunctional = isFunctional;
        this.code = code;
    }
}

function createKey(keyObj) {
    const alphabetEn = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
        'y', 'z'];

    let key = document.createElement('div');
    key.classList.add('key');

    if (alphabetEn.includes(keyObj.name)) {
        key.classList.add(`Key${keyObj.name.toUpperCase()}`);
    } else if (typeof (+keyObj.name) === 'number' && !isNaN(+keyObj.name)) {
        key.classList.add(`Digit${keyObj.name}`);
    } else {
        key.classList.add(`${keyObj.code}`);
    }

    let keyText = document.createElement('span');
    keyText.classList.add('key__text');
    keyText.innerHTML = keyObj.name;

    key.append(keyText);

    return key;
}

function createRow(keysInRow) {
    let keyboardRow = document.createElement('div');
    keyboardRow.classList.add('keyboard__row');

    keysInRow.forEach(key => {
        if (key instanceof Key) {
            keyboardRow.append(createKey(key));
        } else {
            keyboardRow.append(key);
        }
    });

    return keyboardRow;
}

function createArrowBlock(keysInBlock) {
    let arrowBlock = document.createElement('div');
    arrowBlock.classList.add('keyboard__arrow-block');

    keysInBlock.forEach(key => arrowBlock.append(createKey(key)));

    return arrowBlock;
}

function createPage() {
    document.body.innerHTML = `<div class="wrapper">
<h1 class="title">Виртуальная клавиатура</h1>
<textarea class="textarea" id="textarea" cols="52" rows="5"></textarea>
<div class="keyboard"></div>
<p class="system">Клавиатура создана в операционной системе Mac OS</p>
<p class="language">Для переключения языка: комбинация Ctrl + Space <br> или клавиша Fn (доступна только для клика, так как не распознаётся приложениями)</p>
</div>`;

    let keyboard = document.querySelector('.keyboard');

    const firstRow = [], secondRow = [], thirdRow = [], fourthRow = [], fithRow = [], arrowBlock = [];

    firstRow.push(new Key('`', false, 'Backquote'));
    firstRow.push(new Key('1', false));
    firstRow.push(new Key('2', false));
    firstRow.push(new Key('3', false));
    firstRow.push(new Key('4', false));
    firstRow.push(new Key('5', false));
    firstRow.push(new Key('6', false));
    firstRow.push(new Key('7', false));
    firstRow.push(new Key('8', false));
    firstRow.push(new Key('9', false));
    firstRow.push(new Key('0', false));
    firstRow.push(new Key('&minus;', false, 'Minus'));
    firstRow.push(new Key('=', false, 'Equal'));
    firstRow.push(new Key('delete', true, 'Backspace'));

    secondRow.push(new Key('tab', true, 'Tab'));
    secondRow.push(new Key('q', false));
    secondRow.push(new Key('w', false));
    secondRow.push(new Key('e', false));
    secondRow.push(new Key('r', false));
    secondRow.push(new Key('t', false));
    secondRow.push(new Key('y', false));
    secondRow.push(new Key('u', false));
    secondRow.push(new Key('i', false));
    secondRow.push(new Key('o', false));
    secondRow.push(new Key('p', false));
    secondRow.push(new Key('[', false, 'BracketLeft'));
    secondRow.push(new Key(']', false, 'BracketRight'));
    secondRow.push(new Key('\\', false, 'Backslash'));

    thirdRow.push(new Key('capslock', true, 'CapsLock'));
    thirdRow.push(new Key('a', false));
    thirdRow.push(new Key('s', false));
    thirdRow.push(new Key('d', false));
    thirdRow.push(new Key('f', false));
    thirdRow.push(new Key('g', false));
    thirdRow.push(new Key('h', false));
    thirdRow.push(new Key('j', false));
    thirdRow.push(new Key('k', false));
    thirdRow.push(new Key('l', false));
    thirdRow.push(new Key(';', false, 'Semicolon'));
    thirdRow.push(new Key('\'', false, 'Quote'));
    thirdRow.push(new Key('return', true, 'Enter'));

    fourthRow.push(new Key('shift', true, 'ShiftLeft'));
    fourthRow.push(new Key('z', false));
    fourthRow.push(new Key('x', false));
    fourthRow.push(new Key('c', false));
    fourthRow.push(new Key('v', false));
    fourthRow.push(new Key('b', false));
    fourthRow.push(new Key('n', false));
    fourthRow.push(new Key('m', false));
    fourthRow.push(new Key(',', false, 'Comma'));
    fourthRow.push(new Key('.', false, 'Period'));
    fourthRow.push(new Key('/', false, 'Slash'));
    fourthRow.push(new Key('shift', true, 'ShiftRight'));

    fithRow.push(new Key('fn', true, 'Fn'));
    fithRow.push(new Key('control', true, 'ControlLeft'));
    fithRow.push(new Key('option', true, 'AltLeft'));
    fithRow.push(new Key('command', true, 'MetaLeft'));
    fithRow.push(new Key('space', true, 'Space'));
    fithRow.push(new Key('command', true, 'MetaRight'));
    fithRow.push(new Key('option', true, 'AltRight'));
    arrowBlock.push(new Key('&uarr;', true, 'ArrowUp'));
    arrowBlock.push(new Key('&larr;', true, 'ArrowLeft'));
    arrowBlock.push(new Key('&darr;', true, 'ArrowDown'));
    arrowBlock.push(new Key('&rarr;', true, 'ArrowRight'));
    fithRow.push(createArrowBlock(arrowBlock));

    keyboard.append(createRow(firstRow));
    keyboard.append(createRow(secondRow));
    keyboard.append(createRow(thirdRow));
    keyboard.append(createRow(fourthRow));
    keyboard.append(createRow(fithRow));
}

createPage()

let keyboard = document.querySelector('.keyboard');

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

keyboard.addEventListener('mousedown', pressKey);



window.addEventListener('keydown', pressKey);
window.addEventListener('keydown', (e) => {
    console.log(e.code)
});
