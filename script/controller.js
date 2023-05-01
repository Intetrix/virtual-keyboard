import { arrayOfKeys } from './keysArray.js';

export class MouseClick {
  constructor() {
    const keys = document.querySelectorAll('.keys');
    const textarea = document.querySelector('.textarea');
    arrayOfKeys.forEach((el1) => {
      keys.forEach((el) => {
        if (el1.code === el.id);
        el.addEventListener('click', (event) => {
          if (el1.type === 'letter' || el1.type === 'number') {
            console.log(el);
            textarea.value += event.target.innerHTML;
          }
        });
      });
    });
  }
}
