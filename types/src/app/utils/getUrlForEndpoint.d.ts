/**
 * Get the URL for an endpoint.
 * @param {string} endpoint - The endpoint.
 * @returns {URL}
 * @example
 * const url = getUrlForEndpoint('block1/block1.css');
 * console.log(url);
 * Output: URL { href: 'http://localhost:3000/block1/block1.css' }
 */
export declare const getUrlForEndpoint: (endpoint: string) => URL;
