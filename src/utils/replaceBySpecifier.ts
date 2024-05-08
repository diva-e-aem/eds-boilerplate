/**
 * Represents the structure of an object used to specify replacements in a string.
 *
 * @interface ReplaceBySpecifier
 * @property {string} input - The input string where replacements will be made.
 * @property {string} specifier - The specifier string to search for in the input.
 * @property {string} htmlTag - The HTML tag to wrap around the parts matched by the specifier.
 */
interface ReplaceBySpecifier {
  input: string;
  specifier: string;
  htmlTag: string;
}

/**
 * Replaces occurrences of a specified specifier in a string with an HTML tag.
 *
 * @param {ReplaceBySpecifier} param - An object containing input string, specifier, and HTML tag.
 * @param {string} param.input - The input string where replacements will be made.
 * @param {string} param.specifier - The specifier string to search for in the input.
 * @param {string} param.htmlTag - The HTML tag to wrap around the parts matched by the specifier.
 * @returns {string} - The modified string with replacements.
 *
 @example
 * // Example 1:
  * const result1 = replaceBySpecifier({
  *   input: 'This is a test string with some test keywords.',
  *   specifier: 'test',
  *   htmlTag: 'strong'
  * });
  * console.log(result1);
  * // Output: 'This is a <strong> string with some </strong> keywords.'
  *
  * // Example 2:
  * const result2 = replaceBySpecifier({
  *   input: 'Hello, world!',
  *   specifier: ',',
  *   htmlTag: 'span'
  * });
  * console.log(result2);
  * // Output: 'Hello<span> world!</span>'
 */
export function replaceBySpecifier({ input, specifier, htmlTag }: ReplaceBySpecifier): string {
  if (specifier === '' || htmlTag === '') return input;
  return input
    .split(specifier)
    .map((part: string, index: number): string => (index % 2 === 1 ? `<${htmlTag}>${part}</${htmlTag}>` : part))
    .join('');
}
