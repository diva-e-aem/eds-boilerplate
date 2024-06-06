/**
 * Converts a string into a valid CSS class name.
 *
 * @param {string} name - The string to convert into a CSS class name.
 * @returns {string} The converted CSS class name.
 *
 * @example
 * // Example usage:
 * const inputString = 'Hello, World!';
 * const cssClassName = toClassName(inputString);
 * console.log(cssClassName); // Output: 'hello-world'
 */
export function toClassName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^0-9a-z]/gi, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}
