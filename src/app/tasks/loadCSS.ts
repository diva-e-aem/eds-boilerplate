import { getUrlForEndpoint } from '../utils/getUrlForEndpoint';

/**
 * Load a CSS file if it is not already loaded append it to the head.
 * @param {string} endpoint - The endpoint of the CSS file.
 * @returns {Promise<void>}
 */
export function loadCSS(endpoint: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const { href } = getUrlForEndpoint(endpoint);

    if (!document.querySelector(`head > link[href="${href}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.onload = () => resolve();
      link.onerror = reject;
      document.head.append(link);
    } else {
      resolve();
    }
  });
}
