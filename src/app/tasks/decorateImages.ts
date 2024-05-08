/*
 * This function is used to decorate images in the default content.
 * It adds the class 'image' and 'main' to the parent element of the image.
 */
export function decorateImages() {
  const picture = document.querySelectorAll('.default-content-wrapper picture');
  picture.forEach((item) => {
    const parentElement = item.parentElement;
    if (parentElement) {
      parentElement.classList.add('image', 'main');
    }
  });
}
