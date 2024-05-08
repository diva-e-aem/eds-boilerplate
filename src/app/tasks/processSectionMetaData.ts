import { toCamelCase } from 'Utils/toCamelCase';
import { toClassName } from 'Utils/toClassName';
import { readBlockConfig } from './readBlockConfig';

/*
  This function processes the metadata of a section and applies it to the section element.
  @param {HTMLElement} section The section element
*/
export function processSectionMetaData(section: HTMLElement) {
  const sectionMeta = section.querySelector('div.section-metadata');
  if (sectionMeta) {
    const meta = readBlockConfig(sectionMeta);
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
