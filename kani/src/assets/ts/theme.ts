const toggleButton = document.querySelector(".btn");
const root = document.querySelector(":root");

const toggle = () => {
  if (root) {
    if (root.classList.contains("light-mode")) {
      root.classList.remove("light-mode");
      root.classList.add("dark-mode");
    } else {
      root.classList.remove("dark-mode");
      root.classList.add("light-mode");
    }
  }
};

if (toggleButton) {
  toggleButton.addEventListener("click", toggle);
}

export default toggle;
