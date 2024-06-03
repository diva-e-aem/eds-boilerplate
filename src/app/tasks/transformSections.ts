import { adjustMarkup } from './adjustMarkup';
import { processSectionMetaData } from './processSectionMetaData';

/**
 * This function is used to transform the sections of the main element.
 * It adjusts the markup of each section by calling the 'adjustMarkup' function.
 * It processes the metadata of each section by calling the 'processSectionMetaData' function.
 * @param {HTMLElement} main - The main element to transform.
 */
export function transformSection(main: HTMLElement) {
  main.querySelectorAll<HTMLDivElement>(':scope > div').forEach((section) => {
    adjustMarkup(section);
    processSectionMetaData(section);
  });
}
