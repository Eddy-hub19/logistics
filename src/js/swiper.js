import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', function () {
  // Проверяем, является ли текущее устройство мобильным или планшетным
  const isMobileOrTablet = window.innerWidth <= 1024;

  if (isMobileOrTablet) {
    const swiper = new Swiper('.swiper-container', {
      // Опциональные параметры
      direction: 'horizontal',
      loop: true,
      slidesPerView: 2,
      effect: 'fade',

      // Если нужна пагинация
      pagination: {
        el: '.swiper-pagination',
      },

      // Навигационные стрелки
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // И если нужна полоса прокрутки
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }
});
