/**
 * Verifies if the Sidekick Library Plugin is in use by checking if the page is running in an iframe with srcdoc
 * and if the main element has the sidekick-library class.
 * @returns {boolean} Whether the Sidekick Library Plugin is in use.
 */
export const isSidekickLibraryActive = (): boolean => {
  const main = document.querySelector('#main');
  if (!main) return false;
  return window.location.href === 'about:srcdoc' && main.classList.contains('sidekick-library');
};
