const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  greeting.innerText = `Hello ${username}`;
  // greeting.innerText = "Hello " + username;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  localStorage.setItem("username", username);
  //  We can do this by CSS form
  //   if (username === "") {
  //     alert("Please write your name.");
  //   } else if (username.length > 15) {
  //     alert("Your name is too long.");
  //   }
}

function handleLinkClick(event) {
  event.preventDefault();
  console.log(event);
  // alert("clicked");
}
// loginButton.addEventListener("click", onLoginSubmit);
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
