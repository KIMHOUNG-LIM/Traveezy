// Main entry JS

function getPathPrefix() {
    const path = window.location.pathname;
    if (path.includes("/features/")) {
        return "../../";
    }
    return "";
}

function adjustRelativeLinks(container, prefix) {
    if (!prefix) return;
    
    container.querySelectorAll("a").forEach(link => {
        const href = link.getAttribute("href");
        if (href && !href.startsWith("http") && !href.startsWith("#") && !href.startsWith("javascript:") && !href.startsWith("/")) {
            link.setAttribute("href", prefix + href);
        }
    });
    
    container.querySelectorAll("img").forEach(img => {
        const src = img.getAttribute("src");
        if (src && !src.startsWith("http") && !src.startsWith("/")) {
            img.setAttribute("src", prefix + src);
        }
    });
}

async function loadNavbar() {
    const prefix = getPathPrefix();
    const response = await fetch(prefix + "components/navbar/navbar.html");
    const html = await response.text();
    const container = document.getElementById("navbar-container");
    container.innerHTML = html;

    // Adjust relative links in navbar to match current page directory depth
    adjustRelativeLinks(container, prefix);

    // Only run active-link detection AFTER the navbar HTML exists in the DOM
    setActiveNavLink();

    // Trigger scroll check to initialize styling based on current scroll position
    window.dispatchEvent(new Event("scroll"));
}

function setActiveNavLink() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll("#navbar-container .nav-link").forEach(link => {
        const href = link.getAttribute("href");
        if (href) {
            const linkPage = href.split("/").pop();
            if (linkPage === currentPage) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        }
    });
}

async function loadFooter() {
    const footerContainer = document.getElementById("footer-container");
    if (!footerContainer) return;
    const prefix = getPathPrefix();
    const response = await fetch(prefix + "components/footer/footer.html");
    const html = await response.text();
    footerContainer.innerHTML = html;

    // Adjust relative links in footer to match current page directory depth
    adjustRelativeLinks(footerContainer, prefix);
}

async function init() {
    await loadNavbar();
    await loadFooter();
}

document.addEventListener("DOMContentLoaded", init);