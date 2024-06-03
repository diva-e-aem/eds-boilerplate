import { isSidekickLibraryActive } from './isSidekickLibraryActive';

/**
 * Returns the true origin of the current page in the browser.
 * If the page is running in an iframe with srcdoc, the ancestor origin is returned.
 * @returns {String} The true origin
 *
 * @example
 * const origin = getOrigin();
 *
 * @remarks
 * Needs to be used when the Sidekick Library Plugin is in use.
 */
export function getOrigin(): string {
  return isSidekickLibraryActive() ? window.parent.location.origin : window.location.origin;
}
