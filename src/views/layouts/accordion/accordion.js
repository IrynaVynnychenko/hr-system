$(document).ready(function () {
  $(".test-slider").addClass("owl-carousel owl-theme");
  $(".test-slider").owlCarousel({
    margin: 18,
    items: 4,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      364: {
        items: 2,
        margin: 10,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
    navText: [
      "<svg width='6' height='10' viewBox='0 0 6 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5 1C4.68 1.32 2.2 3.8 1 5L5 9' stroke='#828282' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>",
      "<svg width='6' height='10' viewBox='0 0 6 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1C1.32 1.32 3.8 3.8 5 5L1 9' stroke='#828282' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>",
    ],
  });
});
