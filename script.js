document.querySelectorAll(".js-redirect-button-project").forEach((btn) => {
  btn.addEventListener("click", () => {
    const projectNumber = btn.dataset.project;
    const projectName = btn.dataset.projectName;
    window.open(`Project ${projectNumber} - ${projectName}/index.html`);
  });
});
