import './components/icon/icon.ts';
import { initHLXApp } from './app/init.ts';

initHLXApp();

declare global {
  interface Window {
    hlx: {
      RUM_MASK_URL: string;
      codeBasePath: string;
      lighthouse: boolean;
    };
  }
}
