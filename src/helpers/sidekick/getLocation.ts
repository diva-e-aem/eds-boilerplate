import { isSidekickLibraryActive } from './isSidekickLibraryActive';

/**
 * Returns the true origin of the current page in the browser.
 * If the page is running in an iframe with srcdoc, the query param is returned.
 * @returns {String} The query param of the current page or the query param of the block running in the library
 *
 * @example
 * const searchParams = new URLSearchParams(getLocation().search);
 *
 * @remarks
 * Needs to be used when the Sidekick Library Plugin is in use.
 */
export function getLocation(): Location {
  return isSidekickLibraryActive() ? window.parent.location : window.location;
}
