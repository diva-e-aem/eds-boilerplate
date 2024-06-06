import { DebuggerService } from '@kluntje/services';

import type { BlockModule } from 'Types/BlockModule.types';

import { BlockMapping } from '../app.types';
import { getUrlForEndpoint } from '../utils/getUrlForEndpoint';

enum Status {
  unloaded = 'unloaded',
  loading = 'loading',
  loaded = 'loaded',
  error = 'error',
}

/**
 * Load the es module for the block. The module should be named as the block name.
 * @param {BlockMapping} block - The block to load the module for.
 * @returns {Promise<void>}
 */
export async function loadBlockModules(block: BlockMapping): Promise<void> {
  const blockStatus = (block.element.dataset.blockStatus as Status | undefined) ?? Status.unloaded;

  if (blockStatus === Status.unloaded) {
    try {
      block.element.dataset.blockStatus = Status.loading;
      const { href } = getUrlForEndpoint(`dist/${block.name}/${block.name}.js`);
      const blockModule = (await import(href)) as BlockModule;

      if (blockModule.default) {
        await blockModule.default(block.element);
      }

      block.element.dataset.blockStatus = Status.loaded;
    } catch (error) {
      block.element.dataset.blockStatus = Status.error;
      DebuggerService.error('loadBlockModules:', error);
    }
  }
}
