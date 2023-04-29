export class CreateElement {
  constructor({ type, className = [], text, append }) {
    const element = document.createElement(type);
    element.classList.add(className);
    element.textContent = text;
    append.appendChild(element);
    this.element = element;
  }
}
