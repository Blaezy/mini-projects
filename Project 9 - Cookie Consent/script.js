
    const cookieCard = document.querySelector(".js-cookie-card");
    const cookieButton = document.querySelectorAll(".js-cookie-button-close");

    let isCookie = JSON.parse(localStorage.getItem("cookie")) ?? true;

    setTimeout(() => {
      if (isCookie) {
        cookieCard.style.transform = "translate(0,0)";
      }
    }, 3000);

    cookieButton.forEach((button) => {
      button.addEventListener("click", () => {
        cookieCard.style.transform = "translate(400px,0)";
        isCookie = false;
        localStorage.setItem("cookie", JSON.stringify(isCookie));
      });
    });