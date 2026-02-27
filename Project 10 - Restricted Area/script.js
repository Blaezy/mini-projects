const mainAreaElement = document.querySelector(".main-area");
const textareaElement = document.querySelector(".input-area");
const button = document.querySelector(".js-button");
const updateText = document.querySelector(".text-limit");

textareaElement.addEventListener("input", () => {
  let word = textareaElement.value.length;
  updateText.innerHTML = `${word}/250`;
  if (word >= 250) {
    textareaElement.style.borderColor = "red";
    textareaElement.style.color = "red";
    updateText.style.color = "red";
  } else {
    textareaElement.style.borderColor = "black";
    textareaElement.style.color = "black";
    updateText.style.color = "black";
  }
});
button.addEventListener("click", () => {
  textareaElement.value = "";
  textareaElement.style.borderColor = "black";
  textareaElement.style.color = "black";
  updateText.style.color = "black";
  updateText.innerHTML = `0/250`;
});
