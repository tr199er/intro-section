function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const btn = document.querySelector(".nav-btn");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  btn.classList.toggle("open");
}
