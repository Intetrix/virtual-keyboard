let iventWhich = [
  27, 192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69,
  82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 20, 65, 83, 68, 70, 71, 72, 74, 75,
  76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16, 17,
  91, 18, 32, 18, 37, 40, 39, 17,
];

const keyboardSection = document.createElement("section");
keyboardSection.className = "keyboard-app";
document.body.appendChild(keyboardSection);

const description = document.createElement("div");
description.className = "description";
keyboardSection.appendChild(description);

const descriptionItem = document.createElement("span");
descriptionItem.className = "description__item1";
let text1 = document.createTextNode(
  "Клавиатура создана в операционной системе Windows."
);
descriptionItem.appendChild(text1);
description.appendChild(descriptionItem);

const descriptionItem2 = document.createElement("span");
descriptionItem2.className = "description__item2";
let text2 = document.createTextNode(
  "Для переключения языка используйте комбинацию Ctrl + Alt."
);
descriptionItem2.appendChild(text2);
description.appendChild(descriptionItem2);

const textarea = document.createElement("textarea");
textarea.className = "textarea";
keyboardSection.appendChild(textarea);

const keyboard = document.createElement("div");
keyboard.className = "keyboard";
keyboardSection.appendChild(keyboard);
