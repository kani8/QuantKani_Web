const toggleButton = document.querySelector(".toggle-mode") as HTMLElement;
const root = document.querySelector(":root") as HTMLElement;

const toggle = () => {
  if (root.classList.contains("light-mode")) {
    root.classList.remove("light-mode");
    root.classList.add("dark-mode");
  } else {
    root.classList.remove("dark-mode");
    root.classList.add("light-mode");
  }
};

window.onload = () => {
  toggleButton.addEventListener("click", toggle);
};

export default toggle;

// import { ref } from "vue";

// const toggleButton = document.querySelector(".toggle-mode") as HTMLElement;
// const root = document.querySelector(":root") as HTMLElement;

// function toggle() {
//   if (root.classList.contains("light-mode")) {
//     root.classList.remove("light-mode");
//     root.classList.add("dark-mode");
//   } else {
//     root.classList.remove("dark-mode");
//     root.classList.add("light-mode");
//   }
// }

// toggleButton.addEventListener("click", toggle);

// export default {
//   toggle,
// };

// (() => {
//     const toggleButton = document.querySelector(".toggle-mode") as HTMLElement;
//     const root = document.querySelector(":root") as HTMLElement;

//     const toggle = () => {
//     if (root.classList.contains("light-mode")) {
//     root.classList.remove("light-mode");
//     root.classList.add("dark-mode");
//     } else {
//     root.classList.remove("dark-mode");
//     root.classList.add("light-mode");
//     }
//     };

//     window.onload = () => {
//     toggleButton.addEventListener("click", toggle);
//     };
//     })();

// declare module "../src/assets/ts/theme";

// const toggleButton = document.querySelector(".toggle-mode") as HTMLElement;
// const root = document.querySelector(":root") as HTMLElement;

// toggleButton.addEventListener("click", () => {
//   if (root.classList.contains("light-mode")) {
//     root.classList.remove("light-mode");
//     root.classList.add("dark-mode");
//   } else {
//     root.classList.remove("dark-mode");
//     root.classList.add("light-mode");
//   }
// });
