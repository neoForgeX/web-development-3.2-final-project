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

//PAGE LOAD FADE
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// SCROLL REVEAL EFFECT
const revealElements = document.querySelectorAll(".reveal");
function handleScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);
