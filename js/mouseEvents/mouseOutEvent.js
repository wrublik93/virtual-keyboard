const mouseOutEvent = () => {
  const VIRTUAL_KEYBOARD = document.querySelector('.virtual-keyboard');
  VIRTUAL_KEYBOARD.addEventListener('mouseout', (event) => {
    if (event.target.classList.contains('k-key')) {
      event.target.classList.remove('transform-click');
    }
  });
};

export default mouseOutEvent;
