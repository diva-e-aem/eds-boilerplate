/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
import './iconnn.scss';
// @ts-ignore import module
import { PLUGIN_EVENTS } from 'https://main--franklin-library-host--dylandepass.hlx.live/tools/sidekick/library/events/events.js';

interface IconItem {
  icon: string;
}
function getFilteredIcons(data: IconItem[], query: string): IconItem[] {
  if (!query) {
    return data;
  }
  return data.filter((item) => item.icon.toLowerCase().includes(query.toLowerCase()));
}

const iconExists = (iconName: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = `/public/icons/${iconName}.svg`;
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
  });
};
const createMenuItems = async (data: IconItem[], query: string): Promise<string> => {
  const filteredIcons = getFilteredIcons(data, query);
  const itemsPromises = filteredIcons.map(async (item) => {
    const iconExistsFlag = await iconExists(item.icon);
    const iconPath = iconExistsFlag ? `/public/icons/${item.icon}.svg` : '';
    return `
      <div class="icons-item">
        ${iconPath ? `<img src="${iconPath}" alt="${item.icon} icon" class="icon-icon" />` : ''}
        <span class="icon-title">${item.icon}</span>
      </div>
    `;
  });

  const items = await Promise.all(itemsPromises);
  return items.join('');
};
export async function decorate(container: HTMLElement, data: IconItem[], query: string): Promise<void> {
  const menuItems = await createMenuItems(data, query);
  const spContainer = document.createElement('div');
  spContainer.classList.add('container-icon');
  spContainer.innerHTML = menuItems;
  container.append(spContainer);

  document.dispatchEvent(
    new CustomEvent(PLUGIN_EVENTS.TOAST, {
      detail: { message: 'Icons loaded successfully!' },
    })
  );
}

export default {
  title: 'Iconnn',
  searchEnabled: true,
};
