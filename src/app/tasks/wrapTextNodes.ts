/**
 * Wrap inline text content of block cells within a <p> tag.
 * @param {Element} block the block element
 */
export function wrapTextNodes(block: HTMLElement) {
  const validWrappers = ['P', 'PRE', 'UL', 'OL', 'PICTURE', 'TABLE', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'];

  const wrap = (el: HTMLElement) => {
    const wrapper = document.createElement('p');
    wrapper.append(...el.childNodes);
    [...el.attributes]
      // move the instrumentation from the cell to the new paragraph, also keep the class
      // in case the content is a buttton and the cell the button-container
      .filter(
        ({ nodeName }) =>
          nodeName === 'class' || nodeName.startsWith('data-aue') || nodeName.startsWith('data-richtext')
      )
      .forEach(({ nodeName, nodeValue }) => {
        wrapper.setAttribute(nodeName, nodeValue || '');
        el.removeAttribute(nodeName);
      });
    el.append(wrapper);
  };

  block.querySelectorAll(':scope > div > div').forEach((blockColumn: HTMLElement) => {
    if (blockColumn.hasChildNodes()) {
      const hasWrapper =
        Boolean(blockColumn.firstElementChild) &&
        validWrappers.some((tagName) => blockColumn?.firstElementChild?.tagName === tagName);
      if (!hasWrapper) {
        wrap(blockColumn);
      } else if (
        blockColumn.firstElementChild?.tagName === 'PICTURE' &&
        (blockColumn.children.length > 1 || Boolean(blockColumn.textContent?.trim()))
      ) {
        wrap(blockColumn);
      }
    }
  });
}
