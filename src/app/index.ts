import { DebuggerService } from '@kluntje/services';

import { isSidekickLibraryActive } from 'Helpers/sidekick/isSidekickLibraryActive';

import { decorateTemplateAndTheme } from './tasks/decorateTemplateAndTheme';
import { decorateButtons } from './tasks/decorateButtons';
import { setDocLanguage } from './tasks/setDocLanguage';
import { loadFonts } from './tasks/loadFonts';
import { initSampleRUM } from './tasks/initSampleRUM';
import { loadCSS } from './tasks/loadCSS';
import { config } from '../../config';
import { loadBlocks } from './tasks/loadBlocks';
import { transformSection } from './tasks/transformSections';
import { decorateBlocks } from './tasks/decorateBlocks';
import { sampleRUM } from './tasks/sampleRUM';
import { waitForLCP } from './tasks/waitForLCP';

class HLX {
  private beforeEagerCallbacks: Array<() => Promise<void>> = [];
  private loadEagerCallbacks: Array<() => Promise<void>> = [];
  private beforeLoadLazyCallbacks: Array<() => Promise<void>> = [];
  private loadLazyCallbacks: Array<() => Promise<void>> = [];
  private beforeLoadDelayedCallbacks: Array<() => Promise<void>> = [];
  private loadDelayedCallbacks: Array<() => Promise<void>> = [];
  private initializedCallbacks: Array<() => Promise<void>> = [];

  private beforeEagerPromise?: Promise<void>;
  private eagerPromise?: Promise<void>;
  private beforeLazyPromise?: Promise<void>;
  private lazyPromise?: Promise<void>;
  private beforeDelayedPromise?: Promise<void>;
  private delayedPromise?: Promise<void>;
  private initializedPromise?: Promise<void>;

  private get beforeEager() {
    if (this.beforeEagerPromise === undefined) {
      this.beforeEagerPromise = this.beforeLoadEager();
    }
    return this.beforeEagerPromise;
  }

  private get loadEager() {
    if (this.eagerPromise === undefined) {
      this.eagerPromise = this.loadEagerPromise();
    }
    return this.eagerPromise;
  }

  private get beforeLoadLazy() {
    if (this.beforeLazyPromise === undefined) {
      this.beforeLazyPromise = this.beforeLoadLazyPromise();
    }
    return this.beforeLazyPromise;
  }

  private get loadLazy() {
    if (this.lazyPromise === undefined) {
      this.lazyPromise = this.loadLazyPromise();
    }
    return this.lazyPromise;
  }

  private get beforeLoadDelayed() {
    if (this.beforeDelayedPromise === undefined) {
      this.beforeDelayedPromise = this.beforeLoadDelayedPromise();
    }
    return this.beforeDelayedPromise;
  }

  private get loadDelayed() {
    if (this.delayedPromise === undefined) {
      this.delayedPromise = this.loadDelayedPromise();
    }
    return this.delayedPromise;
  }

  private get initialized() {
    if (this.initializedPromise === undefined) {
      this.initializedPromise = this.getInitializedPromise();
    }
    return this.initializedPromise;
  }

  public addBeforeEagerTask(cb: () => Promise<void>) {
    this.beforeEagerCallbacks.push(cb);
  }

  public addLoadEagerTask(cb: () => Promise<void>) {
    this.loadEagerCallbacks.push(cb);
  }

  public addBeforeLoadLazyTask(cb: () => Promise<void>) {
    this.beforeLoadLazyCallbacks.push(cb);
  }

  public addLoadLazyTask(cb: () => Promise<void>) {
    this.loadLazyCallbacks.push(cb);
  }

  public addBeforeLoadDelayedTask(cb: () => Promise<void>) {
    this.beforeLoadDelayedCallbacks.push(cb);
  }

  public addLoadDelayedTask(cb: () => Promise<void>) {
    this.loadDelayedCallbacks.push(cb);
  }

  public addInitializedTask(cb: () => Promise<void>) {
    this.initializedCallbacks.push(cb);
  }

