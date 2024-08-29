/*
 * Fragment Block
 * Include content on a page as a fragment.
 * https://www.aem.live/developer/block-collection/fragment
 */

import { loadBlocks } from '../../app/tasks/loadBlocks.js';
import './fragment.scss';
import { decorateButtons } from '../../app/tasks/decorateButtons.js';
import { transformSections } from '../../app/tasks/transformSections.js';
import { decorateBlocks } from '../../app/tasks/decorateBlocks.js';

/**
 * Loads a fragment.
 * @param {string} path The path to the fragment
 * @returns {HTMLElement} The root element of the fragment
 */
export async function loadFragment(path: string) {
  if (path && path.startsWith('/')) {
    // eslint-disable-next-line no-param-reassign
    path = path.replace(/(\.plain)?\.html/, '');
    const resp = await fetch(`${path}.plain.html`);
    if (resp.ok) {
      const main = document.createElement('main');
      main.innerHTML = await resp.text();

      // reset base path for media to fragment base
      const resetAttributeBase = (tag: string, attr: string) => {
        main.querySelectorAll(`${tag}[${attr}^="./media_"]`).forEach((elem) => {
          elem[attr] = new URL(elem.getAttribute(attr) ?? '', new URL(path, window.location.origin)).href;
        });
      };
      resetAttributeBase('img', 'src');
      resetAttributeBase('source', 'srcset');

      decorateButtons(main);
      transformSections(main);
      decorateBlocks(main);
      await loadBlocks(main);
      return main;
    }
  }
  return null;
}

export default async function decorate(block: HTMLElement) {
  const link = block.querySelector('a');
  const path = link ? link.getAttribute('href') : block.textContent?.trim();
  if (!path) return;
  const fragment = await loadFragment(path);
  if (fragment) {
    const fragmentSection = fragment.querySelector(':scope .section');
    if (fragmentSection) {
      block.classList.add(...fragmentSection.classList);
      block.classList.remove('section');
      block.replaceChildren(...fragmentSection.childNodes);
    }
  }
}
