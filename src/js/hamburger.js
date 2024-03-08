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