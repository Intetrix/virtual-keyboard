import { arrayOfKeys } from "./keysArray.js";

export class KeyStroke {
  constructor() {
    this.keydownListener();
    this.keyupListener();
    this.specialFeatures();
  }

  keydownListener() {
    document.addEventListener("keydown", (event) => {
      arrayOfKeys.forEach((el) => {
        if (event.code === el.code) {
          document.getElementById(`${event.code}`).classList.add("active");
        }
      });
    });
  }

  keyupListener() {
    document.addEventListener("keyup", (event) => {
      arrayOfKeys.forEach((el) => {
        if (event.code === el.code) {
          document.getElementById(`${event.code}`).classList.remove("active");
        }
      });
    });
  }

  specialFeatures() {
    const textarea = document.querySelector(".textarea");
    document.addEventListener("keydown", (event) => {
      arrayOfKeys.forEach((el) => {
        if (event.code === el.code) {
          if (
            event.code === "ArrowUp" ||
            event.code === "ArrowLeft" ||
            event.code === "ArrowRight" ||
            event.code === "ArrowDown"
          ) {
            textarea.value += el.text;
          } else if (event.code === "Tab") {
            event.preventDefault();
            textarea.value += "    ";
          }
        }
      });
    });
  }
}
