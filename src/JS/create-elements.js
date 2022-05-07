import { Key } from './key';
import { firstRow, secondRow, thirdRow, fourthRow, fithRow, arrowBlock } from './layouts.js';

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

    keyboard.append(createRow(firstRow));
    keyboard.append(createRow(secondRow));
    keyboard.append(createRow(thirdRow));
    keyboard.append(createRow(fourthRow));
    keyboard.append(createRow(fithRow));
}

export { createArrowBlock, createPage };