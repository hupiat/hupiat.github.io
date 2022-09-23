const getScrollValue = () => {
  const el = document.scrollingElement || document.documentElement;
  return el.scrollTop;
};

const getTriggerAnchorPos = () =>
  IS_MOBILE() ? TRIGGER_SCROLL_MOBILE_PX : TRIGGER_SCROLL_DESKTOP_PX;

let scrollTimeout;
let willBeVisible = false;
let isVisible = false;

const arrow = document.getElementById("up-arrow");

const scrollCallback = () => {
  const scrollTop = getScrollValue();
  const scrollTriggered = scrollTop > getTriggerAnchorPos();
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

const mobileHandler = mobiles(arrow);
arrow.addEventListener("click", () => {
  mobileHandler.restoreFocus();
  Velocity(
    document.body,
    {
      scrollTop: 0,
    },
    {
      easing: "ease-in-out",
      duration: IS_MOBILE() ? 600 : 300,
    }
  ).then(mobileHandler.freezeFocus);
});
