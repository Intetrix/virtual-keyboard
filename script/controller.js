import { arrayOfKeys } from './keysArray.js';

export class MouseClick {
  constructor() {
    const keys = document.querySelectorAll('.keys');
    const textarea = document.querySelector('.textarea');
    arrayOfKeys.forEach((obj) => {
      keys.forEach((el) => {
        if (el.id === obj.code && (obj.type === 'letter' || obj.type === 'number' || obj.type === 'arrow')) {
          el.addEventListener('click', (event) => {
            textarea.value += obj.text;
          });
        } else if (el.id === obj.code && obj.type === 'tab') {
          el.addEventListener('click', (event) => {
            textarea.value += '    ';
          });
        } else if (el.id === obj.code && obj.type === 'enter') {
          el.addEventListener('click', (event) => {
            textarea.value += `\n`;
          });
        } else if (el.id === obj.code && obj.type === 'backspace') {
          el.addEventListener('click', (event) => {
            let str = textarea.value;
            textarea.value = str.slice(0,- 1);
          });
        }
      });
    });
  }
}
