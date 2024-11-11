function setUpThemeToggle() {
  const themeBtn = document.getElementsByTagName("html");

  themeBtn[0].addEventListener("click", () => {
    document.documentElement.classList.toggle("theme-dark");
  });
}

window.onload = setUpThemeToggle();