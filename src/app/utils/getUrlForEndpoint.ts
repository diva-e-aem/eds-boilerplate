import { getOrigin } from '../../helpers/sidekick/getOrigin';

/**
 * Constructs a complete URL for a given endpoint relative to the base URL.
 * The base URL is derived from `window.hlx.codeBasePath` and the current location.
 * This helper respolves URLs for assets in different AEM contexts. (author, publish, local development, sidekick library etc.)
 * @param {string} endpoint - The endpoint of the asset or fetch request.
 * @returns {URL} - The complete URL for the given endpoint.
 *
 * @example
 * // Assuming window.hlx.codeBasePath is '/base/path/' and the origin is 'https://example.com'
 * const url = getUrlForEndpoint('/api/data');
 * console.log(url.href); // Output: 'https://example.com/base/path/api/data'
 */
export const getUrlForEndpoint = (endpoint: string): URL | never => {
  try {
    const location = getOrigin();
    const basePath = window.hlx.codeBasePath.endsWith('/') ? window.hlx.codeBasePath : `${window.hlx.codeBasePath}/`;
    let normalizedEndpoint = endpoint;

    if (endpoint.startsWith('./')) {
      normalizedEndpoint = endpoint.substring(2);
    } else if (endpoint.startsWith('/')) {
      normalizedEndpoint = endpoint.substring(1);
    }

    const fullPath = `${basePath}${normalizedEndpoint}`;
    const url = new URL(fullPath, location);

    return url;
  } catch (error) {
    throw new Error(`Failed to build Url for endpoint: ${error}`);
  }
};
