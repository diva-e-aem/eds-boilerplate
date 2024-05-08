/**
 * Wraps an HTML element with another HTML element.
 *
 * @param {HTMLElement} element - The HTML element to wrap.
 * @param {HTMLElement} wrapper - The HTML element to use as a wrapper.
 * @returns {void}
 *
 * @example
 * // Example usage:
 * const elementToWrap = document.getElementById('element-to-wrap');
 * const wrapperElement = document.createElement('div');
 *
 * wrap(elementToWrap, wrapperElement);
 */
export function wrap(element: HTMLElement, wrapper: HTMLElement): void {
  element.parentNode?.insertBefore(wrapper, element);
  wrapper.appendChild(element);
}
