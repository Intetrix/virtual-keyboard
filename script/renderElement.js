import { CreateElement } from "./createElement.js";

export class RenderElement {
  constructor() {
    this.render();
  }

  render() {
    const keyboardSection = new CreateElement({
      type: "section",
      className: "keyboard-app",
      text: null,
      append: document.body,
    });
    const description = new CreateElement({
      type: "div",
      className: "description",
      text: null,
      append: keyboardSection.element,
    });

    const descriptionItem = new CreateElement({
      type: "span",
      className: "description__item",
      text: "Клавиатура создана в операционной системе Windows.",
      append: description.element,
    });

    const descriptionItem2 = new CreateElement({
      type: "span",
      className: "description__item",
      text: "Для переключения языка используйте комбинацию Ctrl + Alt.",
      append: description.element,
    });

    const textarea = new CreateElement({
      type: "textarea",
      className: "textarea",
      text: null,
      append: keyboardSection.element,
    });

    const keyboard = new CreateElement({
      type: "div",
      className: "keyboard",
      text: null,
      append: keyboardSection.element,
    });
  }
}
