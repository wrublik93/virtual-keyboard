const mouseUpEvent = () => {
  const VIRTUAL_KEYBOARD = document.querySelector('.virtual-keyboard');
  VIRTUAL_KEYBOARD.addEventListener('mouseup', (event) => {
    if (event.target.classList.contains('k-key')) {
      event.target.classList.remove('transform-click');
    }
  });
};

export default mouseUpEvent;
