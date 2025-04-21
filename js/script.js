document.addEventListener("DOMContentLoaded", () => {
  // Menu mobile toggle
  const menuToggle = document.querySelector(".mobile-menu-toggle");
  const menu = document.querySelector(".menu");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("open");
    });
  }

  // Galeria de imagens com troca automática
  document.querySelectorAll('.galeria-imagens').forEach(galeria => {
    let index = 0;
    const slides = galeria.querySelectorAll('.slide');

    function mostrarSlide(i) {
      slides.forEach(slide => slide.classList.remove('active'));
      slides[i].classList.add('active');
    }

    mostrarSlide(index);

    setInterval(() => {
      index = (index + 1) % slides.length;
      mostrarSlide(index);
    }, 4000);
  });

  // Botão de compra com redirecionamento
  document.querySelectorAll(".botao").forEach(botao => {
    botao.addEventListener("click", (e) => {
      const url = botao.getAttribute("href") || botao.dataset.href;
      if (url) {
        window.open(url, '_blank');
      }
    });
  });
});
