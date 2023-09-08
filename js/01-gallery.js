import { galleryItems } from "./gallery-items.js";

// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const galleryImageList = galleryItems
  .map((image) => {
    return `<li class="gallery__item">
      <a class="gallery__link" href="${image.original}">
        <img class="gallery__image" src="${image.preview}" alt="${image.description}" data-source="${image.original}" />
      </a>
    </li>`;
  })
  .join("");
// .replace(/"/g, "");
galleryList.insertAdjacentHTML("beforeend", galleryImageList);

const event = document.querySelector("ul.gallery");
let instance;

event.addEventListener("click", onClick);
function onClick(event) {
  event.preventDefault();
  if (event.target.nodeName === "IMG") {
    const newUrl = event.target.parentElement.getAttribute("href");
    instance = basicLightbox.create(
      `<img src="${newUrl}" width="1280" height="850"/>`
    );
    instance.show();

    document.addEventListener("keydown", onEscape);
  }

  console.log(event.target);
}
function onEscape(event) {
  if (event.key === "Escape") {
    instance.close();

    document.removeEventListener("keydown", onEscape);
  }
}
