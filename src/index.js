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

document.addEventListener('DOMContentLoaded', function () {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const hamburgerMenu = document.querySelector('.hamburger-menu');

  hamburgerIcon.addEventListener('click', function () {
    hamburgerMenu.classList.toggle('show');
  });
});
