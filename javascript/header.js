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

let mainNavLinks = document.querySelectorAll("nav ul li a");

mainNavLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    let target = document.querySelector(event.target.hash);
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

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
