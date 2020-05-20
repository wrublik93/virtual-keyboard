/* eslint-disable import/extensions */
import initKeyboard from '../keyboard/initKeyboard.js';
import keyboardKeys from '../keyboard/keyboardKeys.js';

const initLocalStorage = (LANG, CAPS) => {
  window.localStorage.setItem('ctrl', JSON.stringify(false));
  window.localStorage.setItem('shift', JSON.stringify(false));

  if (LANG === null && CAPS === null) {
    localStorage.setItem('lang', 'ru');
    localStorage.setItem('caps', JSON.stringify(false));
    initKeyboard(keyboardKeys.codeKeys, keyboardKeys.ru.nameKeys);
  }

  if (LANG === 'ru' && JSON.parse(CAPS) === false) initKeyboard(keyboardKeys.codeKeys, keyboardKeys.ru.nameKeys);

  if (LANG === 'ru' && JSON.parse(CAPS) === true) {
    initKeyboard(keyboardKeys.codeKeys, keyboardKeys.ru.capsKeys);
    document.querySelector('.virtual-keyboard .k-key[data="CapsLock"]').classList.add('press-key');
  }

  if (LANG === 'en' && JSON.parse(CAPS) === false) initKeyboard(keyboardKeys.codeKeys, keyboardKeys.en.nameKeys);

  if (LANG === 'en' && JSON.parse(CAPS) === true) {
    initKeyboard(keyboardKeys.codeKeys, keyboardKeys.en.capsKeys);
    document.querySelector('.virtual-keyboard .k-key[data="CapsLock"]').classList.add('press-key');
  }
};

export default initLocalStorage;
