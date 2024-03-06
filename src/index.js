// dropdownContent

document.addEventListener('DOMContentLoaded', () => {
  const dropdownWrap = document.getElementById('dropdownWrap');
  const dropdownContent = document.getElementById('dropdownContent');

  dropdownWrap.addEventListener('click', () => {
    dropdownContent.classList.toggle('show');
    dropdownWrap.classList.toggle('open');
  });

  document.addEventListener('click', event => {
    const targetElement = event.target;
    if (!dropdownWrap.contains(targetElement)) {
      dropdownContent.classList.remove('show');
      dropdownWrap.classList.remove('open');
    }
  });
});

// Hamburger
document.addEventListener('DOMContentLoaded', function () {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const closeIcon = document.querySelector('.close-icon');
  const mobileMenu = document.querySelector('.mobile-menu');

  // Обработчик клика по иконке бургера
  hamburgerIcon.addEventListener('click', function () {
    // Переключаем отображение иконок бургера и крестика
    hamburgerIcon.style.display = 'none';
    closeIcon.style.display = 'block';
    // Показываем меню
    mobileMenu.classList.add('open');
  });

  // Обработчик клика по иконке крестика
  closeIcon.addEventListener('click', function () {
    // Переключаем отображение иконок крестика и бургера
    closeIcon.style.display = 'none';
    hamburgerIcon.style.display = 'block';
    // Скрываем меню
    mobileMenu.classList.remove('open');
  });
});

// Popup

document.addEventListener('DOMContentLoaded', function () {
  const mobileSvg = document.querySelector('.mobile-svg');
  const phonePopup = document.querySelector('.phone-popup-mobile');

  mobileSvg.addEventListener('click', function () {
    phonePopup.style.display =
      phonePopup.style.display === 'none' ? 'block' : 'none';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const popup = document.querySelector('.phone-popup');
  const contentPopup = document.querySelector('.form-popup');

  popup.addEventListener('click', function () {
    contentPopup.style.display =
      contentPopup.style.display === 'none' ? 'block' : 'none';
  });
});
