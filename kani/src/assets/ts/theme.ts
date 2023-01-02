import { reactive } from "vue";

const state = reactive({
  theme: "dark",
});

const root = document.querySelector(":root");

const setTheme = (theme: "light" | "dark") => {
  state.theme = theme;
  if (root) {
    if (theme === "light") {
      root.classList.remove("dark-mode");
      root.classList.add("light-mode");
    } else {
      root.classList.remove("light-mode");
      root.classList.add("dark-mode");
    }
  }
};

const toggleTheme = () => {
  const theme = state.theme === "light" ? "dark" : "light";
  setTheme(theme);
};

export default state;
export { setTheme, toggleTheme };
