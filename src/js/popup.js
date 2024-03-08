// Popup

document.addEventListener('DOMContentLoaded', function () {
  const mobileSvg = document.querySelector('.mobile-svg');
  const phonePopup = document.querySelector('.phone-popup-mobile');

  mobileSvg.addEventListener('click', function () {
    phonePopup.style.display =
      phonePopup.style.display === 'none' ? 'block' : 'none';
  });
});