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

//Portfolio Modal
const modalBg = document.createElement("div");
modalBg.className = "modal-bg";
modalBg.innerHTML = `
  <div class="modal">
    <h3 id="modal-title"></h3>
    <p id="modal-desc"></p>
    <a id="modal-link" href="#" target="_blank" class="btn">View Project</a>
    <button class="btn-close">Close</button>
  </div>
`;
document.body.appendChild(modalBg);

const openModal = (title, desc, link) => {
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-desc").innerText = desc;
  document.getElementById("modal-link").href = link;
  modalBg.style.display = "flex";
};

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    openModal(
      card.dataset.title,
      card.dataset.desc,
      card.dataset.link
    );
  });
});

modalBg.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-bg") || e.target.classList.contains("btn-close")) {
    modalBg.style.display = "none";
  }
});

