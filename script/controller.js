import { arrayOfKeys } from './keysArray.js';

export class MouseClick {
  constructor() {
    const keys = document.querySelectorAll('.keys');
    const textarea = document.querySelector('.textarea');
    /*arrayOfKeys.forEach((obj) => {
      keys.forEach((el) => {
        if (obj.code === el.id);
        el.onclick = (event) => {
            textarea.value += event.target.textContent;
        }
      });
    });*/
    arrayOfKeys.forEach((obj) => {
      keys.forEach((el) => {
        if (el.id === obj.code && (obj.type === 'letter' || obj.type === 'number' || obj.type === 'arrow')) {
          el.addEventListener('click', (event) => {
            textarea.value += obj.text;
          });
        } else if (el.id === obj.code && (obj.type === 'tab')) {
          el.addEventListener('click', (event) => {
            textarea.value += '    ';
          });
        }
      });
    });
  }
}
