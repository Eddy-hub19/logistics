
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination', // Вказуємо контейнер для пагінації
      clickable: true, // Робимо кружечки клікабельними
    },
    navigation: {
      nextEl: '.swiper-button-next', // Вказуємо контейнер для стрілки "Вперед"
      prevEl: '.swiper-button-prev', // Вказуємо контейнер для стрілки "Назад"
    },
    breakpoints: {
      // Налаштування для мобільних пристроїв
      768: {
        slidesPerView: 2, // Показувати 2 слайди
        spaceBetween: 20,
      },
    },
    // Додаткові налаштування, якщо потрібно
  });
});
