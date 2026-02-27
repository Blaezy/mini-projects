const inputDate = document.querySelector(".age-finder-input");
const button = document.querySelector(".age-finder-button");

const { DateTime, Interval } = luxon;

button.addEventListener("click", () => {
  const birthDate = DateTime.fromISO(inputDate.value);
  const currentDate = DateTime.now();

  const diff = currentDate.diff(birthDate, ["years", "months", "days"]).toObject();

  const year = Math.floor(diff.years); // full years
  const month = Math.floor(diff.months); // remaining months
  const day = Math.floor(diff.days); // remaining days

  const resultHTML = document.querySelector(".age-result");

  if (inputDate.value === currentDate.toISODate()) {
    resultHTML.innerHTML = `Born today? Come back tomorrow! 😄`;
  } else if (!inputDate.value) {
    resultHTML.innerHTML = `<span class="error">Enter the date first</span>`;
  } else if (year < 0 || month < 0 || day < 0) {
    resultHTML.innerHTML = `<span class="error">Date can't be in future</span>`;
  } else {
    let ageParts = [];

    if (year > 0) ageParts.push(`${year} year${year > 1 ? "s" : ""}`);
    if (month > 0) ageParts.push(`${month} month${month > 1 ? "s" : ""}`);
    if (day > 0) ageParts.push(`${day} day${day > 1 ? "s" : ""}`);

    resultHTML.innerHTML = `You are <span class="bold-text">${ageParts.join(" ")}</span> old`;
  }
});
