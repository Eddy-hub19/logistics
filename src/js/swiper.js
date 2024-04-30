document.addEventListener('DOMContentLoaded', function () {
  const isMobileOrTablet = window.innerWidth <= 1440;
  if (isMobileOrTablet) {
    const swiperData = [
      {
        container: '.swiper-container',
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
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
      },
      {
        container: '.swiper-container1',
        pagination: '.swiper-pagination1',
        nextButton: '.swiper-button-next1',
        prevButton: '.swiper-button-prev1',
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
      },
      {
        container: '.swiper-container2',
        pagination: '.swiper-pagination2',
        nextButton: '.swiper-button-next2',
        prevButton: '.swiper-button-prev2',
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
      },
      {
        container: '.swiper-container3',
        pagination: '.swiper-pagination3',
        nextButton: '.swiper-button-next3',
        prevButton: '.swiper-button-prev3',
        breakpoints: {
          732: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        },
      },
      {
        container: '.swiper-container4',
        pagination: '.swiper-pagination4',
        nextButton: '.swiper-button-next4',
        prevButton: '.swiper-button-prev4',
        breakpoints: {
          732: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        },
      },
      {
        container: '.swiper-container5',
        pagination: '.swiper-pagination5',
        nextButton: '.swiper-button-next5',
        prevButton: '.swiper-button-prev5',
        breakpoints: {
          732: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        },
      },
      {
        container: '.swiper-container6',
        pagination: '.swiper-pagination6',
        nextButton: '.swiper-button-next6',
        prevButton: '.swiper-button-prev6',
        breakpoints: {
          732: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        },
      },
    ];

    swiperData.forEach(data => {
      new Swiper(data.container, {
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
        pagination: {
          el: data.pagination,
          clickable: true,
        },
        navigation: {
          nextEl: data.nextButton,
          prevEl: data.prevButton,
        },
        breakpoints: data.breakpoints,
      });
    });
  }
});
