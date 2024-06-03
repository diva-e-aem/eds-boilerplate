import { BlockMapping } from '../app.types';

/**
 * Collect all blocks in a section.
 * @param {HTMLElement} section - The section to collect the blocks from.
 * @returns {BlockMapping[]}
 * @example
 * const blocks = collectBlocks(section);
 * console.log(blocks);
 * Output: [{ name: 'block1', element: HTMLElement }, { name: 'block2', element: HTMLElement }]
 */
export function collectBlocks(section: HTMLElement): BlockMapping[] {
  const blockMap: BlockMapping[] = [];
  const blocksElements = section.querySelectorAll<HTMLDivElement>('[data-block-name]');

  blocksElements.forEach((block: HTMLDivElement) => {
    blockMap.push({
      name: block.dataset.blockName as string,
      element: block,
    });
  });

  return blockMap;
}
