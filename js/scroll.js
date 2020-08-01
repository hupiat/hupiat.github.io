const ANIM_DURATION_MS = 100;
const DEBOUNCE_DELAY_MS = 350;
const MAX_WIDTH_MOBILE_PX = 1280;
const TRIGGER_SCROLL_MOBILE_PX = 800;
const TRIGGER_SCROLL_DESKTOP_PX = 100;
const UP_ARROW_VISIBLE_RIGHT_PX = 50;
const UP_ARROW_HIDDEN_RIGHT_PX = -150;

const getBodyScrollTop = () => {
  const el = document.scrollingElement || document.documentElement;
  return el.scrollTop;
};

let scroll_timeout;
let will_change_visiblity = false;
let is_visible = false;
let TRIGGER_ANCHOR_PX =
  document.body.offsetWidth < MAX_WIDTH_MOBILE_PX
    ? TRIGGER_SCROLL_MOBILE_PX
    : TRIGGER_SCROLL_DESKTOP_PX;

const arrow = document.getElementById("up-arrow");

const scroll_callback = () => {
  if (will_change_visiblity) {
    return;
  }
  if (scroll_timeout) {
    clearTimeout(scroll_timeout);
  }
  const scroll_top = getBodyScrollTop();
  if (
    (scroll_top > TRIGGER_ANCHOR_PX && !is_visible) ||
    (scroll_top < TRIGGER_ANCHOR_PX && is_visible)
  ) {
    will_change_visiblity = true;
  }
  if (will_change_visiblity) {
    scroll_timeout = setTimeout(() => {
      Velocity(
        arrow,
        {
          right:
            scroll_top > TRIGGER_ANCHOR_PX
              ? UP_ARROW_VISIBLE_RIGHT_PX
              : UP_ARROW_HIDDEN_RIGHT_PX,
        },
        {
          duration: ANIM_DURATION_MS,
        }
      );
      is_visible = scroll_top > TRIGGER_ANCHOR_PX;
      will_change_visiblity = false;
    }, DEBOUNCE_DELAY_MS);
  }
};

document.getElementById("main").addEventListener("scroll", scroll_callback);
document.addEventListener("scroll", scroll_callback);

let resize_timeout;
window.addEventListener("resize", () => {
  if (resize_timeout) {
    clearTimeout(resize_timeout);
  }
  setTimeout(() => {
    TRIGGER_ANCHOR_PX =
      document.body.offsetWidth < MAX_WIDTH_MOBILE_PX
        ? TRIGGER_SCROLL_MOBILE_PX
        : TRIGGER_SCROLL_DESKTOP_PX;
    scroll_callback();
  }, DEBOUNCE_DELAY_MS);
});

arrow.addEventListener("click", () => {
  Velocity(document.body, {
    scrollTop: 0,
  });
});
