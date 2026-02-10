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


// function isPasswordMatch(){
//   const enterPassword = document.querySelector('.input-password');

// }
