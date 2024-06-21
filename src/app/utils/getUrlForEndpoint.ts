import { getOrigin } from 'Helpers/sidekick/getOrigin';

/**
 * Constructs a complete URL for a given endpoint relative to the base URL.
 *
 * This function takes an endpoint as input and constructs a full URL using the
 * base URL derived from `window.hlx.codeBasePath` and the origin of the current
 * location. If the URL construction fails, an error is thrown.
 *
 * @param {string} endpoint - The endpoint to construct the URL for.
 * @returns {URL} - The constructed URL object.
 * @throws {Error} - Throws an error if the URL construction fails.
 *
 * @example
 * // Assuming window.hlx.codeBasePath is '/base/path/' and the origin is 'https://example.com'
 * const url = getUrlForEndpoint('/api/data');
 * console.log(url.toString()); // Output: 'https://example.com/base/path/api/data'
 */
export const getUrlForEndpoint = (endpoint: string): URL | never => {
  try {
    const location = getOrigin();
    const baseUrl = new URL(window.hlx.codeBasePath, location);
    return new URL(endpoint, baseUrl);
  } catch (error) {
    throw new Error(`Failed to build Url for endpoint: ${error}`);
  }
};
