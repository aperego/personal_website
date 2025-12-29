document.addEventListener("DOMContentLoaded", () => {
  // ---------------------------
  // Nav active link highlight
  // ---------------------------
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
  });

  // ---------------------------
  // Theme toggle (dark <-> light) with persistence
  // ---------------------------
  const btn = document.getElementById("themeToggle");
  const STORAGE_KEY = "ap_theme"; // "dark" | "light"

  function setTheme(mode) {
    if (mode === "light") document.body.classList.add("theme-light");
    else document.body.classList.remove("theme-light");

    localStorage.setItem(STORAGE_KEY, mode);

    if (btn) {
      const iconEl = btn.querySelector(".theme-toggle__icon");
      if (iconEl) iconEl.textContent = (mode === "light") ? "◑" : "◐";
      btn.setAttribute(
        "aria-label",
        `Switch to ${mode === "dark" ? "dark" : "light"} theme`
      );
    }
  }

  const saved = localStorage.getItem(STORAGE_KEY);
  setTheme(saved === "light" ? "light" : "dark");

  if (btn) {
    btn.addEventListener("click", () => {
      const isLight = document.body.classList.contains("theme-light");
      setTheme(isLight ? "dark" : "light");
    });
  }
});