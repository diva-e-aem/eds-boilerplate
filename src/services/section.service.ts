import { toCamelCase } from '../utils/toCamelCase';
import { toClassName } from '../utils/toClassName';
import { BlockService } from './block.service';

export class SectionService {
  constructor(private blockService: BlockService) {}

  init(container: HTMLElement) {
    this.transformSection(container);
  }

  /**
   * Decorates all sections in a container element.
   * @param {Element} main The container element
   */
  private transformSection(main: HTMLElement) {
    main.querySelectorAll<HTMLDivElement>(':scope > div').forEach((section) => {
      this.adjustMarkup(section);
      this.processSectionMetaData(section);
    });
  }

  private processSectionMetaData(section: HTMLElement) {
    // Process section metadata
    const sectionMeta = section.querySelector('div.section-metadata');
    if (sectionMeta) {
      const meta = this.blockService.readBlockConfig(sectionMeta);
      Object.keys(meta).forEach((key) => {
        if (key === 'style') {
          const styles = meta.style
            .split(',')
            .filter((style: string) => style)
            .map((style: string) => toClassName(style.trim()));
          styles.forEach((style: string) => section.classList.add(style));
        } else {
          section.dataset[toCamelCase(key)] = meta[key];
        }
      });
      if (sectionMeta.parentElement) sectionMeta.parentElement.remove();
    }
  }

  private adjustMarkup(section: HTMLDivElement) {
    const wrappers: HTMLDivElement[] = [];
    let defaultContent = false;
    [...section.children].forEach((e) => {
      if (e.tagName === 'DIV' || !defaultContent) {
        const wrapper = document.createElement('div');
        wrappers.push(wrapper);
        defaultContent = e.tagName !== 'DIV';

        if (defaultContent) {
          wrapper.classList.add('default-content-wrapper');
        }
      }
      wrappers[wrappers.length - 1].append(e);
    });
    wrappers.forEach((wrapper) => section.append(wrapper));
    this.decorateImages();
    section.classList.add('section');
    section.dataset.sectionStatus = 'initialized';
    section.style.display = 'none';
  }

  decorateImages() {
    const picture = document.querySelectorAll('.default-content-wrapper picture');
    picture.forEach((item) => {
      const parentElement = item.parentElement;
      if (parentElement) {
        parentElement.classList.add('image', 'main');
      }
    });
  }
}
