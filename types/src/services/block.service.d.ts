export declare class BlockService {
    /**
     * Extracts the config from a block.
     * @param {Element} block The block element
     * @returns {object} The block config
     */
    readBlockConfig(block: Element): Record<string, any>;
    /**
     * Decorates all blocks in a container element.
     * @param {Element} main The container element
     */
    decorateBlocks(main: HTMLElement): void;
    /**
     * Decorates a block.
     * @param {Element} block The block element
     */
    private decorateBlock;
}
