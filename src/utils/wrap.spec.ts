import { wrap } from 'Utils/wrap';

describe('wrap', () => {
  let parentElement: HTMLElement;
  let elementToWrap: HTMLElement;
  let wrapperElement: HTMLElement;

  beforeEach(() => {
    parentElement = document.createElement('div');
    elementToWrap = document.createElement('span');
    wrapperElement = document.createElement('div');
    parentElement.appendChild(elementToWrap);
  });

  test('wraps the element with the wrapper element', () => {
    elementToWrap.textContent = 'test';
    wrap(elementToWrap, wrapperElement);
    expect(wrapperElement.contains(elementToWrap)).toBe(true);
  });

  test('inserts the wrapper before the element in the DOM', () => {
    wrap(elementToWrap, wrapperElement);
    expect(parentElement.firstChild).toBe(wrapperElement);
  });
});
