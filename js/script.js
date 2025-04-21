// script.js - Comportamentos dinâmicos do site Help X Solutions

document.addEventListener("DOMContentLoaded", function () {
  // Menu Mobile Toggle
  const menuToggle = document.querySelector(".mobile-menu-toggle");
  const menu = document.querySelector(".menu");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("open");
    });
  }

  // Carrossel Automático
  const carrosselContainers = document.querySelectorAll(".carousel-container");

  carrosselContainers.forEach((container) => {
    const slides = container.querySelectorAll(".slide");
    const dotsContainer = container.querySelector(".dots");
    let index = 0;

    slides.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.addEventListener("click", () => showSlide(i));
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll("span");

    function showSlide(i) {
      index = i;
      container.querySelector(".slides").style.transform = `translateX(-${index * 100}%)`;

      slides.forEach(slide => slide.classList.remove("active"));
      dots.forEach(dot => dot.classList.remove("active"));
      slides[index].classList.add("active");
      dots[index].classList.add("active");
    }

    function nextSlide() {
      index = (index + 1) % slides.length;
      showSlide(index);
    }

    showSlide(0);
    setInterval(nextSlide, 5000);
  });
});

