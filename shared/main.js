// Main entry JS

async function loadNavbar() {
    const response = await fetch("components/navbar/navbar.html");
    const html = await response.text();
    document.getElementById("navbar-container").innerHTML = html;

    // Only run active-link detection AFTER the navbar HTML exists in the DOM
    setActiveNavLink();

    // Trigger scroll check to initialize styling based on current scroll position
    window.dispatchEvent(new Event("scroll"));
}

function setActiveNavLink() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll("#navbar-container .nav-link").forEach(link => {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

async function loadFooter() {
    const footerContainer = document.getElementById("footer-container");
    if (!footerContainer) return;
    const response = await fetch("components/footer/footer.html");
    const html = await response.text();
    footerContainer.innerHTML = html;
}

async function init() {
    await loadNavbar();
    await loadFooter();
}

document.addEventListener("DOMContentLoaded", init);