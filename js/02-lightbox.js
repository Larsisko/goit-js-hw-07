import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
const galleryImageList = galleryItems
  .map((image) => {
    return `<li class="gallery__item">
      <a class="gallery__link" href="${image.original}">
        <img class="gallery__image" src="${image.preview}" alt=""${image.description}"" title="${image.description}" data-source="${image.original}" />
      </a>
    </li>`;
  })
  .join("");

galleryList.insertAdjacentHTML("beforeend", galleryImageList);
const lightbox = new SimpleLightbox(".gallery a", {
  captionPosition: "outside",
  captionDelay: 250,
  nav: false,
  close: false,
  showCounter: false,
  captions: true,
  captionDelay: 250,
  captionData: "alt",
  disableScroll: true,
  scrollZoom: false,
});
