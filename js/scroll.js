const ANIM_DURATION_MS = 50;
const DEBOUNCE_DELAY_MS = 350;

const getBodyScrollTop = () => {
  const el = document.scrollingElement || document.documentElement;
  return el.scrollTop;
};

let scroll_timeout;
let will_change_visiblity = false;
let TRIGGER_ANCHOR_PX = document.body.offsetWidth < 1280 ? 800 : 100;

const arrow = document.getElementById("up-arrow");

const scroll_callback = () => {
  if (will_change_visiblity) {
    return;
  }
  if (scroll_timeout) {
    clearTimeout(scroll_timeout);
  }
  const scroll_top = getBodyScrollTop();
  const opacity = Number(arrow.style.opacity);
  if (
    (scroll_top > TRIGGER_ANCHOR_PX && opacity === 0) ||
    (scroll_top < TRIGGER_ANCHOR_PX && opacity === 1)
  ) {
    will_change_visiblity = true;
  }
  if (will_change_visiblity) {
    scroll_timeout = setTimeout(() => {
      Velocity(
        arrow,
        {
          opacity: scroll_top > TRIGGER_ANCHOR_PX ? 1 : 0,
        },
        {
          duration: ANIM_DURATION_MS,
        }
      );
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
  setTimeout(
    () => (TRIGGER_ANCHOR_PX = document.body.offsetWidth < 1280 ? 800 : 100),
    DEBOUNCE_DELAY_MS
  );
});

arrow.addEventListener("click", () => {
  Velocity(document.body, {
    scrollTop: 0,
  });
});
