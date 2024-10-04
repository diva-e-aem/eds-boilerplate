/*
 * Copyright 2023 Adobe. All rights reserved.
 * Licensed under the Apache License, Version 2.0
 */

// @ts-ignore import module
import { PLUGIN_EVENTS } from 'https://main--franklin-library-host--dylandepass.hlx.live/tools/sidekick/library/events/events.js';
import { renderIcon } from '../../../../src/components/icon/icon.template.ts';
import { IconName } from '../../../../src/icons.types.ts';

const selectedIcons: IconName[] = [];

function getSelectedLabel(): string {
  return selectedIcons.length > 0
    ? `${selectedIcons.length} icon${selectedIcons.length > 1 ? 's' : ''} selected`
    : 'No icons selected';
}

function getFilteredIcons(data: IconName[], query: string): IconName[] {
  if (!query) {
    return data;
  }
  return data.filter((icon) => icon.toLowerCase().includes(query.toLowerCase()));
}

export async function decorate(container: HTMLElement, data: IconName[], query: string): Promise<void> {
  const createMenuItems = (): string => {
    const filteredIcons = getFilteredIcons(data, query);
    return filteredIcons
      .map((icon) => {
        const isSelected = selectedIcons.includes(icon);
        return `
        <sp-menu-item value="${icon}" ${isSelected ? 'selected' : ''}>
          ${renderIcon(icon)} ${icon}
        </sp-menu-item>
      `;
      })
      .join('');
  };

  const handleMenuItemClick = (e: Event): void => {
    const target = e.target as HTMLOptionElement;
    const { value, selected } = target;

    if (selected) {
      const index = selectedIcons.indexOf(value as IconName);
      if (index > -1) {
        selectedIcons.splice(index, 1);
      }
    } else {
      selectedIcons.push(value as IconName);
    }

    const selectedLabel = container.querySelector('.selectedLabel');
    if (selectedLabel) {
      selectedLabel.textContent = getSelectedLabel();
    }
  };

  const handleCopyButtonClick = (): void => {
    navigator.clipboard.writeText(selectedIcons.join(', '));
    container.dispatchEvent(
      new CustomEvent(PLUGIN_EVENTS.TOAST, {
        detail: { message: 'Copied Icons' },
      })
    );
  };

  const menuItems = createMenuItems();
  const sp = `
    <sp-menu
      label="Select icons"
      selects="multiple"
      data-testid="icons-overview"
    >
      ${menuItems}
    </sp-menu>
    <sp-divider size="s"></sp-divider>
    <div class="footer">
      <span class="selectedLabel">${getSelectedLabel()}</span>
      <sp-action-button label="Copy" quiet>
        <sp-icon-copy slot="icon"></sp-icon-copy>
      </sp-action-button>
    </div>
  `;

  const spContainer = document.createElement('div');
  spContainer.classList.add('container');
  spContainer.innerHTML = sp;
  container.append(spContainer);

  const menuItemElements = spContainer.querySelectorAll('sp-menu-item');
  menuItemElements.forEach((item) => {
    item.addEventListener('click', handleMenuItemClick);
  });

  const copyButton = spContainer.querySelector('sp-action-button');
  if (copyButton) {
    copyButton.addEventListener('click', handleCopyButtonClick);
  }
}

export default {
  title: 'Icon Overview',
  searchEnabled: true,
};
