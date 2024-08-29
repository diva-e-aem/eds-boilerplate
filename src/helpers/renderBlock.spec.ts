import { html, render, RenderOptions } from 'lit';

import { cleanUpBlock } from 'Utils/cleanUpBlock';
import { renderBlock } from 'Helpers/renderBlock';
import { moveInstrumentation } from 'Helpers/moveInstrumentation';

jest.mock('lit', () => ({
  html: (strings: TemplateStringsArray, ...values: unknown[]) => {
    return { strings, values };
  },
  render: jest.fn(),
}));

jest.mock('Utils/cleanUpBlock', () => ({
  cleanUpBlock: jest.fn(),
}));

jest.mock('Helpers/moveInstrumentation', () => ({
  moveInstrumentation: jest.fn(),
}));

describe('renderBlock', () => {
  let template: ReturnType<typeof html>;
  let container: HTMLElement;

  beforeEach(() => {
    template = html`<div>Hello, world!</div>`;
    container = document.createElement('div');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call cleanUpBlock if cleanUp option is true', () => {
    const cleanUp = true;

    renderBlock({ template, container, cleanUp });

    expect(cleanUpBlock).toHaveBeenCalledWith(container);
  });

  it('should not call cleanUpBlock if cleanUp option is false', () => {
    const cleanUp = false;

    renderBlock({ template, container, cleanUp });

    expect(cleanUpBlock).not.toHaveBeenCalled();
  });

  it('should call render with the correct lit RenderOptions parameters', () => {
    const litRenderOptions: RenderOptions = {
      host: container,
      renderBefore: container.firstChild,
      creationScope: { importNode: jest.fn(() => document.createElement('div')) },
      isConnected: true,
    };

    renderBlock({ template, container, litRenderOptions });

    expect(render).toHaveBeenCalledWith(template, container, litRenderOptions);
  });

  it('should call moveInstrumentation once with a single option', () => {
    const moveInstrumentationsOptions = { from: '#source', to: '#target' };
    const { from, to } = moveInstrumentationsOptions;

    renderBlock({ template, container, moveInstrumentationsOptions });

    expect(moveInstrumentation).toHaveBeenCalledWith(from, to);
    expect(moveInstrumentation).toHaveBeenCalledTimes(1);
  });

  it('should call moveInstrumentation twice with an array of options', () => {
    const moveInstrumentationsOptions = [
      { from: '#source1', to: '#target1' },
      { from: '#source2', to: '#target2' },
    ];
    const from1 = moveInstrumentationsOptions[0].from;
    const to1 = moveInstrumentationsOptions[0].to;
    const from2 = moveInstrumentationsOptions[1].from;
    const to2 = moveInstrumentationsOptions[1].to;

    renderBlock({ template, container, moveInstrumentationsOptions });
    expect(moveInstrumentation).toHaveBeenCalledTimes(2);
    expect(moveInstrumentation).toHaveBeenNthCalledWith(1, from1, to1);
    expect(moveInstrumentation).toHaveBeenNthCalledWith(2, from2, to2);
  });
});
