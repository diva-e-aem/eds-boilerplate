import { BlockMapping } from '../app.types';
import { collectBlocks } from './collectBlocks';
import { loadBlockModules } from './loadBlockModules';
import { loadBlockStyles } from './loadBlockStyles';
import { showSection } from './showSection';

/**
 * Load the block modules and styles for a section and show the section.
 * @param section - The section to load the block modules and styles for.
 * @returns Promise<void>
 */
export async function loadBlock(section: HTMLElement) {
  const sectionsBlocks: BlockMapping[] = collectBlocks(section);

  if (!sectionsBlocks.length) {
    showSection(section);
    return;
  }

  for (const block of sectionsBlocks) {
    Promise.all([loadBlockModules(block), loadBlockStyles(block)]);
  }

  showSection(section);
}
