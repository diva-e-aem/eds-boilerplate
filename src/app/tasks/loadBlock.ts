import { BlockMapping } from '../app.types';
import { collectBlocks } from './collectBlocks';
import { loadBlockModules } from './loadBlockModules';
import { loadBlockStyles } from './loadBlockStyles';
import { showSection } from './showSection';

/**
 * Load the block modules and styles for a section and show the section.
 * @param {HTMLElement} section - The section to load the block modules and styles for.
 * @returns {Promise<void>}
 */
export async function loadBlock(section: HTMLElement) {
  const sectionsBlocks: BlockMapping[] = collectBlocks(section);

  if (!sectionsBlocks.length) {
    showSection(section);
    return;
  }

  const blockPromises: Promise<[void, void]>[] = [];

  for (const block of sectionsBlocks) {
    blockPromises.push(Promise.all([loadBlockModules(block), loadBlockStyles(block)]));
  }

  await Promise.all(blockPromises);
  showSection(section);
}
