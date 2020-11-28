$(document).ready(function () {
  $(".notify-toggle").on("click", function (e) {
    e.preventDefault();
    if (!$(this).hasClass("active")) {
      $(this).stop().addClass("active");
    } else {
      $(this).stop().removeClass("active");
    }
  });
});
