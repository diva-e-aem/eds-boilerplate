// the blocks es module file should provide a default export,
// this function will receive the html element for the server side rendered markup for this block
// and it should "decorate" it according the design requirements
export interface BlockModule {
  default(blockEl: HTMLElement): Promise<void>;
}
