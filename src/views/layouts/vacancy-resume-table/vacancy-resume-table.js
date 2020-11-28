$(document).ready(function () {
  $(".dflt-select_mouseover").mouseleave(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    }
  });
  $(".resume-table-list-item").click(function (e) {
    e.stopPropagation();
    if (!$(this).hasClass("active")) {
      $(".resume-table-list-item").stop().removeClass("active");
      $(this).stop().addClass("active");
    } else {
      $(this).stop().removeClass("active");
    }
  });
});
