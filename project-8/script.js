const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;

    tabs.forEach((tab) => {
      tab.classList.remove("active-tab");
    });
    contents.forEach((content) => {
      content.classList.remove("active-content");
    });

    tab.classList.add("active-tab");
    document.querySelector(`.${target}-content`).classList.add("active-content");
  });
});

tabs[0].classList.add("active-tab");
contents[0].classList.add("active-content");
