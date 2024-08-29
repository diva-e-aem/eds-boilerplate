/* eslint-disable */
/* TODO: fix eslint issues and types*/
import { decorateBlock } from '../tasks/decorateBlock';
import { decorateBlocks } from '../tasks/decorateBlocks';
import { decorateButtons } from '../tasks/decorateButtons';
import { loadBlock } from '../tasks/loadBlock';
import { loadBlocks } from '../tasks/loadBlocks';
import { transformSections } from '../tasks/transformSections';
import { decorateRichtext } from './editor-support-rte';

async function applyChanges(event) {
  // redecorate default content and blocks on patches (in the properties rail)
  const { detail } = event;

  const resource =
    detail?.request?.target?.resource || // update, patch components
    detail?.request?.target?.container?.resource || // update, patch, add to sections
    detail?.request?.to?.container?.resource; // move in sections
  if (!resource) return false;
  const updates = detail?.response?.updates;
  if (!updates.length) return false;
  const { content } = updates[0];
  if (!content) return false;

  const parsedUpdate = new DOMParser().parseFromString(content, 'text/html');
  const element = document.querySelector(`[data-aue-resource="${resource}"]`);

  if (element) {
    if (element.matches('main')) {
      const newMain = parsedUpdate.querySelector<HTMLElement>(`[data-aue-resource="${resource}"]`);
      if (newMain) {
        newMain.style.display = 'none';
        element.insertAdjacentElement('afterend', newMain);
        decorateButtons(newMain);
        transformSections(newMain);
        decorateBlocks(newMain);
        decorateRichtext(newMain);
        await loadBlocks(newMain);
        element.remove();
        newMain.style.removeProperty('display');
        // eslint-disable-next-line no-use-before-define
        attachEventListners(newMain);
      }
      return true;
    }

    const block =
      element.parentElement?.closest('.block[data-aue-resource]') || element?.closest('.block[data-aue-resource]');
    if (block) {
      const blockResource = block.getAttribute('data-aue-resource');
      const newBlock = parsedUpdate.querySelector<HTMLElement>(`[data-aue-resource="${blockResource}"]`);
      if (newBlock) {
        newBlock.style.display = 'none';
        block.insertAdjacentElement('afterend', newBlock);
        decorateButtons(newBlock);
        decorateBlock(newBlock);
        decorateRichtext(newBlock);
        await loadBlock(newBlock);
        block.remove();
        newBlock.style.removeProperty('display');
        return true;
      }
    } else {
      // sections and default content, may be multiple in the case of richtext
      const newElements = parsedUpdate.querySelectorAll<HTMLElement>(
        `[data-aue-resource="${resource}"],[data-richtext-resource="${resource}"]`
      );
      if (newElements.length) {
        const { parentElement } = element;
        if (element.matches('.section')) {
          const [newSection] = newElements;
          newSection.style.display = 'none';
          element.insertAdjacentElement('afterend', newSection);
          decorateButtons(newSection);
          decorateRichtext(newSection);
          transformSections(parentElement);
          decorateBlocks(parentElement);
          await loadBlocks(parentElement);
          element.remove();
          newSection.style.removeProperty('display');
        } else {
          element.replaceWith(...newElements);
          decorateButtons(parentElement);
          decorateRichtext(parentElement);
        }
        return true;
      }
    }
  }

  return false;
}

function attachEventListners(main) {
  ['aue:content-patch', 'aue:content-update', 'aue:content-add', 'aue:content-move', 'aue:content-remove'].forEach(
    (eventType) =>
      main?.addEventListener(eventType, async (event) => {
        event.stopPropagation();
        const applied = await applyChanges(event);
        if (!applied) window.location.reload();
      })
  );
}

attachEventListners(document.querySelector('main'));
/* eslint-enable */
