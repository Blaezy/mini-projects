const questions = document.querySelectorAll(".questions");

questions.forEach((question) => {
  const icon = question.querySelector(".drop-down-icon");
  const answer = question.querySelector(".answer");

  question.addEventListener("click", () => {
    const isActive = icon.classList.contains("active");

    if (isActive) {
      icon.classList.remove("active");
      answer.style.maxHeight = "0px";
    } else {
      icon.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
