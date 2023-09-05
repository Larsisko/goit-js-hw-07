import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const galleryImageList = galleryItems
  .map((image) => {
    return `<li class="gallery__item">
      <a class="gallery__link" href="${image.original}">
        <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
      </a>
    </li>`;
  })
  .join("")
  .replace(/"/g, "");

galleryList.insertAdjacentHTML("beforeend", galleryImageList);

const event = document.querySelector("ul.gallery");
event.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName === "IMG") {
    const newUrl = event.target.getAttribute("src");
    const newUrLightBox = basicLightbox.create(
      `<img scr="${newUrl}" width="800px" height="600px"/>`
    );
    newUrLightBox.show();
  }
});
