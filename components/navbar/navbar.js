function handleNavbarScroll() {
    const navbar = document.getElementById("mainNav");
    const logo = document.querySelector("#mainNav .navbar-logo");

    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
            if (logo && logo.getAttribute("data-scroll-src")) {
                logo.src = logo.getAttribute("data-scroll-src");
            }
        } else {
            navbar.classList.remove("scrolled");
            if (logo && logo.getAttribute("data-default-src")) {
                logo.src = logo.getAttribute("data-default-src");
            }
        }
    }
}

window.addEventListener("scroll", handleNavbarScroll);
handleNavbarScroll();

// Mobile hamburger toggle — delegated click handler for dynamically loaded navbar
document.addEventListener("click", (e) => {
    const toggler = e.target.closest("#navbarToggler");
    if (toggler) {
        const menuContainer = document.getElementById("navbarMenuContainer");
        if (menuContainer) {
            const expanded = toggler.getAttribute("aria-expanded") === "true";
            toggler.setAttribute("aria-expanded", String(!expanded));
            menuContainer.classList.toggle("show");
        }
        return;
    }

    // Close menu when clicking a nav link
    if (e.target.closest("#navbarMenuContainer .nav-link")) {
        const togglerBtn = document.getElementById("navbarToggler");
        const menuContainer = document.getElementById("navbarMenuContainer");
        if (togglerBtn && menuContainer) {
            togglerBtn.setAttribute("aria-expanded", "false");
            menuContainer.classList.remove("show");
        }
    }
});

