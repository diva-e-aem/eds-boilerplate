import { html, render, TemplateResult } from 'lit';

import { cleanUpBlock } from 'Utils/cleanUpBlock';
import { moveInstrumentation } from 'Helpers/moveInstrumentation';
import './accordion.scss';

const rowContentTemplate = (content: HTMLElement): TemplateResult => {
  const contentElement = document.createElement('p');
  moveInstrumentation(content, contentElement);
  contentElement.append(content.innerHTML);
  return html`${contentElement}`;
};

const rowTemplate = (row: HTMLElement): TemplateResult => {
  return html`
    <details class="accordion-item">
      <summary class="accordion-item-label">
        ${rowContentTemplate(row.children[0].querySelector('p') as HTMLElement)}
      </summary>
      <div class="accordion-item-body">${rowContentTemplate(row.children[1].querySelector('p') as HTMLElement)}</div>
    </details>
  `;
};

const template = (block: HTMLElement[]): TemplateResult => {
  return html`${block.map((row) => rowTemplate(row))}`;
};

export default function decorate(block: HTMLElement) {
  const rows = [...block.children] as HTMLDivElement[];

  cleanUpBlock(block);
  render(template(rows), block);
}
