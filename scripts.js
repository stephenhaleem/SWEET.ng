const menuIcon = document.querySelector(".menu-icon");
const navlinks = document.querySelector(".nav-links");

if (menuIcon && navlinks) {
  menuIcon.addEventListener("click", () => {
    navlinks.classList.toggle("active");
  });
} else {
  console.error("Menu icon or navigation links elements not found");
}