  public async init() {
    await this.beforeEager;
    await this.loadEager;
    await this.beforeLoadLazy;
    await this.loadLazy;
    await this.beforeLoadDelayed;
    await this.loadDelayed;
    await this.initialized;
  }

  private async beforeLoadEager(): Promise<void> {
    const beforeLoadEagerTask: Promise<void> = new Promise((resolve) => {
      initSampleRUM();
      decorateTemplateAndTheme();
      setDocLanguage();
      resolve();
    });

    await Promise.all([...this.beforeEagerCallbacks.map((cb) => cb()), beforeLoadEagerTask]);
  }

  private async loadEagerPromise(): Promise<void> {
    // eslint-disable-next-line no-async-promise-executor, @typescript-eslint/no-misused-promises
    const loadEagerTask = new Promise<void>(async (resolve) => {
      try {
        const main = document.querySelector('main') as HTMLElement;
        decorateButtons(main);
        transformSection(main);
        decorateBlocks(main);
        setTimeout(() => {
          document.body.classList.add('show');
          resolve();
        }, 100);

        /* if desktop (proxy for fast connection) or fonts already loaded, load fonts.css */
        if (window.innerWidth >= 900 || sessionStorage.getItem('fonts-loaded')) {
          await loadFonts();
        }
      } catch (error) {
        DebuggerService.error('index: could not load fonts', error);
      }
    });

    await Promise.all([...this.loadEagerCallbacks.map((cb) => cb()), loadEagerTask, waitForLCP()]);
  }

  private async beforeLoadLazyPromise(): Promise<void> {
    const beforeLoadLazyTask: Promise<void> = new Promise((resolve) => resolve());

    await Promise.all([...this.beforeLoadLazyCallbacks.map((cb) => cb()), beforeLoadLazyTask]);
  }

  private async loadLazyPromise(): Promise<void> {
    // eslint-disable-next-line no-async-promise-executor, @typescript-eslint/no-misused-promises
    const loadLazyTask: Promise<void> = new Promise(async (resolve) => {
      try {
        const {
          lazyStylesScssPath,
          sidekickLibraryStylesScssPath,
          fontsScssPath,
          lazyStylesCssPath,
          sidekickLibraryStylesCssPath,
        } = config;

        await loadBlocks();

        const { hash } = window.location;
        const element = hash ? document.getElementById(hash.substring(1)) : false;
        if (hash && element) element.scrollIntoView();

        if (lazyStylesScssPath && lazyStylesCssPath) await loadCSS(lazyStylesCssPath);
        if (sidekickLibraryStylesScssPath && sidekickLibraryStylesCssPath && isSidekickLibraryActive()) {
          await loadCSS(sidekickLibraryStylesCssPath);
        }
        if (fontsScssPath) await loadFonts();
        sampleRUM('lazy');
        const main = document.querySelector('main') as HTMLElement;
        // @ts-ignore
        sampleRUM.observe(main.querySelectorAll('div[data-block-name]'));
        // @ts-ignore
        sampleRUM.observe(main.querySelectorAll('picture > img'));
      } catch (error) {
        DebuggerService.error('LoadLazyTask: ', error);
      }
      resolve();
    });

    await Promise.all([...this.loadLazyCallbacks.map((cb) => cb()), loadLazyTask]);
  }

  private async beforeLoadDelayedPromise(): Promise<void> {
    const beforeLoadDelayedTask: Promise<void> = new Promise((resolve) => resolve());

    await Promise.all([...this.beforeLoadDelayedCallbacks.map((cb) => cb()), beforeLoadDelayedTask]);
  }

  private async loadDelayedPromise(): Promise<void> {
    const loadDelayedTask: Promise<void> = new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });

    await Promise.all([...this.loadDelayedCallbacks.map((cb) => cb()), loadDelayedTask]);
  }

  private async getInitializedPromise(): Promise<void> {
    const initializedTask: Promise<void> = new Promise((resolve) => resolve());

    await Promise.all([...this.initializedCallbacks.map((cb) => cb()), initializedTask]);
  }
}

export default new HLX();
