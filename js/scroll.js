const getScrollValue = () => {
  const el = document.scrollingElement || document.documentElement;
  return el.scrollTop;
};

let scrollTimeout;
let willBeVisible = false;
let isVisible = false;
let triggerAnchorPos = IS_MOBILE()
  ? TRIGGER_SCROLL_MOBILE_PX
  : TRIGGER_SCROLL_DESKTOP_PX;

const arrow = document.getElementById("up-arrow");

const scrollCallback = () => {
  const scrollTop = getScrollValue();
  const scrollTriggered = scrollTop > triggerAnchorPos;
  if (scrollTimeout && willBeVisible !== scrollTriggered) {
    clearTimeout(scrollTimeout);
    scrollTimeout = null;
  }
  if (
    ((scrollTriggered && !isVisible) || (!scrollTriggered && isVisible)) &&
    !scrollTimeout
  ) {
    willBeVisible = scrollTriggered;
    scrollTimeout = debouncedHandler(
      () => {
        Velocity(
          arrow,
          {
            right: scrollTriggered
              ? UP_ARROW_VISIBLE_RIGHT_PX
              : UP_ARROW_HIDDEN_RIGHT_PX,
          },
          {
            duration: BUTTON_ANIM_DURATION_MS,
            easing: "ease-in-out",
          }
        );
        isVisible = willBeVisible;
        willBeVisible = false;
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
  triggerAnchorPos = IS_MOBILE()
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
