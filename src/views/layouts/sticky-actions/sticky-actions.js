document.addEventListener("DOMContentLoaded", () => {
  const STICKY_HEIGHT = 92;
  function onScroll() {
    var sections = document.querySelectorAll(".sticky-link");
    var scrollPos =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    console.log(`scrollPos ${scrollPos}`);
    sections.forEach((section) => {
      var currLink = section;
      var val = currLink.getAttribute("href");
      var refElement = document.querySelector(val);
      var refElementRect = refElement.getBoundingClientRect();
      if (
        refElementRect.top < STICKY_HEIGHT &&
        refElementRect.top > STICKY_HEIGHT - refElementRect.height
      ) {
        currLink.classList.add("active");
      } else {
        currLink.classList.remove("active");
      }
    });
  }

  onScroll();

  window.addEventListener("scroll", function () {
    onScroll();
  });
});
