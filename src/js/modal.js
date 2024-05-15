// Function to check if the screen is mobile or tablet
export const isMobileOrTablet = () => {
  const screenWidth = window.innerWidth;
  const isMobile = screenWidth <= 768;
  const isTablet = screenWidth > 768 && screenWidth <= 1439;

  return isMobile || isTablet;
};

// Function to open the popup on mobile or tablet screen
export const openPopupOnMobileOrTablet = event => {
  if (isMobileOrTablet()) {
    event.preventDefault();
    const popup = document.querySelector('.phone-modal-popup');
    if (popup) {
      popup.style.display = 'block';
      setTimeout(() => {
        popup.style.opacity = '1';
      }, 10);
    }
  }
};

// Function to close the popup
export const closePopup = () => {
  const popup = document.querySelector('.phone-modal-popup');
  if (popup) {
    popup.style.opacity = '0';
    setTimeout(() => {
      popup.style.display = 'none';
    }, 500);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const openModalBtns = document.querySelectorAll('.openModalBtnClass');
  console.log(openModalBtns);
  openModalBtns.forEach(openModalBtn => {
    openModalBtn.addEventListener('click', event => {
      openPopupOnMobileOrTablet(event);
    });
  });
});

// Event listener for closing the popup when clicking on the close icon
document.addEventListener('DOMContentLoaded', () => {
  const closeIcon = document.querySelector('.close-icon-form');
  if (closeIcon) {
    closeIcon.addEventListener('click', closePopup);
  }
});
