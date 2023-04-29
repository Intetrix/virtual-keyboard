import { createElement } from "./createElement.js";

const keyboardSection = new createElement({
  type: "section",
  className: "keyboard-app",
  text: null,
  append: document.body,
});

const description = new createElement({
  type: "div",
  className: "description",
  text: null,
  append: keyboardSection.element,
});

const descriptionItem = new createElement({
  type: "span",
  className: "description__item",
  text: "Клавиатура создана в операционной системе Windows.",
  append: description.element,
});

const descriptionItem2 = new createElement({
  type: "span",
  className: "description__item",
  text: "Для переключения языка используйте комбинацию Ctrl + Alt.",
  append: description.element,
});

const textarea = new createElement({
  type: "textarea",
  className: "textarea",
  text: null,
  append: keyboardSection.element,
});

const keyboard = new createElement({
  type: "div",
  className: "keyboard",
  text: null,
  append: keyboardSection.element,
});
