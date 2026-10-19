AOS.init(
  {
    duration: 1500,
  }
);

const larguraDaTela = window.innerWidth

if (larguraDaTela < 800) {
  var swiper4 = new Swiper(".mySwiper4", {
      grabCursor: true,
      autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
} else {
  var swiper4 = new Swiper(".mySwiper4", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      grabCursor: true,
      autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
}

if (larguraDaTela < 800) {
  var swiper6 = new Swiper(".mySwiper6", {
      grabCursor: true,
      autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
} else {
  var swiper6 = new Swiper(".mySwiper6", {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      grabCursor: true,
      autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
}

// Scroll suave
const lenis = new Lenis({
  smooth: true, // Ativa o scroll suave
  duration: 1.1, // Define a duração do scroll (maior valor deixa mais lento)
  easing: (t) => 1 - Math.pow(1 - t, 4), // Função de easing para suavidade
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
