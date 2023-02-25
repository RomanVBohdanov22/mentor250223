import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const galleryMurkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li>
    <a class="gallery__item" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
    </li>
`;
  })
    .join('');
  
gallery.insertAdjacentHTML('afterbegin', galleryMurkup);

var lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: "alt",});
