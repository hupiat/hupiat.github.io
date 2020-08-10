const BUTTON_ANIM_DURATION_MS = 150;
const DEBOUNCE_DELAY_MS = 300;
const MAX_WIDTH_MOBILE_PX = 1280;
const TRIGGER_SCROLL_MOBILE_PX = 800;
const TRIGGER_SCROLL_DESKTOP_PX = 100;
const UP_ARROW_VISIBLE_RIGHT_PX = 50;
const UP_ARROW_HIDDEN_RIGHT_PX = -100;

const getScrollValue = () => {
  const el = document.scrollingElement || document.documentElement;
  return el.scrollTop;
};

let scrollTimeout;
let willBeVisible = false;
let willBeHidden = false;
let isVisible = false;
let triggerAnchorPos =
  document.body.offsetWidth < MAX_WIDTH_MOBILE_PX
    ? TRIGGER_SCROLL_MOBILE_PX
    : TRIGGER_SCROLL_DESKTOP_PX;

const arrow = document.getElementById("up-arrow");

const scrollCallback = () => {
  const scrollTop = getScrollValue();
  const shouldBeVisible = scrollTop > triggerAnchorPos && !isVisible;
  const shouldBeHidden = scrollTop < triggerAnchorPos && isVisible;
  if (
    (shouldBeVisible && willBeHidden) ||
    (shouldBeHidden && willBeVisible && scrollTimeout)
  ) {
    clearTimeout(scrollTimeout);
    scrollTimeout = null;
  }
  willBeVisible = shouldBeVisible;
  willBeHidden = shouldBeHidden;
  if ((willBeVisible || willBeHidden) && !scrollTimeout) {
    scrollTimeout = setTimeout(() => {
      Velocity(
        arrow,
        {
          right:
            scrollTop > triggerAnchorPos
              ? UP_ARROW_VISIBLE_RIGHT_PX
              : UP_ARROW_HIDDEN_RIGHT_PX,
        },
        {
          duration: BUTTON_ANIM_DURATION_MS,
          easing: "ease-in-out",
        }
      );
      isVisible = scrollTop > triggerAnchorPos;
      willBeVisible = false;
      willBeHidden = false;
      scrollTimeout = null;
    }, DEBOUNCE_DELAY_MS);
  }
};

document.getElementById("main").addEventListener("scroll", scrollCallback);
document.addEventListener("scroll", scrollCallback);

let resizeTimeout;
window.addEventListener("resize", () => {
  if (resizeTimeout) {
    clearTimeout(resizeTimeout);
  }
  resizeTimeout = setTimeout(() => {
    triggerAnchorPos =
      document.body.offsetWidth < MAX_WIDTH_MOBILE_PX
        ? TRIGGER_SCROLL_MOBILE_PX
        : TRIGGER_SCROLL_DESKTOP_PX;
    scrollCallback();
    resizeTimeout = null;
  }, DEBOUNCE_DELAY_MS);
});

arrow.addEventListener("click", () => {
  Velocity(
    document.body,
    {
      scrollTop: 0,
    },
    {
      easing: "ease-in-out",
      duration: getScrollValue(),
    }
  );
});
