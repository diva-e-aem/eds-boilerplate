import { wrapTextNodes } from './wrapTextNodes';

/**
 * Decorate block with classes and data attributes.
 * @param {HTMLElement | null} block - Html block element
 */
export function decorateBlock(block: HTMLElement | null) {
  if (block) {
    const shortBlockName = block.classList[0];
    if (shortBlockName && !block.dataset.blockStatus) {
      block.classList.add('block');
      block.dataset.blockName = shortBlockName;
      block.dataset.blockStatus = 'initialized';
      wrapTextNodes(block);
      const blockWrapper = block.parentElement;
      blockWrapper?.classList.add(`${shortBlockName}-wrapper`);
      const section = block.closest('.section');
      if (section) section.classList.add(`${shortBlockName}-container`);
    }
  }
}
