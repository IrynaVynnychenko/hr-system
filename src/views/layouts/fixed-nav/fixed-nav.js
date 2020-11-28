$(document).ready(function () {
  $(".fixed-nav__bar-bttn").on("click", function (e) {
    e.preventDefault();
    if (!$(".fixed-nav").hasClass("active")) {
      $(".fixed-nav").stop().addClass("active");
    } else {
      $(".fixed-nav").stop().removeClass("active");
    }
  });
});
