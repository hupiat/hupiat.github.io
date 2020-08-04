const STORAGE_NAME = "c-picker";

const COLORS_MAP = {
  midnight: "#2c3e50",
  green: "#013d3d",
  purple: "#2f2449",
  blue: "#1e3758",
  red: "#3d130e",
};

const nav = document.getElementById("nav");

const setNavColor = (color) => {
  nav.style.backgroundColor = COLORS_MAP[color];
  localStorage.setItem(STORAGE_NAME, color);
};

const colorSaved = localStorage.getItem(STORAGE_NAME);
if (colorSaved) {
  setNavColor(colorSaved);
}

const pickers = document.getElementsByClassName("c-picker");
for (const picker of pickers) {
  const colors = picker.className.split(" ");
  for (const maybeColor of colors) {
    if (Object.keys(COLORS_MAP).some((c) => c === maybeColor.trim())) {
      picker.addEventListener("click", () => setNavColor(maybeColor));
      break;
    }
  }
}
