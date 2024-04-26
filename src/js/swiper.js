document.addEventListener('DOMContentLoaded', function () {
  const isMobileOrTablet = window.innerWidth <= 1440;
  if (isMobileOrTablet) {
    const swiper1 = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        732: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });

    const swiper = new Swiper('.swiper-container2', {
      slidesPerView: 'auto', // розділити на слайди
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination2',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
      },
      breakpoints: {
        732: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });

    const swiper3 = new Swiper('.swiper-container3', {
      slidesPerView: 'auto', // розділити на слайди
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination3',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next3',
        prevEl: '.swiper-button-prev3',
      },
      breakpoints: {
        732: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });
  }
});
