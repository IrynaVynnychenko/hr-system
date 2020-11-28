document.addEventListener("DOMContentLoaded", () => {
  let importBtn = document.querySelector(".dflt-bttn__import");
  let importBlock = document.querySelector(".dflt-bttn_action-block");

  if (importBtn && importBlock) {
    importBtn.addEventListener("click", () => {
      importBlock.classList.toggle("active");
    });
  }
});
