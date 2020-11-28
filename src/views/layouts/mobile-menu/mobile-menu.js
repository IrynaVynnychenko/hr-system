document.addEventListener("DOMContentLoaded", () => {
  let navbar = document.querySelector("#menuToggle input[type='checkbox']");
  let overlay = document.querySelector(".collapse-overlay");
  let mobileItem = document.querySelector(".mobile");
  navbar.addEventListener("click", function () {
    overlay.classList.toggle("show");
    mobileItem.classList.toggle("show");
  });
});
