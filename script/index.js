let iventWhich = [
  27, 192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69,
  82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 20, 65, 83, 68, 70, 71, 72, 74, 75,
  76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16, 17,
  91, 18, 32, 18, 37, 40, 39, 17,
];

function createElement({ type, className, text, append }) {
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
