import { Key } from './key';
import { createArrowBlock } from './create-elements';

const firstRow = [], secondRow = [], thirdRow = [], fourthRow = [], fithRow = [], arrowBlock = [];

firstRow.push(new Key('`', '~', 'ё', 'Ё', 'Backquote',));
firstRow.push(new Key('1', '!', '1', '!'));
firstRow.push(new Key('2', '@', '2', '"'));
firstRow.push(new Key('3', '#', '3', '№'));
firstRow.push(new Key('4', '$', '4', ';'));
firstRow.push(new Key('5', '%', '5', '%'));
firstRow.push(new Key('6', '^', '6', ':'));
firstRow.push(new Key('7', '&', '7', '?'));
firstRow.push(new Key('8', '*', '8', '*'));
firstRow.push(new Key('9', '(', '9', '('));
firstRow.push(new Key('0', ')', '0', ')'));
firstRow.push(new Key('-', '_', '-', '_', 'Minus'));
firstRow.push(new Key('=', '+', '=', '+', 'Equal'));
firstRow.push(new Key('delete', 'delete', 'delete', 'delete', 'Backspace'));

secondRow.push(new Key('tab', 'tab', 'tab', 'tab', 'Tab'));
secondRow.push(new Key('q', 'Q', 'й', 'Й'));
secondRow.push(new Key('w', 'W', 'ц', 'Ц'));
secondRow.push(new Key('e', 'E', 'у', 'У'));
secondRow.push(new Key('r', 'R', 'к', 'К'));
secondRow.push(new Key('t', 'T', 'е', 'Е'));
secondRow.push(new Key('y', 'Y', 'н', 'Н'));
secondRow.push(new Key('u', 'U', 'г', 'Г'));
secondRow.push(new Key('i', 'I', 'ш', 'Ш'));
secondRow.push(new Key('o', 'O', 'щ', 'Щ'));
secondRow.push(new Key('p', 'P', 'з', 'З'));
secondRow.push(new Key('[', '{', 'х', 'Х', 'BracketLeft'));
secondRow.push(new Key(']', '}', 'ъ', 'Ъ', 'BracketRight'));
secondRow.push(new Key('\\', '/', '\\', '/', 'Backslash'));

thirdRow.push(new Key('capslock', 'capslock', 'capslock', 'capslock', 'CapsLock'));
thirdRow.push(new Key('a', 'A', 'ф', 'Ф'));
thirdRow.push(new Key('s', 'S', 'ы', 'Ы'));
thirdRow.push(new Key('d', 'D', 'в', 'В'));
thirdRow.push(new Key('f', 'F', 'а', 'А'));
thirdRow.push(new Key('g', 'G', 'п', 'П'));
thirdRow.push(new Key('h', 'H', 'р', 'Р'));
thirdRow.push(new Key('j', 'J', 'о', 'О'));
thirdRow.push(new Key('k', 'K', 'л', 'Л'));
thirdRow.push(new Key('l', 'L', 'д', 'Д'));
thirdRow.push(new Key(';', ':', 'ж', 'Ж', 'Semicolon'));
thirdRow.push(new Key('\'', '"', 'э', 'Э', 'Quote'));
thirdRow.push(new Key('return', 'return', 'return', 'return', 'Enter'));

fourthRow.push(new Key('shift', 'shift', 'shift', 'shift', 'ShiftLeft'));
fourthRow.push(new Key('z', 'Z', 'я', 'Я'));
fourthRow.push(new Key('x', 'X', 'ч', 'Ч'));
fourthRow.push(new Key('c', 'C', 'с', 'С'));
fourthRow.push(new Key('v', 'V', 'м', 'М'));
fourthRow.push(new Key('b', 'B', 'и', 'И'));
fourthRow.push(new Key('n', 'N', 'т', 'Т'));
fourthRow.push(new Key('m', 'M', 'ь', 'Ь'));
fourthRow.push(new Key(',', '<', 'б', 'Б', 'Comma'));
fourthRow.push(new Key('.', '>', 'ю', 'Ю', 'Period'));
fourthRow.push(new Key('/', '?', '.', ',', 'Slash'));
fourthRow.push(new Key('shift', 'shift', 'shift', 'shift', 'ShiftRight'));

fithRow.push(new Key('fn', 'fn', 'fn', 'fn', 'Fn'));
fithRow.push(new Key('control', 'control', 'control', 'control', 'ControlLeft'));
fithRow.push(new Key('option', 'option', 'option', 'option', 'AltLeft'));
fithRow.push(new Key('command', 'command', 'command', 'command', 'MetaLeft'));
fithRow.push(new Key('space', 'space', 'space', 'space', 'Space'));
fithRow.push(new Key('command', 'command', 'command', 'command', 'MetaRight'));
fithRow.push(new Key('option', 'option', 'option', 'option', 'AltRight'));
arrowBlock.push(new Key('&uarr;', '&uarr;', '&uarr;', '&uarr;', 'ArrowUp'));
arrowBlock.push(new Key('&larr;', '&larr;', '&larr;', '&larr;', 'ArrowLeft'));
arrowBlock.push(new Key('&darr;', '&darr;', '&darr;', '&darr;', 'ArrowDown'));
arrowBlock.push(new Key('&rarr;', '&rarr;', '&rarr;', '&rarr;', 'ArrowRight'));
fithRow.push(createArrowBlock(arrowBlock));

export { firstRow, secondRow, thirdRow, fourthRow, fithRow, arrowBlock };

// const rows = [
//     ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '&minus;', '=', 'delete'],
//     ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
//     ['capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'return'],
//     ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shift'],
//     ['fn', 'control', 'option', 'command', 'space', 'command', 'option']
// ]
