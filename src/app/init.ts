import HLX from './index.ts';

const READY_STATES = {
  interactive: 'interactive',
  complete: 'complete',
};

function init() {
  HLX.addBeforeEagerTask(() => {
    const main = document.getElementsByTagName('main')[0];
    main.setAttribute('id', 'main');
    return Promise.resolve();
  });

  HLX.init();
}

export function initHLXApp() {
  if (document.readyState === READY_STATES.interactive || document.readyState === READY_STATES.complete) {
    init();
  } else {
    document.addEventListener('readystatechange', () => {
      const readyState = document.readyState;
      if (readyState === READY_STATES.interactive || readyState === READY_STATES.complete) {
        init();
      }
    });
  }
}
