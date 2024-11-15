function setUpThemeToggle() {
  const themeBtn = document.getElementById("themeToggle");

  themeBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("theme-dark");
  });
}

window.onload = setUpThemeToggle();