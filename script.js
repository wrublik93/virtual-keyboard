const keyboardContainer = document.createElement('div');
const keyboardTextarea = document.createElement('textarea');
keyboardContainer.className = 'virtual-keyboard';
keyboardTextarea.className = 'keyboard-textarea';
keyboardTextarea.rows = 10;
keyboardTextarea.cols = 40;
document.body.append(keyboardTextarea);
document.body.append(keyboardContainer);

const keyboardKeys = {
  codeKeys: ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
    'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
    'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
    'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
    'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'],
  ru: {
    nameKeys: ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '&#8592;',
      'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
      'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
      '&#8679; Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9650;', 'Shift &#8679;',
      'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'],

    capsKeys: ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '&#8592;',
      'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del',
      'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
      '&#8679; Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '&#9650;', 'Shift &#8679;',
      'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'],

    shiftKeys: ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', '&#8592;',
      'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del',
      'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
      '&#8679; Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '&#9650;', 'Shift &#8679;',
      'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'],
    
    capsShiftKeys: ['ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', '&#8592;',
      'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Del',
      'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
      '&#8679; Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', '&#9650;', 'Shift &#8679;',
      'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'],
    
  },
  en: {
    nameKeys: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '&#8592;',
      'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
      'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
      '&#8679; Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650;', 'Shift &#8679;',
      'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'],

    capsKeys: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '&#8592;',
      'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del',
      'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter',
      '&#8679; Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '&#9650;', 'Shift &#8679;',
      'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'],

    shiftKeys: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '&#8592;',
      'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del',
      'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
      '&#8679; Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&#9650;', 'Shift &#8679;',
      'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'],
    
    capsShiftKeys: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '&#8592;',
      'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'Del',
      'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter',
      '&#8679; Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '&#9650;', 'Shift &#8679;',
      'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'],
  },
};



const { codeKeys } = keyboardKeys;
const nameKeysRu = keyboardKeys.ru.nameKeys;
const capsKeysRu = keyboardKeys.ru.capsKeys;
const shiftKeysRu = keyboardKeys.ru.shiftKeys;
const capsShiftKeysRu = keyboardKeys.ru.capsShiftKeys;
const nameKeysEn = keyboardKeys.en.nameKeys;
const capsKeysEn = keyboardKeys.en.capsKeys;
const shiftKeysEn = keyboardKeys.en.shiftKeys;
const capsShiftKeysEn = keyboardKeys.en.capsShiftKeys;

function initKeyboard(code, nameKeys) {
  let out = '';
  code.forEach((item, index) => {
    out += `<div class="k-key" data="${item}">${nameKeys[index]}</div>`;
  });
  document.querySelector('.virtual-keyboard').innerHTML = out;
}

if (!localStorage.getItem('lang') || localStorage.getItem('lang') === 'ru') {
  if (!localStorage.getItem('caps') || localStorage.getItem('caps') === 'false') {
    initKeyboard(codeKeys, nameKeysRu);
  } else if (localStorage.getItem('caps') === 'true') {
    initKeyboard(codeKeys, capsKeysRu);
    document.querySelector('.virtual-keyboard .k-key[data="CapsLock"]').classList.add('press-key');
  }
} else if (localStorage.getItem('lang') === 'en') {
  if (!localStorage.getItem('caps') || localStorage.getItem('caps') === 'false') {
    initKeyboard(codeKeys, nameKeysEn);
  } else if (localStorage.getItem('caps') === 'true') {
    initKeyboard(codeKeys, capsKeysEn);
    document.querySelector('.virtual-keyboard .k-key[data="CapsLock"]').classList.add('press-key');
  }
}

