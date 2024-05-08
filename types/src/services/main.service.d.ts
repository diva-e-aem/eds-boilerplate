import { BlockService } from './block.service';
import { SectionService } from './section.service';
type BlockMapping = {
    name: string;
    element: HTMLDivElement;
};
export declare class MainService {
    private sectionService;
    private blockService;
    private lcpBlocks;
    constructor(sectionService: SectionService, blockService: BlockService);
    init: () => Promise<void>;
    /**
     * Setup block utils.
     */
    private setup;
    private loadEager;
    private loadLazy;
    /**
     * Decorates the template and theme by adding classes to the body.
     * The classes are defined in the meta tags of the document.
     * @private
     * @memberof MainService
     * @returns {void}
     * @example
     * <meta name="template" content="template-name">
     * <meta name="theme" content="theme-name">
     * @example
     * <body class="template-name theme-name">
     */
    private decorateTemplateAndTheme;
    /**
     * Loads Blocks
     * by getting all sections and load every block in every section
     * and shows every section that is finished loading.
     */
    private loadBlocks;
    private collectBlocks;
    private loadBlockModules;
    loadBlockStyles(block: BlockMapping): Promise<void>;
    private showSection;
    private loadFonts;
    private loadCSS;
    private waitForLCP;
    private loadBlock;
}
export {};
