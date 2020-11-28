document.addEventListener("DOMContentLoaded", () => {
  let activeMenuItems = document.querySelectorAll(
    ".content-system-section__switch li a"
  );

  activeMenuItems.forEach((e) => {
    let itemVacancy = document.querySelector(".main-menu__item-vacancies");
    itemVacancy.classList.toggle("active");

    let link = e.href;
    let activeElement = e.closest("li");
    if (window.location.href === link) {
      activeElement.classList.toggle("active");
    }
  });
});
