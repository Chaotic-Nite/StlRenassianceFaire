// Created September 25rd
// by Noel Kling

function response() {
  let resNav = document.getElementById("nav-bar");
  if (resNav.className === "nav-bar") {
    resNav.className += ".repsonsive";
  } else {
    resNav.className = "nav-bar";
  }
}

window.onscroll = function () {
  navScroll();
};

var navbar = document.getElementById("navEl-navBar");

var sticky = navbar.offsetTop;

function navScroll() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
