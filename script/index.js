import { createElement } from "./createElement.js";

const keyboardSection = createElement({
  type: "section",
  className: "keyboard-app",
  text: null,
  append: ".body",
});

const description = createElement({
  type: "div",
  className: "description",
  text: null,
  append: ".keyboard-app",
});

const descriptionItem = createElement({
  type: "span",
  className: "description__item",
  text: "Клавиатура создана в операционной системе Windows.",
  append: ".description",
});

const descriptionItem2 = createElement({
  type: "span",
  className: "description__item",
  text: "Для переключения языка используйте комбинацию Ctrl + Alt.",
  append: ".description",
});

const textarea = createElement({
  type: "textarea",
  className: "textarea",
  text: null,
  append: ".keyboard-app",
});

const keyboard = createElement({
  type: "div",
  className: "keyboard",
  text: null,
  append: ".keyboard-app",
});
