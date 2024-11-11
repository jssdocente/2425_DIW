function setUpThemeToggle() {
  const themeBtn = document.getElementById("themeToggle");

  themeBtn.addEventListener("click", () => {
    document.getElementsByTagName("html")[0].classList.toggle("theme-dark");
  });
}

window.onload = setUpThemeToggle();