const themes = [
  {
    background: "#1A1A2E",
    color: "#FFFFFF",
    primaryColor: "#0F3460",
  },
  {
    background: "#461220",
    color: "#FFFFFF",
    primaryColor: "#E94560",
  },
  {
    background: "#192A51",
    color: "#FFFFFF",
    primaryColor: "#967AA1",
  },
  {
    background: "#F7B267",
    color: "#000000",
    primaryColor: "#F4845F",
  },
  {
    background: "#F25F5C",
    color: "#000000",
    primaryColor: "#642B36",
  },
  {
    background: "#231F20",
    color: "#FFF",
    primaryColor: "#BB4430",
  },
];

const setTheme = (theme) => {
  const root = document.querySelector(":root");
  root.style.setProperty("--background", theme.background);
  root.style.setProperty("--color", theme.color);
  root.style.setProperty("--primary-color", theme.primaryColor);
  root.style.setProperty("--glass-color", theme.glassColor);
};

const displayThemeButtons = () => {
  const btnContainer = document.querySelector(".theme-btn-container");
  themes.forEach((theme) => {
    const div = document.createElement("div");
    div.className = "theme-btn";
    div.style.cssText = `background: ${theme.background}; width: 25px; height: 25px`;
    btnContainer.appendChild(div);
    div.addEventListener("click", () => setTheme(theme));
  });
};


var myFormEl = document.querySelector(".myform");

var emailEl = document.querySelector(".myform__email");
var emailValidFeedEl = document.querySelector(".myform__email ~ .valid-feedback")
var emailInvalidFeedEl = document.querySelector(".myform__email ~ .invalid-feedback")


var modalEl = document.querySelector(".mymodal");

modalEl.addEventListener('click', (event) => {
    if (event.target.classList.contains("mymodal"))
        modalClose()
})
function modalOpen() {
    modalEl.classList.add("mymodal--open");
}

function modalClose() {
    modalEl.classList.remove("mymodal--open");
}



/**
 * object => email, age, firstname
 */
 var validateForm = function (obj) {
  let isValid = {
      email: false
  };
  if (isValid.email = validateEmail(obj.email)) {
      emailEl.classList.remove("is-invalid");
      emailEl.classList.add("is-valid");
  } else {
      emailEl.classList.add("is-invalid");
      emailEl.classList.remove("is-valid");
  }
  return  isValid.email
}

myFormEl.addEventListener('submit', function (event) {
  event.preventDefault()

  const data = {
      email: emailEl.value
  }

  if (validateForm(data)) {
      console.log("Ma'lumot jo'natish uchun tayyor")
      modalOpen()

  } else {
      console.error("Ma'lumot berilgan shartlarga to'g'ri kelmadi")
  }
})


displayThemeButtons();
