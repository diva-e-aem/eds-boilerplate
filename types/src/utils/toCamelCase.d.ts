/**
 * Sanitizes a string for use as a JavaScript property name.
 *
 * @param {string} name - The unsanitized string.
 * @returns {string} - The camelCased name.
 *
 * @example
 * // Example usage:
 * const unsanitizedString = 'background-color';
 * const camelCasedName = toCamelCase(unsanitizedString);
 * console.log(camelCasedName); // Output: 'backgroundColor'
 */
export declare function toCamelCase(name: string): string;
