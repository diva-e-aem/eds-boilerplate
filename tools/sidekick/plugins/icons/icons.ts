import { html, render } from 'lit';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
// @ts-ignore import module
import { PLUGIN_EVENTS } from 'https://main--franklin-library-host--dylandepass.hlx.live/tools/sidekick/library/events/events.js';
import './icons.scss';

interface ImportMeta {
  glob: (pattern: string) => Record<string, () => Promise<unknown>>;
}


const fetchIconNames = async (): Promise<{ name: string; path: string }[]> => {
  const iconFiles = import.meta.glob('/public/icons/*.svg');
  return Object.keys(iconFiles).map((iconPath) => ({
    name: iconPath.replace(/^.*\/(.*?)\.svg$/, '$1'),
    path: iconPath,
  }));
};


const loadSVGIcon = async (iconPath: string): Promise<string> => {
  try {
    const response = await fetch(iconPath);
    if (response.ok) {
      return await response.text();
    }
  } catch (error) {
    console.error(`Error loading icon: ${iconPath}`, error);
  }
  return '';
};

export async function decorate(container: HTMLElement): Promise<void> {
  const renderDynamicIcons = async () => {
    const iconNames = await fetchIconNames();
    const dynamicIcons = await Promise.all(
      iconNames.map(async ({ name, path }) => {
        const svgIcon = await loadSVGIcon(path);
        return html`
          <div class="icons_title">
            <div class="icon" title="${name}">
              ${unsafeHTML(svgIcon)}
              <span>${name}</span>
            </div>
          </div>
        `;
      })
    );

    return html` <div class="icons-container dynamic-icons">${dynamicIcons}</div> `;
  };

  render(await renderDynamicIcons(), container);

  container.dispatchEvent(
    new CustomEvent(PLUGIN_EVENTS.TOAST, {
      detail: { message: 'Icons rendered successfully!' },
    })
  );
}

export default {
  title: 'Icons',
};
