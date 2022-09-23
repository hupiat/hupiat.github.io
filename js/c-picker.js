const STORAGE_NAME = "c-picker";
const MOBILE_BLUR_DELAY_MS = 200;

const COLORS_MAP = {
  midnight: "#2c3e50",
  green: "#013d3d",
  purple: "#2f2449",
  blue: "#1e3758",
  red: "#3d130e",
};

const nav = document.getElementById("nav");

const colorSaved = localStorage.getItem(STORAGE_NAME);
if (colorSaved) {
  nav.style.backgroundColor = COLORS_MAP[colorSaved];
}

const pickers = document.getElementsByClassName("c-picker");
const colorsNames = Object.keys(COLORS_MAP);
for (const picker of pickers) {
  const maybeColors = picker.className.split(" ");
  for (let maybeColor of maybeColors) {
    maybeColor = maybeColor.trim();
    if (colorsNames.some((c) => c === maybeColor)) {
      const mobileHandler = mobiles(picker);
      picker.addEventListener("click", () => {
        mobileHandler.restoreFocus();
        nav.style.backgroundColor = COLORS_MAP[maybeColor];
        localStorage.setItem(STORAGE_NAME, maybeColor);
        debouncedHandler(mobileHandler.freezeFocus, MOBILE_BLUR_DELAY_MS);
      });
      break;
    }
  }
}
