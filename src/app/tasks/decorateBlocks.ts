import { decorateBlock } from './decorateBlock';

/**
 * Decorate blocks with classes and data attributes.
 * @param {HTMLElement} main - Html main element
 */
export function decorateBlocks(main: HTMLElement | null) {
  main?.querySelectorAll<HTMLDivElement>('div.section > div > div').forEach((block) => {
    decorateBlock(block);
  });
}
