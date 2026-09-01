const theme = localStorage.getItem("theme");
const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const isLight = window.matchMedia("(prefers-color-scheme: light)").matches;
const themeToggleBtn = document.getElementById("themeToggle");

initializeTheme();
setTheme();
switchTheme();

function initializeTheme() {
  if (!theme) {
    if (isDark) {
      localStorage.setItem("theme", "dark-theme");
    }

    if (isLight) {
      localStorage.setItem("theme", "light-theme");
    }
  }
}

function setTheme() {
  if (theme == "dark-theme") {
    document.documentElement.className = "dark-theme";
  }

  if (theme == "light-theme") {
    document.documentElement.className = "light-theme";
  }
}

function switchTheme() {
  themeToggleBtn.addEventListener("click", function () {
    const currentTheme = document.documentElement.className;
    if (currentTheme === "light-theme") {
      document.documentElement.className = "dark-theme";
      localStorage.setItem("theme", "dark-theme");
    } else {
      document.documentElement.className = "light-theme";
      localStorage.setItem("theme", "light-theme");
    }
  });
}
