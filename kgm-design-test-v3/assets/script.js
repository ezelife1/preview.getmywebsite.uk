(function () {
  "use strict";

  var header = document.getElementById("site-header");
  var hero = document.getElementById("top");
  var mobileContactBar = document.getElementById("mobile-contact-bar");

  function updatePageState() {
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    }

    if (hero && mobileContactBar) {
      var headerHeight = header ? header.getBoundingClientRect().height : 0;
      var heroBottom = hero.getBoundingClientRect().bottom;
      var heroHasPassed = heroBottom <= headerHeight;

      mobileContactBar.classList.toggle("is-visible", heroHasPassed);
      mobileContactBar.setAttribute("aria-hidden", heroHasPassed ? "false" : "true");
    }
  }

  updatePageState();

  window.addEventListener("scroll", updatePageState, { passive: true });
  window.addEventListener("resize", updatePageState, { passive: true });
})();
