/**
 * Get the URL for an endpoint.
 * @param endpoint - The endpoint.
 * @returns URL
 * @example
 * const url = getUrlForEndpoint('block1/block1.css');
 * console.log(url);
 * Output: URL { href: 'http://localhost:3000/block1/block1.css' }
 */
export const getUrlForEndpoint = (endpoint: string): URL => {
  const baseUrl = new URL(window.hlx.codeBasePath, window.location.origin);
  return new URL(endpoint, baseUrl);
};
