document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("menu-toggle");
    const navList = document.getElementById("nav-list");

    if (!toggleBtn || !navList) {
        console.error("Menu elements not found");
        return;
    }

    toggleBtn.addEventListener("click", () => {
        navList.classList.toggle("show");
        toggleBtn.textContent = navList.classList.contains("show") ? "✕" : "☰";
    });
});