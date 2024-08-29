import { collectBlocks } from './collectBlocks';
import { loadBlockModules } from './loadBlockModules';
import { loadBlockStyles } from './loadBlockStyles';
import { config } from '../../../config';
import { showSection } from './showSection';

/**
 * Wait for the Largest Contentful Paint (LCP) candidate to be loaded.
 * This function will load the modules and styles for the first section after the LCP candidate.
 * @returns {Promise<Event | void>}
 */
export async function waitForLCP(): Promise<Event | void> {
  const firstSection: HTMLElement | null = document.querySelector('.section');
  const lcpCandidate = document.querySelector<HTMLImageElement>('main img');
  const { lcpBlocks } = config;

  if (firstSection) {
    const blocks = collectBlocks(firstSection);
    const blockPromises: Promise<void>[] = [];

    for (const block of blocks) {
      if (lcpBlocks?.includes(block.name)) {
        blockPromises.push(loadBlockModules(block), loadBlockStyles(block));
      }
      if (blockPromises.length < 1 && blocks.length > 0) {
        const firstBlock = blocks[0];
        blockPromises.push(loadBlockModules(firstBlock), loadBlockStyles(firstBlock));
      }
    }

    await Promise.all(blockPromises);
    showSection(firstSection);
  }

  // @ts-ignore
  if (document.body.style.display === 'none') {
    // @ts-ignore
    document.body.style.display = null;
  }

  await new Promise<Event | void>((resolve) => {
    if (lcpCandidate && !lcpCandidate.complete) {
      lcpCandidate.setAttribute('loading', 'eager');
      lcpCandidate.setAttribute('fetchpriority', 'high');
      lcpCandidate.addEventListener('load', (ev: Event) => resolve(ev));
      lcpCandidate.addEventListener('error', (ev: Event) => resolve(ev));
    } else {
      resolve();
    }
  });
}
