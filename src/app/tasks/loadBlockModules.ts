import { DebuggerService } from '@kluntje/services';
import { BlockMapping } from '../app.types';
import { getUrlForEndpoint } from '../utils/getUrlForEndpoint';

/*
 * Load the es module for the block. The module should be named as the block name.
 * @param block - The block to load the module for.
 * @returns Promise<void>
 */
export async function loadBlockModules(block: BlockMapping): Promise<void> {
  const status = block.element.dataset.blockStatus;
  if (status !== 'loading' && status !== 'loaded') {
    try {
      block.element.dataset.blockStatus = 'loading';
      const { href } = getUrlForEndpoint(`dist/${block.name}/${block.name}.js`);
      const blockModule = await import(href);

      if (blockModule.default) {
        await blockModule.default(block.element);
      }

      block.element.dataset.blockStatus = 'loaded';
    } catch (error) {
      block.element.dataset.blockStatus = 'error';
      DebuggerService.error('laodBloackModules:', error);
    }
  }
}
