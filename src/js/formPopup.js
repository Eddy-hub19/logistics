document.addEventListener('DOMContentLoaded', function () {
  const popup = document.querySelector('.phone-popup-form-popup');
  const contentPopup = document.querySelector('.form-popup');
  const formCloseIcon = document.querySelector('.close-icon');
  const phonePopup = document.querySelector('.phone-popup-mobile');

  popup.addEventListener('click', function () {
    contentPopup.style.display =
      contentPopup.style.display === 'none' ? 'block' : 'none';
    phonePopup.style.display = 'none';
  });

  formCloseIcon.addEventListener('click', function () {
    contentPopup.style.display = 'none';
    phonePopup.style.display = 'none';
  });
});
