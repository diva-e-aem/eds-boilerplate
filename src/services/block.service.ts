import { toClassName } from '../utils/toClassName';

export class BlockService {
  //TODO: Provider for fetch data

  /**
   * Extracts the config from a block.
   * @param {Element} block The block element
   * @returns {object} The block config
   */
  readBlockConfig(block: Element): Record<string, any> {
    const config: Record<any, any> = {};
    block.querySelectorAll(':scope > div').forEach((row) => {
      if (row.children) {
        const cols = [...row.children];
        if (cols[1]) {
          const col = cols[1];
          const name = toClassName(cols[0].textContent ?? '');
          let value: any = '';
          if (col.querySelector('a')) {
            const as = [...col.querySelectorAll('a')];
            if (as.length === 1) {
              value = as[0].href;
            } else {
              value = as.map((a) => a.href);
            }
          } else if (col.querySelector('img')) {
            const imgs = [...col.querySelectorAll('img')];
            if (imgs.length === 1) {
              value = imgs[0].src;
            } else {
              value = imgs.map((img) => img.src);
            }
          } else if (col.querySelector('p')) {
            const ps = [...col.querySelectorAll('p')];
            if (ps.length === 1) {
              value = ps[0].textContent;
            } else {
              value = ps.map((p) => p.textContent);
            }
          } else value = row.children[1].textContent;
          config[name] = value;
        }
      }
    });
    return config;
  }

  /**
   * Decorates all blocks in a container element.
   * @param {Element} main The container element
   */
  decorateBlocks(main: HTMLElement) {
    main.querySelectorAll<HTMLDivElement>('div.section > div > div').forEach(this.decorateBlock);
  }

  /**
   * Decorates a block.
   * @param {Element} block The block element
   */
  private decorateBlock(block: HTMLElement) {
    const shortBlockName = block.classList[0];
    if (shortBlockName) {
      block.classList.add('block');
      block.dataset.blockName = shortBlockName;
      const blockWrapper = block.parentElement;
      blockWrapper?.classList.add(`${shortBlockName}-wrapper`);
      const section = block.closest('.section');
      if (section) section.classList.add(`${shortBlockName}-container`);
    }
  }
}
