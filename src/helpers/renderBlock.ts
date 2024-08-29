import { render, RenderOptions, TemplateResult } from 'lit';
import { DebuggerService } from '@kluntje/services';

import { cleanUpBlock } from 'Utils/cleanUpBlock';

import { moveInstrumentation } from './moveInstrumentation';

interface MoveInstrumentationsOption {
  from: Element | string;
  to: Element | string;
}

interface RenderBlockOptions {
  template: TemplateResult;
  container: HTMLElement;
  cleanUp?: boolean;
  litRenderOptions?: RenderOptions;
  moveInstrumentationsOptions?: MoveInstrumentationsOption | MoveInstrumentationsOption[];
}

/**
 * Renders a lit-html template into a container, optionally cleaning up the container
 * and moving instrumentation attributes.
 *
 * @param {RenderBlockOptions} options - The options for rendering the block.
 * @param {TemplateResult} options.template - The lit-html template to render.
 * @param {HTMLElement} options.container - The container element to render the template into.
 * @param {boolean} [options.cleanUp=true] - Whether to clean up the container before rendering. default: true.
 * @param {RenderOptions} [options.litRenderOptions] - Additional options for the lit-html render function.
 * @param {MoveInstrumentationsOption | MoveInstrumentationsOption[]} [options.moveInstrumentationsOptions] -
 *        Options for moving instrumentation attributes. Can be a single option or an array of options.
 *
 * @example
 * // Basic usage:
 * renderBlock({
 *   template: html`<div>Hello, world!</div>`,
 *   container: document.getElementById('app')
 * });
 *
 * @example
 * // With instrumentation attribute moving:
 * renderBlock({
 *   template: html`<div id="target"></div>`,
 *   container: document.getElementById('app'),
 *   moveInstrumentationsOptions: {
 *     from: '#source',
 *     to: '#target'
 *   }
 * });
 *
 * @example
 * // With multiple instrumentation attribute moves:
 * renderBlock({
 *   template: html`<div id="target1"></div><div id="target2"></div>`,
 *   container: document.getElementById('app'),
 *   moveInstrumentationsOptions: [
 *     { from: '#source1', to: '#target1' },
 *     { from: '#source2', to: '#target2' }
 *   ]
 * });
 *
 * @example
 * // With from or to as elements:
 * renderBlock({
 *   template: html`<div id="target1"></div><div id="target2"></div>`,
 *   container: document.getElementById('app'),
 *   moveInstrumentationsOptions: [
 *     { from: document.getElementById('source1'), to: '#target1' },
 *     { from: '#source2', to: document.getElementById('target2') }
 *   ]
 * });
 *
 *
 * @example
 * // With clean up disabled:
 * renderBlock({
 *   template: html`<div>Hello, world!</div>`,
 *   container: document.getElementById('app'),
 *   cleanUp: false
 * });
 *
 *
 * @returns {void}
 */
export const renderBlock = (options: RenderBlockOptions) => {
  const { template, container, cleanUp = true, litRenderOptions, moveInstrumentationsOptions } = options;

  if (cleanUp) {
    cleanUpBlock(container);
  }

  render(template, container, litRenderOptions);

  if (moveInstrumentationsOptions) {
    const moveOptions = Array.isArray(moveInstrumentationsOptions)
      ? moveInstrumentationsOptions
      : [moveInstrumentationsOptions];
    moveOptions.forEach(({ from, to }) => {
      try {
        moveInstrumentation(from, to);
      } catch (error) {
        DebuggerService.error('Error moving instrumentation attributes:', error);
      }
    });
  }
};
