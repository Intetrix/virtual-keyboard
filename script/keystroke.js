import { arrayOfKeys } from "./keysArray.js";

export class KeyStroke {
  constructor() {
    document.addEventListener("keydown", (event) => {
      arrayOfKeys.forEach((el) => {
        if (event.code === el.code) {
          document.getElementById(`${event.code}`).classList.add("active");
        }
      });
    });

    document.addEventListener("keyup", (event) => {
      arrayOfKeys.forEach((el) => {
        if (event.code === el.code) {
          document.getElementById(`${event.code}`).classList.remove("active");
        }
      });
    });
  }
}
