import { toClassName } from 'Utils/toClassName';

/**
 * Adds CSS classes to an HTML element.
 *
 * @param {HTMLElement} element - The HTML element to which classes will be added.
 * @param {string} classes - A string containing CSS classes separated by commas.
 *
 * @example
 * const element = document.getElementById('myElement');
 * const classesToAdd = 'class1, class2, class3';
 * addClasses(element, classesToAdd);
 */
export const addClasses = (element: HTMLElement, classes: string): void => {
  classes.split(',').forEach((cssClass: string): void => {
    element.classList.add(toClassName(cssClass.trim()));
  });
};