document.addEventListener('keydown', (event) => {
  if (codeKeys.includes(event.code)) {
    document.querySelector(`.virtual-keyboard .k-key[data="${event.code}"]`).classList.add('active');
    document.querySelector(`.virtual-keyboard .k-key[data="${event.code}"]`).classList.add('transform');
    if (event.code === 'CapsLock' && !document.querySelector('.virtual-keyboard .k-key[data="CapsLock"]').classList.value.includes('press-key')) {
      if (!localStorage.getItem('lang') || localStorage.getItem('lang') === 'ru') {
        initKeyboard(codeKeys, capsKeysRu);
      } else if (localStorage.getItem('lang') === 'en') {
        initKeyboard(codeKeys, capsKeysEn);
      }
      localStorage.setItem('caps', 'true');
      document.querySelector('.virtual-keyboard .k-key[data="CapsLock"]').classList.add('active');
      document.querySelector('.virtual-keyboard .k-key[data="CapsLock"]').classList.add('transform');
      if (!document.querySelector('.virtual-keyboard .k-key[data="CapsLock"]').classList.value.includes('press-key')) {
        document.querySelector('.virtual-keyboard .k-key[data="CapsLock"]').classList.add('press-key');
      }
    } else if ((event.code === 'CapsLock' && document.querySelector('.virtual-keyboard .k-key[data="CapsLock"]').classList.value.includes('press-key'))) {
      if (!localStorage.getItem('lang') || localStorage.getItem('lang') === 'ru') {
        initKeyboard(codeKeys, nameKeysRu);
      } else if (localStorage.getItem('lang') === 'en') {
        initKeyboard(codeKeys, nameKeysEn);
      }
      localStorage.setItem('caps', 'false');
      document.querySelector('.virtual-keyboard .k-key[data="CapsLock"]').classList.add('active');
      document.querySelector('.virtual-keyboard .k-key[data="CapsLock"]').classList.add('transform');
      document.querySelector('.virtual-keyboard .k-key[data="CapsLock"]').classList.remove('press-key');
    } else if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      if(localStorage.getItem('caps') === 'false') {
        if (!localStorage.getItem('lang') || localStorage.getItem('lang') === 'ru') {
          initKeyboard(codeKeys, shiftKeysRu);
        } else if (localStorage.getItem('lang') === 'en') {
          initKeyboard(codeKeys, shiftKeysEn);
        }
      } else if(localStorage.getItem('caps') === 'true') {
        if (!localStorage.getItem('lang') || localStorage.getItem('lang') === 'ru') {
          initKeyboard(codeKeys, capsShiftKeysRu);
          document.querySelector('.virtual-keyboard .k-key[data="CapsLock"]').classList.add('press-key');
        } else if (localStorage.getItem('lang') === 'en') {
          initKeyboard(codeKeys, capsShiftKeysEn);
          document.querySelector('.virtual-keyboard .k-key[data="CapsLock"]').classList.add('press-key');
        }
      }
      document.querySelector(`.virtual-keyboard .k-key[data="${event.code}"]`).classList.add('active');
      document.querySelector(`.virtual-keyboard .k-key[data="${event.code}"]`).classList.add('transform');
    }
    document.querySelector('.keyboard-textarea').value = document.querySelector('.keyboard-textarea').value + document.querySelector(`.virtual-keyboard .k-key[data="${event.code}"]`).innerHTML;
  }
});

document.addEventListener('keyup', (event) => {
  if (codeKeys.includes(event.code)) {
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      if(localStorage.getItem('caps') === 'false') {
        if (!localStorage.getItem('lang') || localStorage.getItem('lang') === 'ru') {
          initKeyboard(codeKeys, nameKeysRu);
        } else if (localStorage.getItem('lang') === 'en') {
          initKeyboard(codeKeys, nameKeysEn);
        }
      } else if(localStorage.getItem('caps') === 'true') {
        if (!localStorage.getItem('lang') || localStorage.getItem('lang') === 'ru') {
          initKeyboard(codeKeys, capsKeysRu);
          document.querySelector('.virtual-keyboard .k-key[data="CapsLock"]').classList.add('press-key');
        } else if (localStorage.getItem('lang') === 'en') {
          initKeyboard(codeKeys, capsKeysEn);
          document.querySelector('.virtual-keyboard .k-key[data="CapsLock"]').classList.add('press-key');
        }
      }
    }
    document.querySelector(`.virtual-keyboard .k-key[data="${event.code}"]`).classList.remove('active');
    document.querySelector(`.virtual-keyboard .k-key[data="${event.code}"]`).classList.remove('transform');
  }
});

/* keyboardTextarea.addEventListener('input', () => {

}); */
