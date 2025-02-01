document.addEventListener("DOMContentLoaded", () => {
    // Toggle Menu
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("hidden");
        if (menu.classList.contains("hidden")) {
            menu.style.display = "none";
        } else {
            menu.style.display = "flex";
        }
    });

    // Set Current Year
    document.getElementById("year").textContent = new Date().getFullYear();

    // Set Last Modified Date
    const lastModified = new Date(document.lastModified)
    document.getElementById("last-modified").textContent = document.lastModified;
});
