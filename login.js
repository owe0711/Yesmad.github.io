//login
const loginForm = document.querySelector("#loginForm");
const loginInput = loginForm.querySelector("#loginInput");
const loginBtn = loginForm.querySelector("#loginBtn");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function handleLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const storedUsername = localStorage.getItem(USERNAME_KEY);

if (storedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginSubmit);
} else {
  //show the greeting
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${storedUsername}`;
}
