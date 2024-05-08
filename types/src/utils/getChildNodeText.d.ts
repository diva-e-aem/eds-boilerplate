/**
 * Retrieves the text content of a child node of the given element at the specified index.
 * @param {HTMLElement} element The parent element from which to retrieve the child node.
 * @param {number} index The index of the child node to retrieve.
 * @returns {string} The text content of the child node, trimmed of leading and trailing whitespace,
 * or an empty string if the child node or its text content is unavailable.
 */
export declare function getChildNodeText(element: HTMLElement, index: number): string;
