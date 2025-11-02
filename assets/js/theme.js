(() => {
    const root = document.documentElement;
    const toggleBtn = document.getElementById("theme-toggle")

    // Detects BOM theme preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

    //emoji icons from https://www.piliapp.com/emoji/list/sun/
    function setTheme(mode) {
        root.setAttribute("data-theme", mode);
        localStorage.setItem("theme", mode);
        if (toggleBtn) toggleBtn.textContent = mode === "dark" ? "🌞" : "🌛";
    }

    // Apply saved/system theme
    const saved = localStorage.getItem("theme");
    if (saved) {
        setTheme(saved);
    } else {
        setTheme(prefersDark.matches ? "dark" : "light");
    }

    // Listen for OS theme changes
    prefersDark.addEventListener("change", e => setTheme(e.matches ? "dark" : "light"));

    // Manual toggle
    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            const current = root.getAttribute("data-theme");
            setTheme(current === "dark" ? "light" : "dark");
      });
    }

}) ();