document.addEventListener("DOMContentLoaded", () => {
  const addResumeBtns = document.querySelectorAll(".btn-primary__addResume");

  const arrayOfAddingClasses = [];

  addResumeBtns.forEach((btn) => {
    const { addclass } = btn.dataset;

    console.log(btn.dataset);

    if (addclass) {
      arrayOfAddingClasses.push(addclass);
    }
  });

  addResumeBtns.forEach((btn) => {
    const wrapper = btn.closest(".modal-dialog");
    if (wrapper) {
      btn.addEventListener("click", () => {
        arrayOfAddingClasses.forEach((item) => {
          wrapper.classList.remove(item);
        });
        wrapper.classList.add(btn.dataset.addclass);
      });
    }
  });
});
