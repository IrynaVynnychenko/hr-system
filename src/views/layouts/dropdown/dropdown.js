document.addEventListener("DOMContentLoaded", () => {
  // selectContainer.querySelector("." + titleClass).innerHTML = t.innerHTML;
  // elem.options.selectedIndex = t.getAttribute("data-index");

  // function generateOptions(options) {
  //   for (var i = 0; i < options.length; i++) {
  //     var li = document.createElement("li");
  //     var span = document.createElement("span");
  //     span.style.background = options[i].dataset.color;

  //     li.innerHTML = options[i].textContent;
  //     li.appendChild(span);
  //     li.setAttribute("data-value", options[i].value);
  //     li.setAttribute("data-index", index++);

  //     if (
  //       selectOptions[elem.selectedIndex].textContent === options[i].textContent
  //     ) {
  //       li.classList.add(selectedClass);
  //       var spanForButton = document.createElement("span");
  //       spanForButton.style.background = selectOptions[0].dataset.color;

  //       button.innerHTML = options[i].textContent;
  //       button.appendChild(spanForButton);
  //     }

  //     ul.appendChild(li);
  //   }
  // }

  Vue.component("vue-multiselect", window.VueMultiselect.default);
  new Vue({
    el: "#selectVue",
    data: {
      value: null,
      options: [
        "ООО Рога и Копыта №1",
        "ООО Рога и Копыта №2",
        "ООО Рога и Копыта №3",
        "ООО Рога и Копыта №4",
      ],
    },
  });
});
