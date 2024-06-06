/* eslint-disable -- Adobe code */
/**
 * log RUM if part of the sample.
 * @param {string} checkpoint identifies the checkpoint in funnel
 * @param {Object} data additional data for RUM sample
 * @param {string} data.source DOM node that is the source of a checkpoint event,
 * identified by #id or .classname
 * @param {string} data.target subject of the checkpoint event,
 * for instance the href of a link, or a search term
 */

export function sampleRUM(checkpoint, data = {}) {
  // @ts-ignore
  sampleRUM.defer = sampleRUM.defer || [];
  const defer = (fnname) => {
    // @ts-ignore
    sampleRUM[fnname] = sampleRUM[fnname] || ((...args) => sampleRUM.defer.push({ fnname, args }));
  };
  // @ts-ignore
  sampleRUM.drain =
    // @ts-ignore
    sampleRUM.drain ||
    ((dfnname, fn) => {
      sampleRUM[dfnname] = fn;
      // @ts-ignore
      sampleRUM.defer
        .filter(({ fnname }) => dfnname === fnname)
        .forEach(({ fnname, args }) => sampleRUM[fnname](...args));
    });
  // @ts-ignore
  sampleRUM.always = sampleRUM.always || [];
  // @ts-ignore
  sampleRUM.always.on = (chkpnt, fn) => {
    // @ts-ignore
    sampleRUM.always[chkpnt] = fn;
  };
  // @ts-ignore
  sampleRUM.on = (chkpnt, fn) => {
    // @ts-ignore
    sampleRUM.cases[chkpnt] = fn;
  };
  defer('observe');
  defer('cwv');
  try {
    window.hlx = window.hlx || {};
    // @ts-ignore
    if (!window.hlx.rum) {
      const usp = new URLSearchParams(window.location.search);
      const weight = usp.get('rum') === 'on' ? 1 : 100; // with parameter, weight is 1. Defaults to 100.
      const id = Array.from({ length: 75 }, (_, i) => String.fromCharCode(48 + i))
        .filter((a) => /\d|[A-Z]/i.test(a))
        .filter(() => Math.random() * 75 > 70)
        .join('');
      const random = Math.random();
      const isSelected = random * weight < 1;
      const firstReadTime = Date.now();
      const urlSanitizers = {
        full: () => window.location.href,
        origin: () => window.location.origin,
        path: () => window.location.href.replace(/\?.*$/, ''),
      };
      // @ts-ignore
      window.hlx.rum = {
        weight,
        id,
        random,
        isSelected,
        firstReadTime,
        sampleRUM,
        sanitizeURL: urlSanitizers[window.hlx.RUM_MASK_URL || 'path'],
      };
    }
    // @ts-ignore
    const { weight, id, firstReadTime } = window.hlx.rum;
    // @ts-ignore
    if (window.hlx && window.hlx.rum && window.hlx.rum.isSelected) {
      const knownProperties = [
        'weight',
        'id',
        'referer',
        'checkpoint',
        't',
        'source',
        'target',
        'cwv',
        'CLS',
        'FID',
        'LCP',
        'INP',
      ];
      const sendPing = (pdata = data) => {
        const body = JSON.stringify(
          {
            weight,
            id,
            // @ts-ignore
            referer: window.hlx.rum.sanitizeURL(),
            checkpoint,
            t: Date.now() - firstReadTime,
            ...data,
          },
          knownProperties
        );
        const url = `https://rum.hlx.page/.rum/${weight}`;
        navigator.sendBeacon(url, body);
        // eslint-disable-next-line no-console
        console.debug(`ping:${checkpoint}`, pdata);
      };
      // @ts-ignore
      sampleRUM.cases = sampleRUM.cases || {
        // @ts-ignore
        cwv: () => sampleRUM.cwv(data) || true,
        lazy: () => {
          // use classic script to avoid CORS issues
          const script = document.createElement('script');
          script.src = 'https://rum.hlx.page/.rum/@adobe/helix-rum-enhancer@^1/src/index.js';
          document.head.appendChild(script);
          return true;
        },
      };
      sendPing(data);
      // @ts-ignore
      if (sampleRUM.cases[checkpoint]) {
        // @ts-ignore
        sampleRUM.cases[checkpoint]();
      }
    }
    // @ts-ignore
    if (sampleRUM.always[checkpoint]) {
      // @ts-ignore
      sampleRUM.always[checkpoint](data);
    }
  } catch (error) {
    // something went wrong
  }
}
