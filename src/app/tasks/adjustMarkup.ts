import { decorateImages } from './decorateImages';

/**
 * This function is used to adjust the markup of a section.
 * It wraps the default content in a div with the class 'default-content-wrapper'.
 * It also adds the class 'section' to the section element.
 * It decorates the images in the default content by calling the 'decorateImages' function.
 * It sets the 'data-section-status' attribute to 'initialized'.
 * It hides the section element.
 * @param {HTMLDivElement} section - The section element to adjust.
 */
export function adjustMarkup(section: HTMLDivElement) {
  const wrappers: HTMLDivElement[] = [];
  let defaultContent = false;
  [...section.children].forEach((e) => {
    if (e.tagName === 'DIV' || !defaultContent) {
      const wrapper = document.createElement('div');
      wrappers.push(wrapper);
      defaultContent = e.tagName !== 'DIV';

      if (defaultContent) {
        wrapper.classList.add('default-content-wrapper');
      }
    }
    wrappers[wrappers.length - 1].append(e);
  });
  wrappers.forEach((wrapper) => section.append(wrapper));
  decorateImages();
  section.classList.add('section');
  section.dataset.sectionStatus = 'initialized';
  section.style.display = 'none';
}
