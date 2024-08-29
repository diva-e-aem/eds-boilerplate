import { moveInstrumentation } from 'Helpers/moveInstrumentation';
import { createOptimizedPicture } from 'Utils/createOptimizedPicture';
import './cards.scss';

export default function decorate(block: Element) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    moveInstrumentation(row, li);
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';
    });
    ul.append(li);
  });
  ul.querySelectorAll('picture > img').forEach((img) => {
    const currentImg = img as HTMLImageElement;
    const optimizedPic = createOptimizedPicture({
      src: currentImg.src,
      alt: currentImg.alt,
      eager: false,
      width: currentImg.width,
      height: currentImg.height,
    });
    moveInstrumentation(currentImg, optimizedPic?.querySelector('img') as HTMLImageElement);
    if (optimizedPic) {
      currentImg.closest('picture')?.replaceWith(optimizedPic);
    }
  });
  block.textContent = '';
  block.append(ul);
}
