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

  // Burger icon click handler
  hamburgerIcon.addEventListener('click', function () {
    // Switch the display of the burger and cross icons
    hamburgerIcon.style.display = 'none';
    closeIcon.style.display = 'block';
    // Show menu
    mobileMenu.classList.add('open');
  });

  // Click handler on the cross icon
  closeIcon.addEventListener('click', function () {
    // Switch the display of the cross and burger icons
    closeIcon.style.display = 'none';
    hamburgerIcon.style.display = 'block';
    // Hide the menu
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

// Form-Popup

document.addEventListener('DOMContentLoaded', function () {
  const popup = document.querySelector('.phone-popup-form-popup');
  const contentPopup = document.querySelector('.form-popup');
  const formCloseIcon = document.querySelector('.form-close-icon');
  const phonePopup = document.querySelector('.phone-popup-mobile');

  popup.addEventListener('click', function () {
    contentPopup.style.display =
      contentPopup.style.display === 'none' ? 'block' : 'none';
      phonePopup.style.display === 'none'
  });

  formCloseIcon.addEventListener('click', function () {
    contentPopup.style.display = 'none';
    phonePopup.style.display = 'none';
  });
});

