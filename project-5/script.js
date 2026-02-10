progressRingStyle();
function progressRingStyle() {
  const progress = 60;
  const circle = document.querySelector(".ring-progress");
  const radius = 62;
  const circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = `${circumference}`;
  requestAnimationFrame(() => {
    circle.style.strokeDashoffset = circumference * (1 - progress / 100);
  });
}

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

function isPasswordMatch() {
  const enterPasswordElement = document.querySelector(".input-password");
  const cnfPasswordElement = document.querySelector(".cnf-input-password");
  const errorElement = document.querySelector(".error");

  const firstPassword = enterPasswordElement.value;
  const secondPassword = cnfPasswordElement.value;

  if (firstPassword === "" && secondPassword === "") {
    console.log("password is empty");
    errorElement.textContent = "Enter the password";
    errorElement.style.opacity = 1;
    enterPasswordElement.style.borderColor = "red";
    cnfPasswordElement.style.borderColor = "red";
    return false;
  } else if (firstPassword === secondPassword) {
    console.log("password is equal");
    errorElement.style.opacity = 0;
    enterPasswordElement.style.borderColor = "black";
    cnfPasswordElement.style.borderColor = "black";
    return true;
  } else {
    console.log("password is not equal");
    errorElement.textContent = "Passwords do not match";
    errorElement.style.opacity = 1;
    enterPasswordElement.style.borderColor = "red";
    cnfPasswordElement.style.borderColor = "red";
    return false;
  }
}

const emailInput = document.getElementById("email");
const emailError = document.querySelector(".valid-email");

const updateButtonElement = document.querySelector(".js-update-button");
updateButtonElement.addEventListener("click", () => {
  isPasswordMatch();
  checkEmailFormat();
});

// info: this is the email format cheker
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function checkEmailFormat() {
  const email = emailInput.value.trim();

  if (!isValidEmail(email)) {
    emailError.style.opacity = 1;
    emailInput.style.borderColor = "red";
    return false;
  } else {
    emailError.style.opacity = 0;
    emailInput.style.borderColor = "black";
    return true;
  }
}
