import { html } from 'lit';

import { IconName } from 'Types/icons.types';

export const renderIcon = (icon: IconName, cssClasses?: string) => {
  return html`<icon-component
    class="icon-component${cssClasses ? ` ${cssClasses}` : ''}"
    name="${icon}"
  ></icon-component>`;
};
