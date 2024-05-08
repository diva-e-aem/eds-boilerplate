export interface Config {
    mainTsPath: string;
    mainScssPath: string;
    iconsDirPath: string;
    iconsTypesPath: string;
    fontsScssPath?: string;
    fontsCssPath?: string;
    lazyStylesScssPath?: string;
    lazyStylesCssPath?: string;
    sidekickLibraryStylesScssPath?: string;
    sidekickLibraryStylesCssPath?: string;
    lcpBlocks?: string[];
}
export declare const config: Config;
