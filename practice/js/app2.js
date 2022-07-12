// Javascript is already connected to HTML.
// const h1 = document.getElementById("h1");
// console.dir(h1);
// h1.innerText = "Got you!";

const h1 = document.querySelector("div.hello:first-child h1");
// console.log(h1);
// h1.innerText = "hello";
// h1.style.color = "blue";

console.dir(h1);

function handleTitleClick() {
  console.log("h1 was clicked!");
  //   h1.style.color = "blue";
}
function handleMouseEnter() {
  console.log("mouse is here!!!");
  //   h1.innerText = "Mouse is here!";
}
function handleMouseLeave() {
  console.log("mouse is Gone!!!");
  //   h1.innerText = "Mouse is Gone!!!";
}
function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
  alert("copier!");
}
function handleWindowOffline() {
  alert("SOS no WIFI!!");
}
function handleWindowOnline() {
  alert("All GOOOD");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

// 같은 방식
// h1.onclick = handleTitleClick;
// h1.onmouseenter = handleMouseEnter;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
