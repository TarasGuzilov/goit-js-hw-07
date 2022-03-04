import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

galleryRef.addEventListener('click', onGalleryImageClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>
      `;
    })
    .join('');
}


function onGalleryImageClick(e) {
  window.addEventListener('keydown', onEscKeyPress);
  e.preventDefault();

  if (!e.target.classList.contains('gallery__image')) {
    return;
  };
  
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}">
  `);

  instance.show();

  function onEscKeyPress(e) {
    const ESC_KEY_CODE = 'Escape';
    if (e.code === ESC_KEY_CODE) {
      instance.close();
      window.removeEventListener('keydown', onEscKeyPress);
    };
  };

}
