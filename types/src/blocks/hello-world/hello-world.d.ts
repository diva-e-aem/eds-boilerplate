/**
 * These are the imported components for the block.
 * They need to be imported so that Vite will bundle them as chunks that can be loaded.
 * Otherwise, the component will not be loaded with the block.
 */
import './../../components/icon/icon.ts';
/**
 * These are the imported styles for the block.
 * They need to be imported so that Vite will bundle them as chunks that can be loaded.
 * Otherwise, the styles would not be built into the dist directory.
 */
import './hello-world.scss';
/**
 * Each block has an exported default function. It receives the raw block
 * provided by EDS and is used to extract the arguments from it.
 * @param {HTMLImageElement} block The raw block element provided by EDS.
 */
export default function (block: HTMLImageElement): void;
