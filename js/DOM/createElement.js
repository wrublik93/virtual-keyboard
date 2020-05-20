const createElement = (tag, classNames, child, disabled) => {
  let element = null;
  element = document.createElement(tag);
  if (disabled) element.disabled = disabled;
  if (classNames) element.classList.add(...classNames.split(' '));
  if (child && Array.isArray(child)) {
    child.forEach((childElement) => childElement && element.appendChild(childElement));
  } else if (child && typeof child === 'object') {
    element.appendChild(child);
  } else if (child && typeof child === 'string') {
    element.innerHTML = child;
  }
  return element;
};

export default createElement;
