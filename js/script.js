/* eslint-disable import/extensions */
import initDOM from './DOM/initDOM.js';
import initLocalStorage from './localStorage/initLocalStorage.js';
import mouseUpEvent from './mouseEvents/mouseUpEvent.js';
import mouseDownEvent from './mouseEvents/mouseDownEvent.js';
import mouseOutEvent from './mouseEvents/mouseOutEvent.js';
import mouseClickEvent from './mouseEvents/mouseClickEvent.js';

// Init DOM
initDOM();

// Init local storage and init keyboard view
const LANG = window.localStorage.getItem('lang');
const CAPS = window.localStorage.getItem('caps');
initLocalStorage(LANG, CAPS);

// Mouse events
mouseUpEvent();
mouseDownEvent();
mouseOutEvent();
mouseClickEvent();

/*
const { codeKeys } = keyboardKeys;
const nameKeysRu = keyboardKeys.ru.nameKeys;
const capsKeysRu = keyboardKeys.ru.capsKeys;
const shiftKeysRu = keyboardKeys.ru.shiftKeys;
const capsShiftKeysRu = keyboardKeys.ru.capsShiftKeys;
const nameKeysEn = keyboardKeys.en.nameKeys;
const capsKeysEn = keyboardKeys.en.capsKeys;
const shiftKeysEn = keyboardKeys.en.shiftKeys;
const capsShiftKeysEn = keyboardKeys.en.capsShiftKeys;

const textareaText = (text) => {
  switch (text) {
    case 'CapsLock':
    case 'Alt':
    case 'Ctrl':
    case '⇧ Shift':
    case 'Shift ⇧':
    case 'Win':
      keyboardTextarea.value += '';
      break;
    case '←':
      keyboardTextarea.value = keyboardTextarea.value.slice(0, -1);
      break;
    case 'Del':
      keyboardTextarea.value = '';
      break;
    case 'Enter':
      keyboardTextarea.value += '\n';
      break;
    case 'Tab':
      keyboardTextarea.value += '\t';
      break;
    case '':
      keyboardTextarea.value += ' ';
      break;
    default:
      keyboardTextarea.value += text;
  }
};



const checkLowerCaseKeyboard = () => {
  if (localStorage.getItem('lang') === 'ru') {
    initKeyboard(codeKeys, nameKeysRu);
  } else if (localStorage.getItem('lang') === 'en') {
    initKeyboard(codeKeys, nameKeysEn);
  }
};

const checkUpperCaseKeyboard = () => {
  if (localStorage.getItem('lang') === 'ru') {
    initKeyboard(codeKeys, capsKeysRu);
  } else if (localStorage.getItem('lang') === 'en') {
    initKeyboard(codeKeys, capsKeysEn);
  }
};

const checkShiftKeyboard = () => {
  if (localStorage.getItem('lang') === 'ru') {
    initKeyboard(codeKeys, shiftKeysRu);
  } else if (localStorage.getItem('lang') === 'en') {
    initKeyboard(codeKeys, shiftKeysEn);
  }
};

const checkCapsShiftKeyboard = () => {
  if (localStorage.getItem('lang') === 'ru') {
    initKeyboard(codeKeys, capsShiftKeysRu);
  } else if (localStorage.getItem('lang') === 'en') {
    initKeyboard(codeKeys, capsShiftKeysEn);
  }
};

document.addEventListener('keydown', (event) => {
  if (codeKeys.includes(event.code)) {
    document.querySelector(`.virtual-keyboard .k-key[data="${event.code}"]`).classList.add('active');
    document.querySelector(`.virtual-keyboard .k-key[data="${event.code}"]`).classList.add('transform');
    if (event.code === 'CapsLock' && !document.querySelector('.virtual-keyboard .k-key[data="CapsLock"]').classList.value.includes('press-key')) {
      checkUpperCaseKeyboard();
      localStorage.setItem('caps', 'true');
      document.querySelector('.virtual-keyboard .k-key[data="CapsLock"]').classList.add('active');
      document.querySelector('.virtual-keyboard .k-key[data="CapsLock"]').classList.add('transform');
      if (!document.querySelector('.virtual-keyboard .k-key[data="CapsLock"]').classList.value.includes('press-key')) {
        document.querySelector('.virtual-keyboard .k-key[data="CapsLock"]').classList.add('press-key');
      }
    } else if ((event.code === 'CapsLock' && document.querySelector('.virtual-keyboard .k-key[data="CapsLock"]').classList.value.includes('press-key'))) {
      checkLowerCaseKeyboard();
      localStorage.setItem('caps', 'false');
      document.querySelector('.virtual-keyboard .k-key[data="CapsLock"]').classList.add('active');
      document.querySelector('.virtual-keyboard .k-key[data="CapsLock"]').classList.add('transform');
      document.querySelector('.virtual-keyboard .k-key[data="CapsLock"]').classList.remove('press-key');
    } else if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      if (localStorage.getItem('caps') === 'false') {
        checkShiftKeyboard();
      } else if (localStorage.getItem('caps') === 'true') {
        checkCapsShiftKeyboard();
        document.querySelector('.virtual-keyboard .k-key[data="CapsLock"]').classList.add('press-key');
      }
      document.querySelector(`.virtual-keyboard .k-key[data="${event.code}"]`).classList.add('active');
      document.querySelector(`.virtual-keyboard .k-key[data="${event.code}"]`).classList.add('transform');
    } else if (event.code === 'AltRight') {
      event.preventDefault();
    } else if (event.code === 'ControlLeft') {
      localStorage.setItem('ctrl', 'true');
    } else if (event.code === 'AltLeft') {
      event.preventDefault();
      if (localStorage.getItem('ctrl') === 'true' && localStorage.getItem('lang') === 'ru') {
        localStorage.setItem('lang', 'en');
        if (localStorage.getItem('caps') === 'true') {
          initKeyboard(codeKeys, capsKeysEn);
          document.querySelector('.virtual-keyboard .k-key[data="CapsLock"]').classList.add('press-key');
          document.querySelector(`.virtual-keyboard .k-key[data="${event.code}"]`).classList.add('active');
          document.querySelector(`.virtual-keyboard .k-key[data="${event.code}"]`).classList.add('transform');
          document.querySelector('.virtual-keyboard .k-key[data="ControlLeft"]').classList.add('active');
          document.querySelector('.virtual-keyboard .k-key[data="ControlLeft"]').classList.add('transform');
          localStorage.setItem('ctrl', 'false');
        }
        if (localStorage.getItem('caps') === 'false') {
          initKeyboard(codeKeys, nameKeysEn);
          document.querySelector(`.virtual-keyboard .k-key[data="${event.code}"]`).classList.add('active');
          document.querySelector(`.virtual-keyboard .k-key[data="${event.code}"]`).classList.add('transform');
          document.querySelector('.virtual-keyboard .k-key[data="ControlLeft"]').classList.add('active');
          document.querySelector('.virtual-keyboard .k-key[data="ControlLeft"]').classList.add('transform');
          localStorage.setItem('ctrl', 'false');
        }
      } else if (localStorage.getItem('ctrl') === 'true' && localStorage.getItem('lang') === 'en') {
        localStorage.setItem('lang', 'ru');
        if (localStorage.getItem('caps') === 'true') {
          initKeyboard(codeKeys, capsKeysRu);
          document.querySelector('.virtual-keyboard .k-key[data="CapsLock"]').classList.add('press-key');
          document.querySelector(`.virtual-keyboard .k-key[data="${event.code}"]`).classList.add('active');
          document.querySelector(`.virtual-keyboard .k-key[data="${event.code}"]`).classList.add('transform');
          document.querySelector('.virtual-keyboard .k-key[data="ControlLeft"]').classList.add('active');
          document.querySelector('.virtual-keyboard .k-key[data="ControlLeft"]').classList.add('transform');
          localStorage.setItem('ctrl', 'false');
        }
        if (localStorage.getItem('caps') === 'false') {
          initKeyboard(codeKeys, nameKeysRu);
          document.querySelector(`.virtual-keyboard .k-key[data="${event.code}"]`).classList.add('active');
          document.querySelector(`.virtual-keyboard .k-key[data="${event.code}"]`).classList.add('transform');
          document.querySelector('.virtual-keyboard .k-key[data="ControlLeft"]').classList.add('active');
          document.querySelector('.virtual-keyboard .k-key[data="ControlLeft"]').classList.add('transform');
          localStorage.setItem('ctrl', 'false');
        }
      }
    } else if (event.code === 'Tab') {
      event.preventDefault();
    }
    textareaText(document.querySelector(`.virtual-keyboard .k-key[data="${event.code}"]`).textContent);
  }
});

document.addEventListener('keyup', (event) => {
  if (codeKeys.includes(event.code)) {
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      if (localStorage.getItem('caps') === 'false') {
        checkLowerCaseKeyboard();
      } else if (localStorage.getItem('caps') === 'true') {
        checkUpperCaseKeyboard();
        document.querySelector('.virtual-keyboard .k-key[data="CapsLock"]').classList.add('press-key');
      }
    } else if (event.code === 'ControlLeft') {
      localStorage.setItem('ctrl', 'false');
    }
    document.querySelector(`.virtual-keyboard .k-key[data="${event.code}"]`).classList.remove('active');
    document.querySelector(`.virtual-keyboard .k-key[data="${event.code}"]`).classList.remove('transform');
  }
});

const virtualKeyboard = document.querySelector('.virtual-keyboard');

virtualKeyboard.addEventListener('click', (event) => {
  const { target } = event;
  if (target.classList.contains('k-key')) {
    if (target.innerText === 'CapsLock' && localStorage.getItem('caps') === 'false') {
      checkUpperCaseKeyboard();
      localStorage.setItem('caps', 'true');
      document.querySelector('.virtual-keyboard .k-key[data="CapsLock"]').classList.add('press-key');
    } else if (target.innerText === 'CapsLock' && localStorage.getItem('caps') === 'true') {
      checkLowerCaseKeyboard();
      localStorage.setItem('caps', 'false');
      document.querySelector('.virtual-keyboard .k-key[data="CapsLock"]').classList.remove('press-key');
    } else if (target.attributes.data.value === 'AltLeft' && localStorage.getItem('ctrl') === 'true') {
      if (localStorage.getItem('lang') === 'ru' && localStorage.getItem('caps') === 'false') {
        initKeyboard(codeKeys, nameKeysEn);
        localStorage.setItem('lang', 'en');
      } else if (localStorage.getItem('lang') === 'en' && localStorage.getItem('caps') === 'false') {
        initKeyboard(codeKeys, nameKeysRu);
        localStorage.setItem('lang', 'ru');
      } else if (localStorage.getItem('lang') === 'ru' && localStorage.getItem('caps') === 'true') {
        initKeyboard(codeKeys, capsKeysEn);
        document.querySelector('.virtual-keyboard .k-key[data="CapsLock"]').classList.add('press-key');
        localStorage.setItem('lang', 'en');
      } else if (localStorage.getItem('lang') === 'en' && localStorage.getItem('caps') === 'true') {
        initKeyboard(codeKeys, capsKeysRu);
        document.querySelector('.virtual-keyboard .k-key[data="CapsLock"]').classList.add('press-key');
        localStorage.setItem('lang', 'ru');
      }
    } else if (target.attributes.data.value === 'ShiftLeft' && localStorage.getItem('shift') === 'false') {
      if (localStorage.getItem('lang') === 'ru' && localStorage.getItem('caps') === 'false') {
        initKeyboard(codeKeys, shiftKeysRu);
        document.querySelector('.virtual-keyboard .k-key[data="ShiftLeft"]').classList.add('press-key');
        localStorage.setItem('shift', 'true');
      } else if (localStorage.getItem('lang') === 'en' && localStorage.getItem('caps') === 'false') {
        initKeyboard(codeKeys, shiftKeysEn);
        document.querySelector('.virtual-keyboard .k-key[data="ShiftLeft"]').classList.add('press-key');
        localStorage.setItem('shift', 'true');
      } else if (localStorage.getItem('lang') === 'ru' && localStorage.getItem('caps') === 'true') {
        initKeyboard(codeKeys, capsShiftKeysRu);
        document.querySelector('.virtual-keyboard .k-key[data="ShiftLeft"]').classList.add('press-key');
        document.querySelector('.virtual-keyboard .k-key[data="CapsLock"]').classList.add('press-key');
        localStorage.setItem('shift', 'true');
      } else if (localStorage.getItem('lang') === 'en' && localStorage.getItem('caps') === 'true') {
        initKeyboard(codeKeys, capsShiftKeysEn);
        document.querySelector('.virtual-keyboard .k-key[data="ShiftLeft"]').classList.add('press-key');
        document.querySelector('.virtual-keyboard .k-key[data="CapsLock"]').classList.add('press-key');
        localStorage.setItem('shift', 'true');
      }
    } else if (target.attributes.data.value === 'ShiftLeft' && localStorage.getItem('shift') === 'true') {
      if (localStorage.getItem('lang') === 'ru' && localStorage.getItem('caps') === 'false') {
        initKeyboard(codeKeys, nameKeysRu);
        document.querySelector('.virtual-keyboard .k-key[data="ShiftLeft"]').classList.remove('press-key');
        localStorage.setItem('shift', 'false');
      } else if (localStorage.getItem('lang') === 'en' && localStorage.getItem('caps') === 'false') {
        initKeyboard(codeKeys, nameKeysEn);
        document.querySelector('.virtual-keyboard .k-key[data="ShiftLeft"]').classList.remove('press-key');
        localStorage.setItem('shift', 'false');
      } else if (localStorage.getItem('lang') === 'ru' && localStorage.getItem('caps') === 'true') {
        initKeyboard(codeKeys, capsKeysRu);
        document.querySelector('.virtual-keyboard .k-key[data="ShiftLeft"]').classList.remove('press-key');
        document.querySelector('.virtual-keyboard .k-key[data="CapsLock"]').classList.add('press-key');
        localStorage.setItem('shift', 'false');
      } else if (localStorage.getItem('lang') === 'en' && localStorage.getItem('caps') === 'true') {
        initKeyboard(codeKeys, capsKeysEn);
        document.querySelector('.virtual-keyboard .k-key[data="ShiftLeft"]').classList.remove('press-key');
        document.querySelector('.virtual-keyboard .k-key[data="CapsLock"]').classList.add('press-key');
        localStorage.setItem('shift', 'false');
      }
    }
  }
});
 */
