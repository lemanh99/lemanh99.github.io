/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  /*Active link*/
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  /*Remove menu mobile*/
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  distance: "80px",
  duration: 2000,
});

/*SCROLL HOME*/
sr.reveal(".home__title", {});
sr.reveal(".button", { origin: "top", reset: true, delay: 200 });
sr.reveal(".home__img", { origin: "top", reset: true, delay: 400 });
sr.reveal(".home__social-icon", { origin: "top", reset: true, interval: 200 });

/*SCROLL ABOUT*/
sr.reveal(".about__img", { origin: "top", reset: true });
sr.reveal(".about__subtitle", { origin: "top", reset: true, delay: 400 });
sr.reveal(".about__text", { origin: "top", reset: true, delay: 400 });

/*SCROLL SKILLS*/
sr.reveal(".skills__subtitle", { origin: "top", reset: true });
sr.reveal(".skills__text", { origin: "top", reset: true });
sr.reveal(".skills__data", { origin: "top", reset: true, interval: 200 });
sr.reveal(".skills__img", { origin: "top", reset: true, delay: 600 });
sr.reveal(".skills__names_love", { origin: "top", reset: true, interval: 200 });
/*SCROLL EXPERIENCE*/
sr.reveal(".experience__data_left", {
  origin: "left",
  reset: true,
  interval: 200,
});
sr.reveal(".experience__data_right", {
  origin: "right",
  reset: true,
  interval: 200,
});
/*SCROLL WORK*/
sr.reveal(".work_info", { origin: "top", reset: false, interval: 200 });

/*SCROLL CONTACT*/
sr.reveal(".contacts__icon", { origin: "top", reset: false, interval: 200 });
/*SCROLL FOOTER */
sr.reveal(".footer__title", { origin: "left", reset: true, interval: 500 });

$(document).ready(function () {
  $(window).scroll(function () {

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });
  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Developer", "Student", "YouTuber", ".........."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});
