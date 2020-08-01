const ANIM_DURATION_MS = 100;
const DEBOUNCE_DELAY_MS = 350;
const MAX_WIDTH_MOBILE_PX = 1280;
const TRIGGER_SCROLL_MOBILE_PX = 800;
const TRIGGER_SCROLL_DESKTOP_PX = 100;
const UP_ARROW_VISIBLE_RIGHT_PX = 50;
const UP_ARROW_HIDDEN_RIGHT_PX = -150;

const getScrollValue = () => {
  const el = document.scrollingElement || document.documentElement;
  return el.scrollTop;
};

let scrollTimeout;
let willChangeVisibility = false;
let isVisible = false;
let triggerAnchorPos =
  document.body.offsetWidth < MAX_WIDTH_MOBILE_PX
    ? TRIGGER_SCROLL_MOBILE_PX
    : TRIGGER_SCROLL_DESKTOP_PX;

const arrow = document.getElementById("up-arrow");

const scrollCallback = () => {
  if (willChangeVisibility) {
    return;
  }
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }
  const scrollTop = getScrollValue();
  if (
    (scrollTop > triggerAnchorPos && !isVisible) ||
    (scrollTop < triggerAnchorPos && isVisible)
  ) {
    willChangeVisibility = true;
  }
  if (willChangeVisibility) {
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
          duration: ANIM_DURATION_MS,
        }
      );
      isVisible = scrollTop > triggerAnchorPos;
      willChangeVisibility = false;
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
  setTimeout(() => {
    triggerAnchorPos =
      document.body.offsetWidth < MAX_WIDTH_MOBILE_PX
        ? TRIGGER_SCROLL_MOBILE_PX
        : TRIGGER_SCROLL_DESKTOP_PX;
    scrollCallback();
  }, DEBOUNCE_DELAY_MS);
});

arrow.addEventListener("click", () => {
  Velocity(document.body, {
    scrollTop: 0,
  });
});
