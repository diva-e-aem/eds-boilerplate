import { getChildNodeText } from 'Utils/getChildNodeText.ts';

/**
 * Retrieves the integer value of the text content of a specified child node of an HTML element.
 * If the text content cannot be converted to an integer, returns 0.
 *
 * @param element - The HTML element containing the child node.
 * @param index - The index of the child node whose text content to retrieve.
 // eslint-disable-next-line max-len
 * @returns The integer value of the text content of the specified child node,
 * or 0 if it cannot be converted to an integer.
 */
export function getChildNodeInt(element: HTMLElement, index: number): number {
  return parseInt(getChildNodeText(element, index), 10) || 0;
}
