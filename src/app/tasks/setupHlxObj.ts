import { DebuggerService } from '@kluntje/services';

export default function setupHlxObj(mainScriptPath = '/dist/main/main.js') {
  window.hlx = window.hlx || {};
  window.hlx.RUM_MASK_URL = 'full';
  window.hlx.codeBasePath = '';
  window.hlx.lighthouse = new URLSearchParams(window.location.search).get('lighthouse') === 'on';

  const scriptEl = document.querySelector(`script[src$="${mainScriptPath}"]`) as HTMLScriptElement;
  if (scriptEl) {
    try {
      [window.hlx.codeBasePath] = new URL(scriptEl.src).pathname.split(mainScriptPath);
    } catch (error) {
      DebuggerService.log('setupHlxObj: Could not set codeBasePath.', error);
    }
  }
}
