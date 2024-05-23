export interface BlockModule {
    default(blockEl: HTMLElement): Promise<void>;
}
