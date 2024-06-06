import { DebuggerService } from '@kluntje/services';

import { BlockMapping } from '../app.types';
import { loadCSS } from './loadCSS';

/**
 * Load the block styles. The styles should be named as the block name.
 * @param {BlockMapping} block - The block to load the styles for.
 * @returns {Promise<void>}
 */
export async function loadBlockStyles(block: BlockMapping) {
  try {
    await loadCSS(`dist/${block.name}/${block.name}.css`);
  } catch (error) {
    DebuggerService.error('loadBlockStyles: Could not load css styles.', error);
  }
}
