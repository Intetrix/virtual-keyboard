export function createElement({ type, className, text, append }) {
  const elementType = type;
  const elementClass = className;
  const elementContent = text;
  const elementAppendTo = append;

  const element = document.createElement(elementType);
  element.className = elementClass;
  element.innerText = elementContent;
  document.querySelector(elementAppendTo).appendChild(element);

  return element;
}
