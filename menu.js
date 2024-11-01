const btn = document.getElementById("menu-btn");
const nav = document.querySelector(".nav-links");
const navContainer = document.querySelector(".nav-container");
const content = document.querySelector(".content");

btn.addEventListener("click", () => {
  navContainer.classList.toggle("menu-container");
  nav.classList.toggle("menu-links");
  content.classList.toggle("hide");
});
