document.addEventListener("DOMContentLoaded", () => {
  let titleSelect = document.querySelector(".info-system-bar__title");
  let titleOption = document.querySelector(".info-system-bar__list");

  if (titleSelect && titleOption) {
    titleSelect.addEventListener("click", () => {
      titleOption.classList.toggle("active");
    });
  }
  if (screen.width > 991) {
    var stickyBarHeight = $("#sticky").outerHeight();
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 526 - 78) {
        if (!$(".info-system-bar__toggle-bttn").hasClass("active")) {
          $("#sticky").addClass(
            "info-system-bar_sticky info-system-bar_rolled"
          );
          $(".main").css("padding-top", stickyBarHeight);
        }
      }
      if (scroll < 526 - 78) {
        $("#sticky").removeClass(
          "info-system-bar_sticky info-system-bar_rolled"
        );
        $(".main").css("padding-top", "0");
      }
    });

    var distance = $(window).scrollTop();

    if (distance >= 350) {
      $("#sticky").addClass("info-system-bar_sticky info-system-bar_rolled");
      $(".main").css("padding-top", stickyBarHeight);
    }
  }
  if (screen.width < 992) {
    var stickyBarHeight = $("#sticky").outerHeight();
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 660 - 142) {
        if (!$(".info-system-bar__toggle-bttn").hasClass("active")) {
          $("#sticky").addClass(
            "info-system-bar_sticky info-system-bar_rolled"
          );
          $(".main").css("padding-top", stickyBarHeight);
        }
      }
      if (scroll < 550) {
        $("#sticky").removeClass(
          "info-system-bar_sticky info-system-bar_rolled"
        );
        $(".main").css("padding-top", $(".header").height());
      }
    });

    var distance = $(window).scrollTop();

    if (distance >= 550) {
      $("#sticky").addClass("info-system-bar_sticky info-system-bar_rolled");
      $(".main").css("padding-top", stickyBarHeight);
    }
  }
});
