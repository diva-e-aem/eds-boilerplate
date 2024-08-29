import { moveInstrumentation } from '../helpers/moveInstrumentation';

describe('moveInstrumentation', () => {
  const fromSelector = '.fromEl';
  const toSelector = '.toEl';
  let fromElement: HTMLElement;
  let toElement: HTMLElement;

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="fromEl" data-aue-attribute="value" data-richtext></div>
      <div class="toEl"></div>
    `;
    fromElement = document.querySelector(fromSelector) as HTMLElement;
    toElement = document.querySelector(toSelector) as HTMLElement;
  });

  afterEach(() => {
    // Clean up the DOM elements after each test
    document.body.innerHTML = '';
  });

  it('should move instrumentation attributes from one element to another using CSS selectors', () => {
    moveInstrumentation(fromSelector, toSelector);

    expect(fromElement.getAttribute('data-aue-attribute')).toBeNull();
    expect(toElement.getAttribute('data-aue-attribute')).toBe('value');
  });

  it('should move instrumentation attributes from one element to another using element references', () => {
    moveInstrumentation(fromElement, toElement);

    expect(fromElement.getAttribute('data-aue-attribute')).toBeNull();
    expect(toElement.getAttribute('data-aue-attribute')).toBe('value');
  });

  it('should move instrumentation attributes from one element to another using a mix of CSS selector and element reference', () => {
    moveInstrumentation(fromSelector, toElement);

    expect(fromElement.getAttribute('data-aue-attribute')).toBeNull();
    expect(toElement.getAttribute('data-aue-attribute')).toBe('value');
  });
});
