/**
 * Returns undefined if the value is an empty string, otherwise returns the value itself.
 *
 * @param {string} value - The value to check.
 * @returns {string | undefined} - If the value is an empty string, returns undefined
 * otherwise, returns the value itself.
 *
 * @example
 * // Example usage:
 * const emptyValue = '';
 * const nonEmptyValue = 'Hello, World!';
 *
 * const result1 = undefinedOnEmpty(emptyValue);
 * console.log(result1); // Output: undefined
 *
 * const result2 = undefinedOnEmpty(nonEmptyValue);
 * console.log(result2); // Output: 'Hello, World!'
 */
export function undefinedOnEmpty(value: string): string | undefined {
  return value.trim() === '' ? undefined : value;
}
