togglePassword();
function togglePassword() {
  const eyeButtonElement = document.querySelector(".js-open-eye-button");
  const cnfEyeButtonElement = document.querySelector(".js-cnf-open-eye-button");

  eyeButtonElement.addEventListener("click", () => {
    passwordEye("password-open-eye", "password-close-eye", "input-password");
  });

  cnfEyeButtonElement.addEventListener("click", () => {
    passwordEye("cnf-password-open-eye", "cnf-password-close-eye", "cnf-input-password");
  });
}

function passwordEye(eyeOpenClass, eyeCloseClass, inputClass) {
  const eyeOpen = document.querySelector(`.${eyeOpenClass}`);
  const eyeClose = document.querySelector(`.${eyeCloseClass}`);
  const input = document.querySelector(`.${inputClass}`);

  if (input.type === "password") {
    input.type = "text";
    eyeOpen.style.display = "none";
    eyeClose.style.display = "inline-block";
  } else {
    input.type = "password";
    eyeOpen.style.display = "inline-block";
    eyeClose.style.display = "none";
  }
}

const enterPasswordElement = document.querySelector(".input-password");
const cnfPasswordElement = document.querySelector(".cnf-input-password");
const errorElement = document.querySelector(".error");

function isPasswordMatch() {
  const firstPassword = enterPasswordElement.value.trim();
  const secondPassword = cnfPasswordElement.value.trim();

  if (firstPassword === secondPassword) {
    return true;
  } else {
    return false;
  }
}

const emailInput = document.getElementById("email");
const emailError = document.querySelector(".valid-email");

// info: this is the email format cheker
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function checkEmailFormat() {
  const email = emailInput.value.trim();

  if (!isValidEmail(email)) {
    return false;
  } else {
    return true;
  }
}

function strongPassword() {
  const passwordLenght = enterPasswordElement.value.length;

  if (passwordLenght >= 8) {
    return true;
  } else if (passwordLenght > 0 && passwordLenght < 8) {
    return false;
  }
}

// note: Update button here

const updateButtonElement = document.querySelector(".js-update-button");
const updateProfileCheckItem = document.querySelector(".js-completed-profile");

updateButtonElement.addEventListener("click", () => {
  const firstPassword = enterPasswordElement.value.trim();
  const secondPassword = cnfPasswordElement.value.trim();

  if (firstPassword === "" && secondPassword === "") {
    errorElement.textContent = "Enter the password";
    errorElement.style.opacity = 1;
    enterPasswordElement.style.borderColor = "red";
    cnfPasswordElement.style.borderColor = "red";
  } else if (isPasswordMatch() === true) {
    errorElement.style.opacity = 0;
    enterPasswordElement.style.borderColor = "black";
    cnfPasswordElement.style.borderColor = "black";
  } else if (isPasswordMatch() === false) {
    errorElement.textContent = "Passwords do not match";
    errorElement.style.opacity = 1;
    enterPasswordElement.style.borderColor = "red";
    cnfPasswordElement.style.borderColor = "red";
  }

  if (!strongPassword() && strongPassword() !== undefined) {
    errorElement.textContent = "Password is not strong enough";
    errorElement.style.opacity = 1;
    enterPasswordElement.style.borderColor = "red";
    cnfPasswordElement.style.borderColor = "red";
  }

  //email red alert
  if (checkEmailFormat() === false) {
    emailError.style.opacity = 1;
    emailInput.style.borderColor = "red";
  } else if (checkEmailFormat() === true) {
    emailError.style.opacity = 0;
    emailInput.style.borderColor = "black";
  }

  //checking everything is okey
  if (isPasswordMatch() && strongPassword() && checkEmailFormat()) {
    updateProfileCheckItem.classList.add("completed-line");
  } else {
    updateProfileCheckItem.classList.remove("completed-line");
  }

  progressRingStyle();
});

// here are right side of the profile progress section

const inputFullName = document.getElementById("fullName");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const inputCnfPassword = document.getElementById("cnfPassword");

const nameCheckItem = document.querySelector(".js-completed-name");
const emailCheckItem = document.querySelector(".js-completed-email");
const passwordCheckItem = document.querySelector(".js-completed-strong-password");
const cnfPasswordCheckItem = document.querySelector(".js-completed-confirm-password");

inputFullName.addEventListener("input", () => {
  if (inputFullName.value.trim() !== "") {
    nameCheckItem.classList.add("completed-line");
    progressRingStyle();
  } else {
    nameCheckItem.classList.remove("completed-line");
    progressRingStyle();
  }
});

inputEmail.addEventListener("input", () => {
  if (checkEmailFormat()) {
    emailCheckItem.classList.add("completed-line");
    progressRingStyle();
  } else {
    emailCheckItem.classList.remove("completed-line");
    progressRingStyle();
  }
});

inputPassword.addEventListener("input", () => {
  if (strongPassword()) {
    passwordCheckItem.classList.add("completed-line");
    progressRingStyle();
  } else {
    passwordCheckItem.classList.remove("completed-line");
    progressRingStyle();
  }
});

inputCnfPassword.addEventListener("input", () => {
  if (isPasswordMatch()) {
    cnfPasswordCheckItem.classList.add("completed-line");
    progressRingStyle();
  } else {
    cnfPasswordCheckItem.classList.remove("completed-line");
    progressRingStyle();
  }
});

// here goes  the progress percentage circle

progressRingStyle();
function progressRingStyle() {
  const totalTask = document.querySelectorAll(".completed").length;
  const completedTask = document.querySelectorAll(".completed.completed-line").length;
  const percentageTextElement = document.querySelector(".js-progress-text");

  const progress = (completedTask / totalTask) * 100;
  percentageTextElement.innerHTML = `${progress}%`;
  const circle = document.querySelector(".ring-progress");
  const radius = 62;
  const circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = `${circumference}`;
  requestAnimationFrame(() => {
    circle.style.strokeDashoffset = circumference * (1 - progress / 100);
  });
}
