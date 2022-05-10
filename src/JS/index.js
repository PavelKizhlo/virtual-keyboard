import { createPage } from './create-elements.js';
import { changeLayout } from './swich.js';
import { addWindowListeners, addKeyListeners } from './listeners.js';

let lang = localStorage.getItem('lang');

if (lang === 'eng' || !lang) {
  createPage();
}

if (lang === 'rus') {
  createPage();
  changeLayout();
}


addWindowListeners();
addKeyListeners();
