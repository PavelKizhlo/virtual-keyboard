import { Key } from './key';
import { createArrowBlock } from './create-elements';

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

export { firstRow, secondRow, thirdRow, fourthRow, fithRow, arrowBlock };
