import { sampleRUM } from './sampleRUM';
import setupHlxObj from './setupHlxObj';

export function initSampleRUM() {
  setupHlxObj();
  sampleRUM('top');

  window.addEventListener('load', () => sampleRUM('load'));

  window.addEventListener('unhandledrejection', (event) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- this is Adobe code
    sampleRUM('error', { source: event.reason.sourceURL, target: event.reason.line });
  });

  window.addEventListener('error', (event) => {
    sampleRUM('error', { source: event.filename, target: event.lineno });
  });
}
