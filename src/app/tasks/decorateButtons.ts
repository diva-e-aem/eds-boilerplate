/**
 * Decorates paragraphs containing a single link as buttons.
 * @param {Element} element container element
 */
export function decorateButtons(element: Element) {
  element.querySelectorAll('a').forEach((a) => {
    a.title = a.title || a.textContent!;
    if (a.href !== a.textContent) {
      const up = a.parentElement!;
      const twoup = a.parentElement!.parentElement!;
      if (!a.querySelector('img')) {
        if (up.childNodes.length === 1 && (up.tagName === 'P' || up.tagName === 'DIV')) {
          a.className = 'button'; // default
          up.classList.add('button-container');
        }
        if (
          up.childNodes.length === 1 &&
          up.tagName === 'STRONG' &&
          twoup.childNodes.length === 1 &&
          twoup.tagName === 'P'
        ) {
          a.className = 'button primary';
          twoup.classList.add('button-container');
        }
        if (
          up.childNodes.length === 1 &&
          up.tagName === 'EM' &&
          twoup.childNodes.length === 1 &&
          twoup.tagName === 'P'
        ) {
          a.className = 'button secondary';
          twoup.classList.add('button-container');
        }
      }
    }
  });
}
