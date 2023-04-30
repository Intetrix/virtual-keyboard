export class CreateElement {
  constructor({ type, className, text, append, code }) {
    const element = document.createElement(type);
    element.classList.add(...className);
    element.textContent = text;
    element.setAttribute("id", code);
    append.appendChild(element);
    this.element = element;
  }
}
