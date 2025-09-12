let darkmode = localStorage.getItem('darkmode');

const themeSwitch = document.getElementById('theme-switcher');

const enableDarkmode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkmode', 'active');
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkmode', null);
}

if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode');
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});





// Contact Page 

// Get data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorr = document.querySelectorAll(".error");



function validatForm() {
  successMessages();

  let errorFlag = false;

  if (nameInput.value.length < 1) {
    errorr[0].innerText = " please enter your name";
    nameInput.classList.add("error-border");
    errorFlag = true;
  }

  if (!emaillValid(email.value)) {
    errorr[1].innerText = "Invalid email address";
    email.classList.add("error-border");
    errorFlag = true;
  }

  if (message.value.length < 1) {
    errorr[2].innerText = "Please enter message";
    message.classList.add("error-border");
    errorFlag = true;
  }

  if (!errorFlag) {
    document.getElementById('contactForm').submit();

    success.innerText = "Success";
    nameInput.value = "";
    email.value = "";
    message.value = "";


  }

}

// success messages
function successMessages() {
  for (let i = 0; i < errorr.length; i++) {
    errorr[i].innerText = "";
  }
  success.innerText = "";
  nameInput.classList.remove("error-border");
  email.classList.remove("error-border");
  message.classList.remove("error-border");
}

// Check if email is valid
function emaillValid(email) {
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}