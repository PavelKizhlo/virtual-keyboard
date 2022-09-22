import { Key } from './key';
import {
  firstRow, secondRow, thirdRow, fourthRow, fithRow
} from './layouts.js';

function createKey(keyObj) {
  const alphabetEng = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'];

  const alphabetRus = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л',
    'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч',
    'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я'];

  const funcKeys = ['Backspace', 'Tab', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight', 'Fn', 'ControlLeft', 'AltLeft', 'MetaLeft', 'Space', 'MetaRight', 'AltRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'];

  let key = document.createElement('div');
  key.classList.add('key');

  let keyEng = document.createElement('div');
  keyEng.classList.add('eng');

  let keyRus = document.createElement('div');
  keyRus.classList.add('rus', 'hidden');

  key.append(keyEng);
  key.append(keyRus);

  if (alphabetEng.includes(keyObj.engCaseDown)) {
    key.classList.add(`Key${keyObj.engCaseDown.toUpperCase()}`, 'alphabet');
    key.setAttribute('data-code', `Key${keyObj.engCaseDown.toUpperCase()}`);
  } else if (typeof (+keyObj.engCaseDown) === 'number' && !Number.isNaN(+keyObj.engCaseDown)) {
    key.classList.add(`Digit${keyObj.engCaseDown}`);
    key.setAttribute('data-code', `Digit${keyObj.engCaseDown}`);
  } else if (funcKeys.includes(keyObj.code)) {
    key.classList.add(`${keyObj.code}`, 'func');
    key.setAttribute('data-code', `${keyObj.code}`);
  } else {
    key.classList.add(`${keyObj.code}`);
    key.setAttribute('data-code', `${keyObj.code}`);
  }

  if (alphabetRus.includes(keyObj.rusCaseDown)) {
    key.classList.add('alphabet-rus');
  }

  let keyTextEng = document.createElement('span');
  keyTextEng.classList.add('key__text', 'case-down');
  keyTextEng.innerHTML = keyObj.engCaseDown;

  keyEng.append(keyTextEng);

  let keyTextEngUp = document.createElement('span');
  keyTextEngUp.classList.add('key__text', 'case-up', 'hidden');
  keyTextEngUp.innerHTML = keyObj.engCaseUp;

  keyEng.append(keyTextEngUp);

  let keyTextRus = document.createElement('span');
  keyTextRus.classList.add('key__text', 'case-down');
  keyTextRus.innerHTML = keyObj.rusCaseDown;

  keyRus.append(keyTextRus);

  let keyTextRusUp = document.createElement('span');
  keyTextRusUp.classList.add('key__text', 'case-up', 'hidden');
  keyTextRusUp.innerHTML = keyObj.rusCaseUp;

  keyRus.append(keyTextRusUp);

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
<p class="language">Для переключения языка: комбинация Ctrl + Option (left) <br> или клавиша Fn (доступна только для клика, так как является системной клавишей)</p>
</div>`;

  let keyboard = document.querySelector('.keyboard');

  keyboard.append(createRow(firstRow));
  keyboard.append(createRow(secondRow));
  keyboard.append(createRow(thirdRow));
  keyboard.append(createRow(fourthRow));
  keyboard.append(createRow(fithRow));
}

export { createArrowBlock, createPage };
