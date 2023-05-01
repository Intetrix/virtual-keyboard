import { CreateElement } from './createElement.js';
import { arrayOfKeys } from './keysArray.js';

export class RenderElement {
  constructor() {
    this.render();
  }

  render() {
    const keyboardSection = new CreateElement({
      type: 'section',
      className: ['keyboard-app'],
      text: null,
      append: document.body,
    });

    const description = new CreateElement({
      type: 'div',
      className: ['description'],
      text: null,
      append: keyboardSection.element,
    });

    new CreateElement({
      type: 'span',
      className: ['description__item'],
      text: 'Клавиатура создана в операционной системе Windows.',
      append: description.element,
    });

    new CreateElement({
      type: 'span',
      className: ['description__item'],
      text: 'Для переключения языка используйте комбинацию Ctrl + Alt.',
      append: description.element,
    });

    new CreateElement({
      type: 'textarea',
      className: ['textarea'],
      text: null,
      append: keyboardSection.element,
    });

    document.querySelector('.textarea').focus();

    const keyboard = new CreateElement({
      type: 'div',
      className: ['keyboard'],
      text: null,
      append: keyboardSection.element,
    });

    for (let i = 0; i < arrayOfKeys.length; i++) {
      new CreateElement({
        type: 'div',
        className: arrayOfKeys[i].className.split(', '),
        text: arrayOfKeys[i].text,
        code: arrayOfKeys[i].code,
        append: keyboard.element,
      });
    }
  }
}
