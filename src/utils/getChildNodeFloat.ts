import { getChildNodeText } from 'Utils/getChildNodeText.ts';

/**
 * Retrieves the floating point value of the text content of a specified child node of an HTML element.
 * If the text content cannot be converted to a floating point number, returns 0.
 *
 * @param element - The HTML element containing the child node.
 * @param index - The index of the child node whose text content to retrieve.
 * @returns The floating point value of the text content of the specified child node,
 * or 0 if it cannot be converted to a floating point number.
 */
export function getChildNodeFloat(element: HTMLElement, index: number): number {
  return parseFloat(getChildNodeText(element, index)) || 0;
}
