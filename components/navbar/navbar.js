function handleNavbarScroll() {
    const navbar = document.getElementById("mainNav");
    const logo = document.querySelector("#mainNav .navbar-logo");

    if (navbar) {
        if (window.scrollY > 50) {
            // User scrolled down — switch to dark logo and add scrolled background
            navbar.classList.add("scrolled");
            if (logo) {
                logo.src = logo.getAttribute("data-scroll-src");
            }
        } else {
            // User is at the top — restore original white logo
            navbar.classList.remove("scrolled");
            if (logo) {
                logo.src = logo.getAttribute("data-default-src");
            }
        }
    }
}

window.addEventListener("scroll", handleNavbarScroll);

// Run once on page load to set the correct state immediately
handleNavbarScroll();

// ============================================
// Mobile hamburger — open/close the nav menu
// ============================================
function initNavbarToggler() {
    const toggler = document.getElementById("navbarToggler");
    const menuContainer = document.getElementById("navbarMenuContainer");

    if (!toggler || !menuContainer) return;

    toggler.addEventListener("click", () => {
        const expanded = toggler.getAttribute("aria-expanded") === "true";
        toggler.setAttribute("aria-expanded", String(!expanded));
        menuContainer.classList.toggle("show");
    });

    // Close the menu after tapping a link (mobile UX)
    menuContainer.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", () => {
            toggler.setAttribute("aria-expanded", "false");
            menuContainer.classList.remove("show");
        });
    });
}

document.addEventListener("DOMContentLoaded", initNavbarToggler);
