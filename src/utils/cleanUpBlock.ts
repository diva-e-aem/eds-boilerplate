/**
 * Cleans up a block by removing its inner HTML content and resetting its display property.
 * @param {HTMLElement} block - The HTML element representing the block to clean up.
 * @returns {void}
 *
 * @remarks
 * This function is useful for resetting a block's state or content.
 */
export const cleanUpBlock = (block: HTMLElement): void => {
  while (block.firstChild) {
    block.removeChild(block.firstChild);
  }

  block.style.removeProperty('display');
};
