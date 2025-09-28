$(document).ready(function () {
  $(".dflt-select__bttn").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (!$(this).parent().hasClass("active")) {
      $(this).stop().parent().addClass("active");
    } else {
      $(this).stop().parent().removeClass("active");
    }
  });

  $(".dflt-input_numeric").inputmask("decimal", {
    rightAlign: false,
    placeholder: "",
    groupSeparator: " ",
  });

  $(".dflt-input_phone").inputmask("+8 (999) 999-99-99");

  $(".dflt-input_code").inputmask("999999", {
    placeholder: "",
  });

  $('.dflt-password__toggle input[type="checkbox"]').removeAttr("checked");

  $(".dflt-password__toggle label").click(function () {
    if (!$(this).siblings('input[type="checkbox"]').is(":checked")) {
      $(this).parent().siblings(".dflt-input_password").attr("type", "text");
    } else {
      $(this)
        .parent()
        .siblings(".dflt-input_password")
        .attr("type", "password");
    }
  });
  $(".scrolling__link").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr("href");
    var targetElement = $(id);
    
    if (targetElement.length > 0) {
      var top = targetElement.offset().top;
      $("body,html").animate({ scrollTop: top }, 1000);
    }
  });

  var clicked = false,
    base = 0,
    base_scroll = 0;
  $(".test-item").on({
    mousemove: function (e) {
      clicked &&
        function (xAxis) {
          var _this = $(this);
          $(".test-row").scrollLeft(base_scroll + base - xAxis);
        }.call($(this), e.pageX);
    },
    mousedown: function (e) {
      clicked = true;
      base = e.pageX;
      base_scroll = $(".test-row").scrollLeft();
    },
    mouseup: function (e) {
      clicked = false;
    },
  });
});

document.addEventListener("DOMContentLoaded", () => {
  var x, i, j, selElmnt, a, b, c;
  x = document.getElementsByClassName("form-select");

  for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    a = document.createElement("DIV");
    a.setAttribute("class", "form-select__current");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    b = document.createElement("DIV");
    b.setAttribute("class", "form-select__items form-select__items_hide");
    for (j = 0; j < selElmnt.length; j++) {
      c = document.createElement("DIV");
      c.setAttribute("class", "form-select__items-single");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function (e) {
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName(
              "form-select__items-selected"
            );
            for (k = 0; k < y.length; k++) {
              y[k].classList.remove("form-select__items-selected");
            }
            this.classList.add("form-select__items-selected");
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    x[i]
      .getElementsByClassName("form-select__items-single")
      [selElmnt.selectedIndex].classList.add("form-select__items-selected");
    a.addEventListener("click", function (e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("form-select__items_hide");
    });
  }

  function closeAllSelect(elmnt) {
    var x,
      y,
      i,
      arrNo = [];
    x = document.getElementsByClassName("form-select__items");
    y = document.getElementsByClassName("form-select__current");
    for (i = 0; i < y.length; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i);
      }
    }
    for (i = 0; i < x.length; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("form-select__items_hide");
      }
    }
  }

  document.addEventListener("click", closeAllSelect);

  if (document.querySelector("#example-1")) {
    var example1 = new Vue({
      el: "#example-1",
      data: {
        items: [
          {
            letter: "Р",
            name: "Руководитель отдела продаж",
            candidates: "102",
            resumes: "10",
          },
          {
            letter: "М",
            name: "Менеджер по продажам",
            candidates: "102",
            resumes: "10",
          },
          {
            letter: "П",
            name: "Повар",
            candidates: "102",
            resumes: "10",
          },
          {
            letter: "О",
            name: "Официант",
            candidates: "102",
            resumes: "10",
          },
          {
            letter: "Р",
            name: "Руководитель отдела продаж",
            candidates: "102",
            resumes: "10",
          },
          {
            letter: "М",
            name: "Менеджер по продажам",
            candidates: "102",
            resumes: "10",
          },
          {
            letter: "П",
            name: "Повар",
            candidates: "102",
            resumes: "10",
          },
          {
            letter: "О",
            name: "Официант",
            candidates: "102",
            resumes: "10",
          },
        ],
      },
      methods: {
        doMath: function () {
          if (index > 5) {
            return index + 1 - 5;
          } else {
            return index + 1;
          }
        },
      },
    });
  }
});
