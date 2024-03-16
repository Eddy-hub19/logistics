import './js/dropdown.js';
import './js/hamburger.js';
import './js/popup.js';
import './js/formPopup.js';
import './js/dropdown.js';
import './js/swiper.js';

document.addEventListener('DOMContentLoaded', function () {
  const langLinks = document.querySelectorAll('.lang a');

  langLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const selectedLang = link.classList[0]; // Получаем класс выбранного языка
      langLinks.forEach(function (el) {
        el.classList.remove('current'); // Удаляем класс 'current' у всех ссылок
      });
      link.classList.add('current'); // Добавляем класс 'current' к выбранной ссылке
    });
  });
});
