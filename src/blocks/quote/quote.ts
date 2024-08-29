import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import './quote.scss';
import { renderBlock } from 'Helpers/renderBlock';

const template = ({ quote, author }: { quote: string; author: string }) => {
  return html`
    <blockquote class="quote__content">${unsafeHTML(quote)}</blockquote>
    <p class="quote__author">${author}</p>
  `;
};

export default function decorate(block: HTMLElement) {
  const quote = block.children[0].children[0].children[0] as HTMLDivElement;
  const author = block.children[1].children[0].children[0] as HTMLParagraphElement;

  renderBlock({
    template: template({ quote: quote.innerHTML, author: author.innerText }),
    container: block,
    moveInstrumentationsOptions: [
      { from: quote, to: '.quote__content' },
      { from: author, to: '.quote__author' },
    ],
  });
}
