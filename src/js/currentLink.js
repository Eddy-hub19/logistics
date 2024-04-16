document.addEventListener('DOMContentLoaded', function () {
  const langLinks = document.querySelectorAll('.lang a');

  langLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      langLinks.forEach(function (el) {
        el.classList.remove('current'); // Remove the 'current' class from all links
      });
      link.classList.add('current'); // Add the 'current' class to the selected link
    });
  });
});
