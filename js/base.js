const BUTTON_ANIM_DURATION_MS = 150;
const DEBOUNCE_DELAY_MS = 300;
const MAX_WIDTH_MOBILE_PX = 1280;
const TRIGGER_SCROLL_MOBILE_PX = 500;
const TRIGGER_SCROLL_DESKTOP_PX = 100;
const UP_ARROW_VISIBLE_RIGHT_PX = 50;
const UP_ARROW_HIDDEN_RIGHT_PX = -100;
const IS_MOBILE = () => document.body.offsetWidth < MAX_WIDTH_MOBILE_PX;

const debouncedHandler = (
  callback = () => {},
  delay = DEBOUNCE_DELAY_MS,
  timeout = null,
  refresh = true
) => {
  if (timeout && refresh) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => {
    callback();
    timeout = null;
  }, delay);
  return timeout;
};

const resizeHandler = (callback = () => {}) => {
  window.addEventListener("resize", () => {
    debouncedHandler(callback);
  });
};

// Custom extensions needed for mobile browsers behaviours

const mobiles = (element) => {
  const freezeFocus = () =>
    setTimeout(() => {
      if (IS_MOBILE() && !element.classList.contains("no-hover")) {
        element.blur();
        element.classList.add("no-hover");
      }
    }, 1);
  const restoreFocus = () =>
    setTimeout(() => {
      if (element.classList.contains("no-hover")) {
        element.classList.remove("no-hover");
      }
    }, 1);
  resizeHandler(() => {
    if (!IS_MOBILE()) {
      restoreFocus();
    }
  });
  return {
    freezeFocus,
    restoreFocus,
  };
};
