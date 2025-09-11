const sideMenu = document.querySelector("#sideMenu");
const navBar = document.querySelector("nav");
const sideMenuLinks = document.querySelectorAll("#sideMenu a");

function openMenu() {
  sideMenu.classList.remove("translate-x-full");
  sideMenu.classList.add("translate-x-0");
}

// Close Mobile Menu
function closeMenu() {
  sideMenu.classList.remove("translate-x-0");
  sideMenu.classList.add("translate-x-full");
}

// Close menu when any link is clicked
document.querySelectorAll("#sideMenu a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

// Scroll effect for navbar
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navBar.classList.add(
      "bg-white",
      "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-sm",
      "dark:bg-darkTheme",
      "dark:shadow-white/20"
    );
  } else {
    navBar.classList.remove(
      "bg-white",
      "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-sm",
      "dark:bg-darkTheme",
      "dark:shadow-white/20"
    );
  }
});

// Dark Mode Initialization
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches) // fixed typo
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

// Dark Mode Toggle
function toggleTheme() {
  document.documentElement.classList.toggle("dark");
  if (document.documentElement.classList.contains("dark")) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
}
