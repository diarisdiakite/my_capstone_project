const hideSocialDiv = document.getElementById('social');
const hidePartnersDiv = document.getElementById('partners');
const hideFooterDiv = document.getElementById('footer');
const hideArrow = document.getElementById('see-more');

window.addEventListener('load', () => {
  
  if (window.innerWidth < 768) {
    if (hideSocialDiv.classList.contains('my-display-desktop')) {
      hideSocialDiv.classList.add('hidden');
    }

    if (hidePartnersDiv.classList.contains('my-display-desktop')) {
      hidePartnersDiv.classList.add('hidden');
    }

    if (hideFooterDiv.classList.contains('my-display-desktop')) {
      hideFooterDiv.classList.add('hidden');
    }
  } else if (hideArrow.classList.contains('my-display-mobile')) {
    hideArrow.classList.add('hidden');
  }
});
