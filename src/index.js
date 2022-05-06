class Key {
    constructor(name, isFunctional) {
        this.name = name;
        this.isFunctional = isFunctional;
    }
}

function createKey(keyObj) {
    let key = document.createElement('div');
    key.classList.add('key');

    if (keyObj.isFunctional) {
        if (keyObj.name.includes('arr;')) {
            key.classList.add('key_functional', 'key_arrow');
            keyObj.name === '&uarr;' ? key.classList.add('arrow-up') : key;
            keyObj.name === '&larr;' ? key.classList.add('arrow-left') : key;
            keyObj.name === '&darr;' ? key.classList.add('arrow-down') : key;
            keyObj.name === '&rarr;' ? key.classList.add('arrow-right') : key;
        } else {
            key.classList.add('key_functional', `key_${keyObj.name}`);
        }
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
<p class="language">Для переключения языка комбинация: левыe Ctrl + Alt</p>
</div>`;

    let keyboard = document.querySelector('.keyboard');

    const firstRow = [], secondRow = [], thirdRow = [], fourthRow = [], fithRow = [], arrowBlock = [];

    firstRow.push(new Key('`', false));
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
    firstRow.push(new Key('&minus;', false));
    firstRow.push(new Key('&plus;', false));
    firstRow.push(new Key('delete', true));

    secondRow.push(new Key('tab', true));
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
    secondRow.push(new Key('&#123;', false));
    secondRow.push(new Key('&#125;', false));
    secondRow.push(new Key('\\', false));

    thirdRow.push(new Key('capslock', true));
    thirdRow.push(new Key('a', false));
    thirdRow.push(new Key('s', false));
    thirdRow.push(new Key('d', false));
    thirdRow.push(new Key('f', false));
    thirdRow.push(new Key('g', false));
    thirdRow.push(new Key('h', false));
    thirdRow.push(new Key('j', false));
    thirdRow.push(new Key('k', false));
    thirdRow.push(new Key('l', false));
    thirdRow.push(new Key(';', false));
    thirdRow.push(new Key('\'', false));
    thirdRow.push(new Key('return', true));

    fourthRow.push(new Key('shift', true));
    fourthRow.push(new Key('z', false));
    fourthRow.push(new Key('x', false));
    fourthRow.push(new Key('c', false));
    fourthRow.push(new Key('v', false));
    fourthRow.push(new Key('b', false));
    fourthRow.push(new Key('n', false));
    fourthRow.push(new Key('m', false));
    fourthRow.push(new Key('&lt;', false));
    fourthRow.push(new Key('&gt;', false));
    fourthRow.push(new Key('/', false));
    fourthRow.push(new Key('shift', true));

    fithRow.push(new Key('fn', true));
    fithRow.push(new Key('control', true));
    fithRow.push(new Key('option', true));
    fithRow.push(new Key('command', true));
    fithRow.push(new Key('space', true));
    fithRow.push(new Key('command', true));
    fithRow.push(new Key('option', true));
    arrowBlock.push(new Key('&uarr;', true));
    arrowBlock.push(new Key('&larr;', true));
    arrowBlock.push(new Key('&darr;', true));
    arrowBlock.push(new Key('&rarr;', true));
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
    if (evt.target.classList.contains('key__text')) {
        evt.target.parentElement.classList.add('key__pressed');
    }

    document.addEventListener('mouseup', () => {
        evt.target.parentElement.classList.remove('key__pressed');
    })
}

keyboard.addEventListener('mousedown', pressKey);
