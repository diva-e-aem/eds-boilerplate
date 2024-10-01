/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import { PLUGIN_EVENTS } from 'https://main--franklin-library-host--dylandepass.hlx.live/tools/sidekick/library/events/events.js';

const selectedTags = [];

function getSelectedLabel() {
  return selectedTags.length > 0 ? `${selectedTags.length} tag${selectedTags.length > 1 ? 's' : ''} selected` : 'No tags selected';
}

function getFilteredTags(data, query) {
  if (!query) {
    return data;
  }

  return data.filter(item => item.tag.toLowerCase().includes(query.toLowerCase()));
}

export async function decorate(container, data, query) {
  const createMenuItems = () => {
    const filteredTags = getFilteredTags(data, query);
    return filteredTags.map((item) => {
      const isSelected = selectedTags.includes(item.tag);
      return `
        <sp-menu-item value="${item.tag}" ${isSelected ? "selected" : ""}>
          ${item.tag}
        </sp-menu-item>
      `;
    }).join("");
  };

  const handleMenuItemClick = (e) => {
    const { value, selected } = e.target;
    if (selected) {
      const index = selectedTags.indexOf(value);
      if (index > -1) {
        selectedTags.splice(index, 1);
      }
    } else {
      selectedTags.push(value);
    }

    const selectedLabel = container.querySelector(".selectedLabel");
    selectedLabel.textContent = getSelectedLabel();
  };

  const handleCopyButtonClick = () => {
    navigator.clipboard.writeText(selectedTags.join(", "));
    container.dispatchEvent(
      new CustomEvent(PLUGIN_EVENTS.TOAST, {
        detail: { message: "Copied Tags" },
      })
    );
  };

  const menuItems = createMenuItems();
  const sp = `
    <sp-menu
      label="Select tags"
      selects="multiple"
      data-testid="taxonomy"
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

  const spContainer = document.createElement("div");
  spContainer.classList.add('container');
  spContainer.innerHTML = sp;
  container.append(spContainer);

  const menuItemElements = spContainer.querySelectorAll("sp-menu-item");
  menuItemElements.forEach((item) => {
    item.addEventListener("click", handleMenuItemClick);
  });

  const copyButton = spContainer.querySelector("sp-action-button");
  copyButton.addEventListener("click", handleCopyButtonClick);
}

export default {
  title: 'Tags',
  searchEnabled: true,
};