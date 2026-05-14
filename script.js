// script.js

// Dark Light Mode
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  const icon = themeToggle.querySelector("i");

  if(document.body.classList.contains("light-mode")){
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }else{
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});

// Mobile Menu
const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Close menu when click link
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});

// Scroll Animation
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if(sectionTop < window.innerHeight - 100){
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
});

sections.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  section.style.transition = "all 0.8s ease";
});