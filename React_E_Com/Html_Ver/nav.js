const showNavBtn = document.querySelector("#show_side_nav");
const closeNavBtn = document.querySelector("#close_side_nav");
const sideNav = document.querySelector("#side_nav");

showNavBtn.addEventListener("click", () => {
  sideNav.style.display = "block";
  setTimeout(() => {
    sideNav.style.opacity = "1";
    sideNav.firstElementChild.style.transform = "translateX(0%)";
  }, 300);
});
closeNavBtn.addEventListener("click", () => {
  sideNav.style.opacity = "0";
  sideNav.firstElementChild.style.transform = "translateX(-100%)";
  setTimeout(() => {
    sideNav.style.display = "none";
  }, 900);
});
