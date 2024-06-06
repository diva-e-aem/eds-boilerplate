import { toClassName } from 'Utils/toClassName';

/*
  This function reads the configuration of a block from the HTML file
  and returns it as a Record<string, string | string[]> object.
  @param {Element} block The block element
*/
export function readBlockConfig(block: Element): Record<string, string | string[]> {
  const config: Record<string, string | string[]> = {};
  block.querySelectorAll(':scope > div').forEach((row) => {
    if (row.children) {
      const cols = [...row.children];
      if (cols[1]) {
        const col = cols[1];
        const name = toClassName(cols[0].textContent ?? '');
        let value: string | string[] = '';
        if (col.querySelector('a')) {
          const as = [...col.querySelectorAll('a')];
          if (as.length === 1) {
            value = as[0].href;
          } else {
            value = as.map((a) => a.href);
          }
        } else if (col.querySelector('img')) {
          const imgs = [...col.querySelectorAll('img')];
          if (imgs.length === 1) {
            value = imgs[0].src;
          } else {
            value = imgs.map((img) => img.src);
          }
        } else if (col.querySelector('p')) {
          const ps = [...col.querySelectorAll('p')];
          if (ps.length === 1) {
            value = ps[0].textContent!;
          } else {
            value = ps.map((p) => p.textContent!);
          }
        } else {
          value = row.children[1].textContent!;
        }
        config[name] = value;
      }
    }
  });
  return config;
}
