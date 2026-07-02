// navbar component logic
async function loadNavbar() {
    const response = await fetch("components/navbar/navbar.html");
    const html = await response.text();
    document.getElementById("navbar-container").innerHTML = html;
}

document.addEventListener("DOMContentLoaded", loadNavbar);