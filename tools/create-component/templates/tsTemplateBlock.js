module.exports = function ({ kebabCase }) {
  return `import { html, render } from 'lit';
import './${kebabCase}.scss';

interface TemplateArgs {
  heading: string;
  text: string;
}

const template = (args: TemplateArgs) => {
  const { heading, text } = args;
  return html\`
    <h1>\${heading}</h1>
    <p>\${text}</p>
  \`;
};

export default function decorate(block: HTMLElement) {
  const heading: string = "This is a heading.";
  const text: string = "This is text.";

  block.style.removeProperty('display');
  render(template({ heading, text }), block);
}
`;
};
