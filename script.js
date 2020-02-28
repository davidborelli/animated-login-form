const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");
const ulSquare = document.querySelector("div.squares");

btnLogin.addEventListener("click", event => {
  event.preventDefault();

  const fields = [...document.querySelectorAll(".input-block input")];

  fields.forEach(field => {
    if (field.value === "") form.classList.add("validate-error");
  });

  const formError = document.querySelector(".validate-error");
  if (formError) {
    formError.addEventListener("animationend", event => {
      if (event.animationName === "nono") {
        formError.classList.remove("validate-error");
      }
    });
  } else {
    form.classList.add("form-hide");
  }
});

form.addEventListener("animationstart", event => {
  if (event.animationName === "down") {
    document.querySelector("body").style.overflow = "hidden";
  }
});

form.addEventListener("animationend", event => {
  if (event.animationName === "down") {
    form.style.display = "none";
    document.querySelector("body").style.overflow = "normal";
  }
});

for (let index = 0; index < 25; index++) {
  const li = document.createElement("div");

  const random = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const size = Math.floor(random(120, 10));
  const position = random(99, 1);
  const delay = random(10, 0.1);
  const duration = random(6, 3);
  const border = random(49, 1);

  li.style.width = `${size}px`;
  li.style.height = `${size}px`;
  li.style.bottom = `-${size}px`;

  li.style.left = `${position}%`;

  li.style.animationDelay = `${delay}s`;
  li.style.animationDuration = `${duration}s`;
  li.style.animationTimingFunction = `cubic-bezier(
    ${Math.random()},
    ${Math.random()},
    ${Math.random()},
    ${Math.random()}
  )`;
  li.style.borderRadius = `${border}%`;

  li.style.width = ulSquare.appendChild(li);
}
