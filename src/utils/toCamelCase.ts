import { toClassName } from 'Utils/toClassName';

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
export function toCamelCase(name: string): string {
  if (/^[a-z][A-Za-z0-9]*$/.test(name)) {
    return name;
  }

  if (/^[A-Z][A-Za-z0-9]*$/.test(name)) {
    return name.charAt(0).toLowerCase() + name.slice(1);
  }

  return toClassName(name).replace(/-([a-z])/g, (g: string) => g[1].toUpperCase());
}
