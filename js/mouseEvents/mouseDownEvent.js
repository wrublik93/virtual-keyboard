const mouseDownEvent = () => {
  const VIRTUAL_KEYBOARD = document.querySelector('.virtual-keyboard');
  VIRTUAL_KEYBOARD.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('k-key')) {
      event.target.classList.add('transform-click');
      /* textareaText(event.target.innerText); */
    }
  });
};

export default mouseDownEvent;
