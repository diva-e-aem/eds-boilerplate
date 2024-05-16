/**
 * Decorate blocks with classes and data attributes.
 * @param {HTMLElement} main - Html main element
 */
export function decorateBlocks(main: HTMLElement) {
  main.querySelectorAll<HTMLDivElement>('div.section > div > div').forEach((block) => {
    const shortBlockName = block.classList[0];
    if (shortBlockName) {
      block.classList.add('block');
      block.dataset.blockName = shortBlockName;
      const blockWrapper = block.parentElement;
      blockWrapper?.classList.add(`${shortBlockName}-wrapper`);
      const section = block.closest('.section');
      if (section) section.classList.add(`${shortBlockName}-container`);
    }
  });
}
