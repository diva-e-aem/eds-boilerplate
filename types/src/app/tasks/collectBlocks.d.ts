import { BlockMapping } from '../app.types';
/**
 * Collect all blocks in a section.
 * @param section - The section to collect the blocks from.
 * @returns BlockMapping[]
 * @example
 * const blocks = collectBlocks(section);
 * console.log(blocks);
 * Output: [{ name: 'block1', element: HTMLElement }, { name: 'block2', element: HTMLElement }]
 */
export declare function collectBlocks(section: HTMLElement): BlockMapping[];
