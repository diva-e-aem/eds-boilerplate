// @ts-ignore import module
import { PLUGIN_EVENTS } from 'https://main--franklin-library-host--dylandepass.hlx.live/tools/sidekick/library/events/events.js';

export async function decorate(container, data, query) {
  const group = document.createElement('sp-button-group');
  group.setAttribute('vertical', '');

  const positiveToastButton = document.createElement('sp-button');
  positiveToastButton.setAttribute('variant', 'primary');
  positiveToastButton.textContent = 'Positive Toast';
  group.append(positiveToastButton);

  positiveToastButton.addEventListener('click', () => {
    container.dispatchEvent(new CustomEvent(PLUGIN_EVENTS.TOAST, { detail: { message: 'Toast Shown!' } }));
  });

  const negativeToastButton = document.createElement('sp-button');
  negativeToastButton.setAttribute('variant', 'negative');
  negativeToastButton.textContent = 'Negative Toast';
  group.append(negativeToastButton);

  negativeToastButton.addEventListener('click', () => {
    container.dispatchEvent(
      new CustomEvent(PLUGIN_EVENTS.TOAST, { detail: { message: 'Toast Shown!', variant: 'negative' } })
    );
  });

  const showLoaderButton = document.createElement('sp-button');
  showLoaderButton.setAttribute('variant', 'primary');
  showLoaderButton.textContent = 'Show Loader';
  group.append(showLoaderButton);

  showLoaderButton.addEventListener('click', () => {
    group.style.display = 'none';
    container.dispatchEvent(new CustomEvent(PLUGIN_EVENTS.SHOW_LOADER));
    setTimeout(() => {
      group.style.display = 'inline-flex';
      container.dispatchEvent(new CustomEvent(PLUGIN_EVENTS.HIDE_LOADER));
    }, 2000);
  });

  container.append(group);
}

export default {
  title: 'API Test',
  searchEnabled: false,
};
