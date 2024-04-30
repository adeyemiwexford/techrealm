const hamburger_open = document.getElementById("hamburger_open");
const mobile_nav = document.getElementById("mobile_nav");

hamburger_open.addEventListener("click", () => {
  mobile_nav.classList.toggle("show");
});
