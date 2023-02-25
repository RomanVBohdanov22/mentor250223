import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const galleryMurkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
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


gallery.insertAdjacentHTML('afterbegin', galleryMurkup);

gallery.addEventListener('click', basicLightboxModal);

function basicLightboxModal(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") return;
    const selectedImg = event.target.dataset.source;

    const instance = basicLightbox.create(`<img src=${selectedImg} width="800" height="600">`);
    instance.show();   
}
/*
Закриття з клавіатури
Увага

Наступний функціонал не обов'язковий для здавання завдання, але буде хорошою додатковою практикою.

Додай закриття модального вікна після натискання клавіші Escape. Зроби так, щоб прослуховування клавіатури було тільки доти, 
доки відкрите модальне вікно. Бібліотека basicLightbox містить метод для програмного закриття модального вікна.
*/