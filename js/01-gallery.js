import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const markup = createMark(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", markup);
galleryEl.addEventListener("click", getImgsrc);

function getImgsrc(event) {
    event.preventDefault();
  if (event.target.tagName !== "IMG") return;
  const dataGallary = event.target.dataset.source;
  const instance = basicLightbox.create(
    `<div class="modal">
      <img src="${dataGallary}" alt="cartoons" width="1000"/>
    </div>
`
  );

  instance.show();
}


function createMark(items) {
    return items.map(item =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`).join('')
}


