const toggleButton = document.querySelector(".btn");
const root = document.querySelector(":root");

toggleButton.addEventListener("click", () => {
  if (root.classList.contains("light-mode")) {
    root.classList.remove("light-mode");
    root.classList.add("dark-mode");
  } else {
    root.classList.remove("dark-mode");
    root.classList.add("light-mode");
  }
});
