import { BlockMapping } from '../app.types';
/**
 * Load the es module for the block. The module should be named as the block name.
 * @param block - The block to load the module for.
 * @returns Promise<void>
 */
export declare function loadBlockModules(block: BlockMapping): Promise<void>;
