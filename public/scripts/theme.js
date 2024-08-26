if (
  localStorage.theme === "dark" ||
  (window.matchMedia("(prefers-color-scheme: dark)") && !localStorage.theme)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
