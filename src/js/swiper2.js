document.addEventListener('DOMContentLoaded', function () {
  const isMobileOrTablet = window.innerWidth <= 768;
  if (isMobileOrTablet) {
    const swiper = new Swiper('.swiper-container2', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
      },
    });
  }
});
