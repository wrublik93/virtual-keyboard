/* eslint-disable import/extensions */
import createElement from './createElement.js';

export default function initDOM() {
  const HEADER_SECTION = createElement('header', 'header-section',
    createElement('div', 'wrapper', createElement('h1', 'title', 'Virtual Keyboard')));

  const MAIN_SECTION = createElement('main', 'main-section',
    [createElement('section', 'keyboard-section',
      [createElement('div', 'wrapper',
        [createElement('textarea', 'keyboard-textarea', undefined, true),
          createElement('div', 'virtual-keyboard'),
          createElement('div', 'description-language', `Нажмите Ctrl + Alt для смены языка, 
      если ввод осуществляется с помощью физической клавиатуры.<br>
      Нажмите Win для смены языка, если ввод осуществляется с помощью мыши.<br>
      Нажмите и удерживайте Shift на физической клавиатуре, чтобы перейти в режим ввода символов Shift.<br>
      Нажмите левой кнопкой мыши на Shift (left shift) для того, чтобы перейти в режим ввода символов Shift 
      с помощью мыши. При успешной активации Shift подсвечивается.<br>
      Нажмите Del для очистки окна ввода текста.<br>
      Мои контакты (если возникнут вопросы): @wrublik93 (Telegram)`)])])]);
  document.body.append(HEADER_SECTION);
  document.body.append(MAIN_SECTION);
}
