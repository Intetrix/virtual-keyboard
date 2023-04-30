import { arrayOfKeys } from "./keysArray.js";

export class KeyStroke {
  constructor() {
    const textarea = document.querySelector(".textarea");
    document.addEventListener("keydown", (event) => {
      arrayOfKeys.forEach((el) => {
        if (event.code === el.code) {
          document.getElementById(`${event.code}`).classList.add("active");
          if (
            event.code === "ArrowUp" ||
            event.code === "ArrowLeft" ||
            event.code === "ArrowRight" ||
            event.code === "ArrowDown"
          ) {
            textarea.value += el.text;
          }
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
