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

function scrollNav() {
  let defaultNav = document.getElementById("nav-bar").style.top;
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav-bar").style.top = "0";
  } else {
    document.getElementById("nav-bar").style.top = defaultNav;
  }
}

window.onscroll = function () {
  scrollNav;
};
