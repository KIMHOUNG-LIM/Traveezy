function handleNavbarScroll() {
    const navbar = document.getElementById("mainNav");
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }
}

window.addEventListener("scroll", handleNavbarScroll);

handleNavbarScroll();
