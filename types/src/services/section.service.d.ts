import { BlockService } from './block.service';
export declare class SectionService {
    private blockService;
    constructor(blockService: BlockService);
    init(container: HTMLElement): void;
    /**
     * Decorates all sections in a container element.
     * @param {Element} main The container element
     */
    private transformSection;
    private processSectionMetaData;
    private adjustMarkup;
    decorateImages(): void;
}
