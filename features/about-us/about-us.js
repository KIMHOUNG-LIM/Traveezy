/* =========================================================
   MAIN.JS
   Shared JavaScript for the About page AND every portfolio
   page. Plain JavaScript only (no external API needed here).

   NOTE FOR TEAMMATES: if another page (like Hotel) needs to
   call a real booking API, put that code in its OWN file
   (e.g. js/hotel.js) so each page's logic stays easy to find.
========================================================= */

// Wait until the whole HTML page has finished loading before
// running any of this code, so we don't try to grab an element
// that doesn't exist yet.
document.addEventListener("DOMContentLoaded", function () {

  /* Newsletter/Footer logic removed (using global footer instead) */

  /* -----------------------------------------------------
     3. FADE-IN-ON-SCROLL ANIMATION
     "IntersectionObserver" is a built-in browser tool that
     watches an element and tells us the exact moment it
     scrolls into view. We use that moment to add the class
     "is-visible", which triggers the CSS fade/slide-in
     animation defined in style.css (.reveal.is-visible).

     threshold: 0.15 means "trigger once 15% of the element
     is visible on screen" (feel free to try 0.3 or 0.5 too).
  ------------------------------------------------------ */
  const revealElements = document.querySelectorAll(".reveal");

  if (revealElements.length > 0 && "IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Stop watching this element once it has appeared,
            // so the animation only plays once.
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Very old browsers without IntersectionObserver support:
    // just show everything immediately instead of hiding it.
    revealElements.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

});
