// // Popup

// document.addEventListener('DOMContentLoaded', function () {
//   const mobileSvg = document.querySelector('.mobile-svg');
//   const phonePopup = document.querySelector('.phone-popup-mobile');

//   mobileSvg.addEventListener('click', function () {
//     phonePopup.style.display =
//       phonePopup.style.display === 'none' ? 'block' : 'none';
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  const mobileSvg = document.querySelector('.mobile-svg');
  const phonePopup = document.querySelector('.phone-popup-mobile');
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const closeIcon = document.querySelector('.close-icon');

  mobileSvg.addEventListener('click', function () {
    phonePopup.style.display =
      phonePopup.style.display === 'none' ? 'block' : 'none';

    if (phonePopup.style.display === 'block') {
      hamburgerIcon.style.display = 'none';
      closeIcon.style.display = 'block';

      closeIcon.querySelector('path').setAttribute('stroke', 'white');
    } else {
      closeIcon.style.display = 'none';
      hamburgerIcon.style.display = 'block';
    }
  });

  closeIcon.addEventListener('click', function () {
    phonePopup.style.display = 'none';

    closeIcon.style.display = 'none';
    hamburgerIcon.style.display = 'block';
  });

  hamburgerIcon.addEventListener('click', function () {
    closeIcon.querySelector('path').setAttribute('stroke', 'currentColor');
  });
});