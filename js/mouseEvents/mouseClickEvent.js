/* eslint-disable import/extensions */
import initLocalStorage from '../localStorage/initLocalStorage.js';
import initKeyboard from '../keyboard/initKeyboard.js';
import keyboardKeys from '../keyboard/keyboardKeys.js';

const mouseClickEvent = () => {
  const VIRTUAL_KEYBOARD = document.querySelector('.virtual-keyboard');
  let LANG = window.localStorage.getItem('lang');
  let CAPS = window.localStorage.getItem('caps');
  let SHIFT = window.localStorage.getItem('shift');
  VIRTUAL_KEYBOARD.addEventListener('click', (event) => {
    const { target } = event;
    if (target.classList.contains('k-key')) {
      if (target.attributes.data.value === 'MetaLeft' && LANG === 'ru') {
        window.localStorage.setItem('lang', 'en');
        LANG = window.localStorage.getItem('lang');
        initLocalStorage(LANG, CAPS);
      } else if (target.attributes.data.value === 'MetaLeft' && LANG === 'en') {
        window.localStorage.setItem('lang', 'ru');
        LANG = window.localStorage.getItem('lang');
        initLocalStorage(LANG, CAPS);
      }

      if (target.innerText === 'CapsLock' && JSON.parse(CAPS) === false) {
        window.localStorage.setItem('caps', JSON.stringify(true));
        CAPS = window.localStorage.getItem('caps');
        initLocalStorage(LANG, CAPS);
      } else if (target.innerText === 'CapsLock' && JSON.parse(CAPS) === true) {
        window.localStorage.setItem('caps', JSON.stringify(false));
        CAPS = window.localStorage.getItem('caps');
        initLocalStorage(LANG, CAPS);
      }

      if (target.attributes.data.value === 'ShiftLeft' && LANG === 'ru' && !JSON.parse(CAPS)) {
        if (!JSON.parse(SHIFT)) {
          window.localStorage.setItem('shift', JSON.stringify(true));
          SHIFT = window.localStorage.getItem('shift');
          initKeyboard(keyboardKeys.codeKeys, keyboardKeys.ru.shiftKeys);
          document.querySelector('.virtual-keyboard .k-key[data="ShiftLeft"]').classList.add('press-key');
        } else {
          window.localStorage.setItem('shift', JSON.stringify(false));
          SHIFT = window.localStorage.getItem('shift');
          initKeyboard(keyboardKeys.codeKeys, keyboardKeys.ru.nameKeys);
          document.querySelector('.virtual-keyboard .k-key[data="ShiftLeft"]').classList.remove('press-key');
        }
      }
    }
  });
};

export default mouseClickEvent;
