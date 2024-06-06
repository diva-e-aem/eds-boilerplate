module.exports = function ({ kebabCase, pascalCase }) {
  return `import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import './${kebabCase}.scss';

@customElement('${kebabCase}')
export class ${pascalCase} extends LitElement {
  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  render() {
    return html\`
      <h1>This is a heading.</h1>
      <p>This is text.</p>
    \`;
  }
}
`;
};
