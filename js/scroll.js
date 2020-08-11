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
    ((shouldBeVisible && willBeHidden) || (shouldBeHidden && willBeVisible)) &&
    scrollTimeout
  ) {
    clearTimeout(scrollTimeout);
    scrollTimeout = null;
  }
  willBeVisible = shouldBeVisible;
  willBeHidden = shouldBeHidden;
  if ((willBeVisible || willBeHidden) && !scrollTimeout) {
    debouncedHandler(
      () => {
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
      },
      undefined,
      scrollTimeout,
      false
    );
  }
};

document.getElementById("main").addEventListener("scroll", scrollCallback);
document.addEventListener("scroll", scrollCallback);

resizeHandler(() => {
  triggerAnchorPos = IS_MOBILE
    ? TRIGGER_SCROLL_MOBILE_PX
    : TRIGGER_SCROLL_DESKTOP_PX;
  scrollCallback();
});

arrow.addEventListener("click", () => {
  const mobileHandler = mobiles(arrow);
  mobileHandler.restoreFocus();
  Velocity(
    document.body,
    {
      scrollTop: 0,
    },
    {
      easing: "ease-in-out",
      duration: getScrollValue() / 3,
    }
  ).then(mobileHandler.freezeFocus);
});
