import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { until } from 'lit/directives/until.js';
import { DebuggerService } from '@kluntje/services';

import { ICONS_PATH } from 'Constants/paths';

// Vite runs on build time and finds all svg files in icons directory
// Since import.meta.glob only accepts literals ICON_PATH cant be used
const modules = import.meta.glob('/public/icons/*.svg', { as: 'raw' });

@customElement('icon-component')
export class Icon extends LitElement {
  @property({ type: String })
  name: string = '';

  async getSvg(name: string) {
    const key = modules[`${ICONS_PATH}/${name}.svg`];
    const iconMarkupFunc = key ?? modules[`${ICONS_PATH}/cross.svg`];
    try {
      const iconMarkup = await iconMarkupFunc();
      return unsafeSVG(iconMarkup);
    } catch (error) {
      DebuggerService.error(`Icon Component: SVG icon: ${error.message}`, error);
      return;
    }
  }

  render() {
    const svg = this.getSvg(this.name);
    return html`${until(svg)}`;
  }

  static readonly styles = css`
    :host {
      display: flex;
      align-items: center;
    }

    svg {
      width: 100%;
      height: auto;
    }
  `;
}
