document.addEventListener("DOMContentLoaded", () => {
  // Menu mobile toggle
  const menuToggle = document.querySelector(".mobile-menu-toggle");
  const menu = document.querySelector(".menu");
  if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("open");
    });
  }

  // Galeria com troca automática e botões manuais
  document.querySelectorAll('.galeria-imagens').forEach(galeria => {
    let index = 0;
    const slides = galeria.querySelectorAll('.slide');
    const btnEsquerda = galeria.querySelector('.seta.esquerda');
    const btnDireita = galeria.querySelector('.seta.direita');

    function mostrarSlide(i) {
      slides.forEach(slide => slide.classList.remove('active'));
      slides[i].classList.add('active');
    }

    function proximoSlide() {
      index = (index + 1) % slides.length;
      mostrarSlide(index);
    }

    function slideAnterior() {
      index = (index - 1 + slides.length) % slides.length;
      mostrarSlide(index);
    }

    mostrarSlide(index);

    let intervalo = setInterval(proximoSlide, 4000);

    if (btnEsquerda && btnDireita) {
      btnEsquerda.addEventListener('click', () => {
        slideAnterior();
        clearInterval(intervalo);
        intervalo = setInterval(proximoSlide, 4000);
      });
      btnDireita.addEventListener('click', () => {
        proximoSlide();
        clearInterval(intervalo);
        intervalo = setInterval(proximoSlide, 4000);
      });
    }
  });

  // Botão de compra
  document.querySelectorAll(".botao").forEach(botao => {
    botao.addEventListener("click", (e) => {
      const url = botao.getAttribute("href") || botao.dataset.href;
      if (url && url !== "#") {
        window.open(url, '_blank');
      }
    });
  });

  // Ver mais
  document.querySelectorAll('.ver-mais').forEach(botao => {
    botao.addEventListener('click', () => {
      const container = botao.closest('.descricao-produto');
      if (container) {
        container.classList.toggle('expanded');
        botao.textContent = container.classList.contains('expanded') ? 'Ver menos' : 'Ver mais';
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card-afiliado");

  // Aplica apenas para mobile
  if (window.innerWidth <= 768) {
    cards.forEach(card => {
      card.addEventListener("click", () => {
        card.classList.toggle("active");
      });
    });
  }
});
