const initKeyboard = (code, nameKeys) => {
  let output = '';
  code.forEach((item, index) => {
    output += `<div class="k-key" data="${item}">${nameKeys[index]}</div>`;
  });
  document.querySelector('.virtual-keyboard').innerHTML = output;
};

export default initKeyboard;
