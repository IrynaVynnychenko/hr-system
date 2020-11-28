$(document).ready(function () {
  if (screen.width > 991) {
    $(".actions-slider").addClass("owl-carousel owl-theme");
    $(".actions-slider").owlCarousel({
      margin: 30,
      items: 3,
      nav: true,
      dots: false,
      responsive: {
        992: {
          items: 2,
        },
        1200: {
          items: 3,
        },
      },
      navText: [
        "<svg width='6' height='10' viewBox='0 0 6 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5 1C4.68 1.32 2.2 3.8 1 5L5 9' stroke='#828282' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>",
        "<svg width='6' height='10' viewBox='0 0 6 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1C1.32 1.32 3.8 3.8 5 5L1 9' stroke='#828282' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>",
      ],
    });
  }
});
